import { createSlice } from "@reduxjs/toolkit";
import { getActivity } from "./activityThunk";

let activity = sessionStorage.getItem("activity");
let data = [];

if (activity) {
  try {
    let json = JSON.parse(activity);
    if (+new Date() - json.timestamp < 1000 * 60 * 60) {
      data = json.data;
    }
  } catch (e) {}
}
const initialState = {
  data,
  loading: false,
  status: "idle",
  completed: false,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = "idle";
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = "idle";
		},
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.status = "idle";
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = "idle";
		},
	},
  extraReducers: {
    [getActivity.pending]: (state) => {
      state.loading = true;
    },
    [getActivity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.completed = true;
    },
    [getActivity.rejected]: (state, payload) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
      state.completed = true;
    },
  },
});

// The reducer
export const activityReducer = activitySlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = activitySlice.actions;
