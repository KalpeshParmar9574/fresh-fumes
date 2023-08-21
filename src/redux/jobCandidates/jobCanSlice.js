import { createSlice } from "@reduxjs/toolkit";
import { getCandidateByJob } from "./jobCanThunk";

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

export const jobCanSlice = createSlice({
  name: "jobCan",
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
    [getCandidateByJob.pending]: (state) => {
      state.loading = true;
    },
    [getCandidateByJob.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      // state.currentPage = payload.data.currentPage;
      state.complete = true;
      state.status = "fulfilled";
    },
    [getCandidateByJob.rejected]: (state, payload) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
      state.complete = true;
      state.status = "rejected";
    },
  },
});
export const jobCanReducer = jobCanSlice.reducer;
export const { setSortBy, setOrderBy, setStatus, setCurrentPage, setLimit } =
  jobCanSlice.actions;
