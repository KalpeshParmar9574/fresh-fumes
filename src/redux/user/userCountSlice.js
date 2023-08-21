import { createSlice } from "@reduxjs/toolkit";
import { getUserCount } from "./userthunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const userCountSlice = createSlice({
	name: "userCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getUserCount.pending]: (state) => {
			state.loading = true;
		},
		[getUserCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getUserCount.rejected]: (state, payload) => {
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
	userCountSlice.actions;
export const userCountReducer = userCountSlice.reducer;
