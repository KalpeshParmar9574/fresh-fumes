import { createSlice } from "@reduxjs/toolkit";
import { getTotalInternCount } from "./internThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const internCountSlice = createSlice({
	name: "internCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getTotalInternCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalInternCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.counts;
		},
		[getTotalInternCount.rejected]: (state, payload) => {
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
	internCountSlice.actions;
export const internCountReducer = internCountSlice.reducer;
