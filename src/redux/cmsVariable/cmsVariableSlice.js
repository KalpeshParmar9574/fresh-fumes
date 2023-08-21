import { createSlice } from "@reduxjs/toolkit";
import { getCmsVariable } from "./cmsVariableThunk";

const initialState = {
  data: [],
  status: "idle",
  loading: false,
  totalPages: 0,
  limit: 5,
  totalRecords: -1,
  currentPage: 1,
  sortBy: "name",
  orderBy: "DESC",
};


export const cmsVariableSlice = createSlice({
  name: "cmsVariable",
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
    [getCmsVariable.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    [getCmsVariable.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.list;
      state.totalPages = payload.totalPages;
      state.limit = payload.limit;
      state.totalRecords = payload.totalRecords;
      state.status = "fulfilled";
    },
    [getCmsVariable.rejected]: (state) => {
      state.loading = false;
      state.status = "rejected";
      state.data = [];
    },
  },
});


export const cmsVariableReducer = cmsVariableSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } =
  cmsVariableSlice.actions;