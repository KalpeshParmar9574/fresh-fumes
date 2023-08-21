import { createSlice } from "@reduxjs/toolkit";
import { getJobDes, getCandidateByJob } from "./jobDesThunk";

const initialState = {
  data: [],
  loading: false,
  error: null,
  complete: false,
  totalPages:0,
  limit: 5,
  totalRecords: -1,
  currentPage: 0,
  sortBy: "id",
  orderBy: "DESC",
  status: "idle",
};

// A slice for getBloodGroup with our 3 reducers
export const jobDesSlice = createSlice({
  name: "jobDes",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload.orderBy;
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
      state.status = "idle";
    },
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
      state.status = "idle";
    },
  },
  extraReducers: {
    [getJobDes.pending]: (state) => {
      state.loading = true;
    },
    [getJobDes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.list || payload.data;
      state.totalPages = payload.data.totalPages;
      state.limit = payload.data.limit;
      state.totalRecords = payload.data.totalRecords;
      // state.currentPage = payload.data.currentPage;
      state.complete = true;
      state.status = "fulfilled";
    },
    [getJobDes.rejected]: (state, payload) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
      state.complete = true;
      state.status = "rejected";
    },
  },
});

// The reducer
export const jobDesReducer = jobDesSlice.reducer;
export const { setSortBy, setOrderBy, setStatus, setCurrentPage, setLimit } =
  jobDesSlice.actions;
