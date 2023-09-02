import { createSlice } from "@reduxjs/toolkit";
import { getAddressCount } from "./addressThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const addressCountSlice = createSlice({
	name: "getAddressCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getAddressCount.pending]: (state) => {
			state.loading = true;
		},
		[getAddressCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getAddressCount.rejected]: (state, payload) => {
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
addressCountSlice.actions;
export const addressCountReducer = addressCountSlice.reducer;
