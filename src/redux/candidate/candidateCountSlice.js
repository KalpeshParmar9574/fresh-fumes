import { createSlice } from "@reduxjs/toolkit";
import { getTotalCandidateCount } from "./candidateThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const candidateCountSlice = createSlice({
	name: "candidateCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getTotalCandidateCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalCandidateCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.totalCandidate;
		},
		[getTotalCandidateCount.rejected]: (state, payload) => {
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
	candidateCountSlice.actions;
export const candidateCountReducer = candidateCountSlice.reducer;
