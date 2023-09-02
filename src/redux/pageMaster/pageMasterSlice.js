import { createSlice } from "@reduxjs/toolkit";
import { getPageMaster } from "./pageMasterThunk";

const initialState = {
  data: [],
  status: "idle",
  loading: false,
  totalPages:0,
  limit: 5,
  totalRecords: -1,
  currentPage: 1,
  sortBy: "id",
  orderBy: "DESC",
};

// A slice for getBloodGroup with our 3 reducers
export const pageMasterSlice = createSlice({
  name: "pageMaster",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
      state.status = "idle";
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
      state.status = "idle";
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.status = "idle";
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload.orderBy;
      state.status = "idle";
    },
  },
  extraReducers: {
    [getPageMaster.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    [getPageMaster.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.list;
      state.totalPages = payload.totalPages;
      state.limit = payload.limit;
      state.totalRecords = payload.totalRecords;
      state.status = "fulfilled";
    },
    [getPageMaster.rejected]: (state) => {
      state.loading = false;
      state.status = "rejected";
      state.data = [];
    },
  },
});

// The reducer
export const pageMasterReducer = pageMasterSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } =
  pageMasterSlice.actions;
