import { createSlice } from "@reduxjs/toolkit";
import { getHscCourse } from "./hscCourseThunk";

const initialState = {
  data: [],
  loading: false,
  status: "idle",
  completed: false,
  error: null,
};

// A slice for getBloodGroup with our 3 reducers
export const hscCourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {
    [getHscCourse.pending]: (state) => {
      state.loading = true;
    },
    [getHscCourse.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getHscCourse.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.completed = true;
    },
  },
});

// The reducer
export const hscCourseReducer = hscCourseSlice.reducer;
