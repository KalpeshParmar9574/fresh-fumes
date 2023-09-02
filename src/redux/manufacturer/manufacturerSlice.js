import { createSlice } from '@reduxjs/toolkit';
import { getManufacturer } from './manufacturerThunk';

const initialState = {
	data: [],
	loading: false,
	complete: false,
	sortBy: 'id',
	orderBy: 'DESC',
	status: 'idle',
};

// A slice for getBloodGroup with our 3 reducers
export const manufacturerSlice = createSlice({
	name: 'manufacturer',
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
		[getManufacturer.pending]: (state) => {
			state.loading = true;
		},
		[getManufacturer.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.complete = true;
			state.status = 'fulfilled';
		},
		[getManufacturer.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.complete = true;
			state.status = 'rejected';
		},
	},
});

// The reducer
export const manufacturerReducer = manufacturerSlice.reducer;
export const { setSortBy, setOrderBy } = manufacturerSlice.actions;
