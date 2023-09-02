import { createSlice } from "@reduxjs/toolkit";
import { getStudentStatus, getStudentById, getDrivesWithStudents } from "./studentThunk";

const initialState = {
  data: [],
  studentData: {},
  loading: false,
  status: "idle",
  sortBy: "id",
  orderBy: "DESC",
  completed: false,
  error: null,
  isSearchQuery: false,
  totalRecords: -1,
};

// A slice for getBloodGroup with our 3 reducers
export const studentSlice = createSlice({
  name: "student",
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
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [getStudentStatus.pending]: (state) => {
      state.loading = true;
    },
    [getStudentStatus.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getStudentStatus.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.completed = true;
    },
    [getStudentById.pending]: (state) => {
      state.loading = true;
    },
    [getStudentById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.studentData = payload;
    },
    [getStudentById.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.completed = true;
    },
    [getDrivesWithStudents.pending]: (state) => {
      state.loading = true;
    },
    [getDrivesWithStudents.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.studentData = payload.data;
      state.isSearchQuery = payload.filter;
    },
    [getDrivesWithStudents.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.completed = true;
    },
  },
});

// The reducer
export const studentReducer = studentSlice.reducer;
export const { setSortBy, setOrderBy, setStatus, setLimit, setCurrentPage } =
  studentSlice.actions;
