import { createSlice } from "@reduxjs/toolkit";
import { getAsset } from "./thunk";

const initialState = {
	data: [],
	loading: false,
	complete: false,
	sortBy: 'id',
	orderBy: 'DESC',
	status: 'idle',
};

export const itAssetSlice = createSlice({
	name: "asset",
	initialState,
	reducers: {
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
		},
	},
	extraReducers: {
		[getAsset.pending]: (state) => {
			state.loading = true;
		},
		[getAsset.fulfilled]: (state, {payload}) => {
			state.loading = false;
			state.data = payload.data;
			state.complete = true;
			state.status = 'fulfilled';
			state.totalRecords = payload.totalRecords;
		},
		[getAsset.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
		},
	},
});

// The reducer
export const itAssetReducer = itAssetSlice.reducer;
export const { setSortBy, setOrderBy } = itAssetSlice.actions;