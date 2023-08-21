import { createSlice } from "@reduxjs/toolkit";
import { getProject } from "./projectThunk";

const initialState = {
  data: [],
  status: "idle",
  loading: false,
  totalPages:0,
  error: null,
  limit: 40,
  totalRecords: -1,
  currentPage: 0,
  sortBy: "id",
  orderBy: "DESC",
  isSearchQuery: false,
};

// A slice for getBloodGroup with our 3 reducers
export const projectSlice = createSlice({
  name: "Project",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
      state.status = "idle";
      state.error = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
      state.status = "idle";
      state.error = null;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.status = "idle";
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload.orderBy;
      state.status = "idle";
    },
    setPage: (state, action) => {
			state.page = action.payload.page;
			state.complete = false;
			state.status = "idle";
			state.error = null;
		},
  },
  extraReducers: {
    [getProject.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    [getProject.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.list;
      state.totalPages = payload.data.totalPages;
      state.currentPage = payload.data.currentPage-1;
      // state.limit = payload.data.limit;
      state.totalRecords = payload.data.totalRecords;
      state.status = "fulfilled";
      state.isSearchQuery = payload.filter;
    },
    [getProject.rejected]: (state, payload) => {
      state.loading = false;
      state.status = "rejected";
      state.data = [];
      state.error = payload;
      state.currentPage = 0;
      state.totalPages = 0;
      state.totalRecords = 0;
    },
  },
});

// The reducer
export const projectReducer = projectSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy, setPage } =
  projectSlice.actions;
