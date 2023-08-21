import { createSlice } from "@reduxjs/toolkit";
import { getProjectCount } from "./projectThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const projectCountSlice = createSlice({
	name: "getProjectCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getProjectCount.pending]: (state) => {
			state.loading = true;
		},
		[getProjectCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getProjectCount.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
			state.totalCounts = 0;
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } =
projectCountSlice.actions;
export const projectCountReducer = projectCountSlice.reducer;
