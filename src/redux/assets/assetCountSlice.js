import { createSlice } from "@reduxjs/toolkit";
import { getGeneratedAssetsCount } from "./thunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	totalAsset: null,
	usedAsset:null,
	freeAsset:null,
	complete: false,
	name: null,
};

// A slice for getBloodGroup with our 3 reducers
export const assetCountSlice = createSlice({
	name: "assetsCount",
	initialState,
	reducers: {},
	extraReducers: {
		[getGeneratedAssetsCount.pending]: (state) => {
			state.loading = true;
		},
		[getGeneratedAssetsCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = "fulfilled";
			state.complete = true;
			state.totalAsset = payload.totalAsset;
			state.usedAsset = payload.usedAsset;
			state.freeAsset = payload.freeAsset;
			state.name = payload.name;
		},
		[getGeneratedAssetsCount.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
			state.totalAsset = 0;
			state.freeAsset = 0;
			state.usedAsset = 0;
			state.name = null;
		},
	},
});

// The reducer|
export const assetCountReducer = assetCountSlice.reducer;
