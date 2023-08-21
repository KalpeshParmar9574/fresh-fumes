import { createSlice } from "@reduxjs/toolkit";
import { getTotalChangeRequestCount } from "./changeRequestThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const changeRequestCountSlice = createSlice({
	name: "changeRequestCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getTotalChangeRequestCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalChangeRequestCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getTotalChangeRequestCount.rejected]: (state, payload) => {
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
changeRequestCountSlice.actions;
export const changeRequestCountReducer = changeRequestCountSlice.reducer;
