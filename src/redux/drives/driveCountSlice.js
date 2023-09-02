import { createSlice } from "@reduxjs/toolkit";
import { getDriveCount } from "./drivesThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalCounts: null,
	complete: false,
};

// A slice for CandidateCount with our 3 reducers
export const driveCountSlice = createSlice({
	name: "getDriveCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getDriveCount.pending]: (state) => {
			state.loading = true;
		},
		[getDriveCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCounts = payload.data;
		},
		[getDriveCount.rejected]: (state, payload) => {
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
driveCountSlice.actions;
export const driveCountReducer = driveCountSlice.reducer;
