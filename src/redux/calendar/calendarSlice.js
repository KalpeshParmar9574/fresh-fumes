import { createSlice } from "@reduxjs/toolkit";
import { getCalendarData } from "./calendarThunk";

const initialState = {
  data: [],
  loading: false,
  status: "idle",
  completed: false,
};

// A slice for dashboard with our 3 reducers
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: {
    [getCalendarData.pending]: (state) => {
      state.loading = true;
    },
    [getCalendarData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.completed = true;
      state.status = "completed";
    },
    [getCalendarData.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.data = [];
      state.status = "rejected";
      state.completed = true;
    },
  },
});

// The reducer
export const calendarReducer = calendarSlice.reducer;
