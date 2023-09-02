import { createSlice } from "@reduxjs/toolkit";
import { getTotalCompanyCount } from "./companyThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const companyCountSlice = createSlice({
	name: "companyCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getTotalCompanyCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalCompanyCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.counts;
		},
		[getTotalCompanyCount.rejected]: (state, payload) => {
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
	companyCountSlice.actions;
export const companyCountReducer = companyCountSlice.reducer;
