import { createSlice } from "@reduxjs/toolkit";
import { getManufacturerCount } from "./manufacturerThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const manufacturerCountSlice = createSlice({
	name: "getManufacturerCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getManufacturerCount.pending]: (state) => {
			state.loading = true;
		},
		[getManufacturerCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getManufacturerCount.rejected]: (state, payload) => {
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
manufacturerCountSlice.actions;
export const manufacturerCountReducer = manufacturerCountSlice.reducer;
