import { createSlice } from "@reduxjs/toolkit";
import { getJobDescCount } from "./jobDesThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const jobDescCountSlice = createSlice({
	name: "getJobDescCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getJobDescCount.pending]: (state) => {
			state.loading = true;
		},
		[getJobDescCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getJobDescCount.rejected]: (state, payload) => {
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
jobDescCountSlice.actions;
export const jobDescCountReducer = jobDescCountSlice.reducer;
