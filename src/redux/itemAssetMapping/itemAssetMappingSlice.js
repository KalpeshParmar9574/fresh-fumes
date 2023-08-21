import { createSlice } from "@reduxjs/toolkit";
import { getAllAssetsMapping } from "./thunk";

const initialState = {
	data: [],
	loading: false,
	complete: false,
	sortBy: 'id',
	orderBy: 'DESC',
	status: 'idle',
};

export const itemAssetMappingSlice = createSlice({
	name: "ItemAssetMapping",
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
		[getAllAssetsMapping.pending]: (state) => {
			state.loading = true;
		},
		[getAllAssetsMapping.fulfilled]: (state, {payload}) => {
			state.loading = false;
			state.data = payload.data;
			state.complete = true;
			state.status = 'fulfilled';
		},
		[getAllAssetsMapping.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
		},
	},
});

// The reducer
export const itemAssetMappingReducer = itemAssetMappingSlice.reducer;
export const { setSortBy, setOrderBy } = itemAssetMappingSlice.actions;