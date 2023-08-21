import { createSlice } from "@reduxjs/toolkit";
import { getTotalOnboardingCandidateCount } from "./candidateThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const onboardedCandidateCountSlice = createSlice({
	name: "onboardingCandidateCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getTotalOnboardingCandidateCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalOnboardingCandidateCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload?.count;
		},
		[getTotalOnboardingCandidateCount.rejected]: (state, payload) => {
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
onboardedCandidateCountSlice.actions;
export const onboardedCandidateCountReducer = onboardedCandidateCountSlice.reducer;
