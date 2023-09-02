import { createSlice } from "@reduxjs/toolkit";
import { getTotalWorkflowCount } from "./workFlowThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const workFlowCountSlice = createSlice({
	name: "workFlowCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getTotalWorkflowCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalWorkflowCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.counts;
		},
		[getTotalWorkflowCount.rejected]: (state, payload) => {
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
	workFlowCountSlice.actions;
export const workFlowCountReducer = workFlowCountSlice.reducer;
