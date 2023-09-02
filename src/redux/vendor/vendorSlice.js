import { createSlice } from '@reduxjs/toolkit';
import { getVendor } from './vendorThunk';

const initialState = {
	data: [],
	loading: false,
	status: 'idle',
	totalPages:0,
	limit: 40,
	totalRecords: -1,
	currentPage: 0,
	dataForDropdown: [],
	dropdownStatus: 'idle',
};

// A slice for getBloodGroup with our 3 reducers
export const vendorSlice = createSlice({
	name: 'Vendor',
	initialState,
	reducers: {
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = "idle";
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = "idle";
		},
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.status = 'idle';
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = 'idle';
		},
		setStatus: (state, action) => {
			state.status = action.payload.status;
		},
	},
	extraReducers: {
		[getVendor.pending]: (state) => {
			state.loading = true;
		},
		[getVendor.fulfilled]: (state, { payload }) => {
			state.loading = false;
			if (payload.list) {
				state.data = payload.list;
				state.status = 'fulfilled';
			}

			if (!payload.list) {
				state.dataForDropdown = payload;
				state.dropdownStatus = 'fulfilled';
			}
			state.totalPages = payload.totalPages;
			// state.limit = payload.limit;
			state.totalRecords = payload.totalRecords || 0;
		},
		[getVendor.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.totalPages= 0;
			state.totalRecords = 0;
			state.status = 'rejected';
			state.dropdownStatus = 'rejected';
		},
	},
});

// The reducer
export const { setLimit, setCurrentPage, setStatus, setOrderBy, setSortBy } = vendorSlice.actions;
export const vendorReducer = vendorSlice.reducer;
