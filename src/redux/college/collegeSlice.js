import { createSlice } from '@reduxjs/toolkit';
import { getCollege } from './collegeThunk';

const initialState = {
	data: [],
	loading: false,
	status: 'idle',
	totalPages:0,
	limit: 40,
	totalRecords: -1,
	currentPage: 0,
	sortBy: 'id',
	orderBy: 'DESC',
	isSearchQuery: false,
};

// A slice for getBloodGroup with our 3 reducers
export const collegeSlice = createSlice({
	name: 'College',
	initialState,
	reducers: {
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
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = 'idle';
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = 'idle';
		},
	},
	extraReducers: {
		[getCollege.pending]: (state) => {
			state.loading = true;
		},
		[getCollege.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data?.list || payload.data||payload;
			state.totalPages = payload.data.totalPages;
			state.limit = payload.data.limit;
			state.totalRecords = payload.data.totalRecords || 0;
			state.status = 'fulfilled';
			state.isSearchQuery = payload.filter;
			// state.totalPages = payload.data.totalPages;
		},
		[getCollege.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.status = 'rejected';
			state.totalPages = 0;
			state.totalRecords = 0;
		},
	},
});

// The reducer
export const { setLimit, setCurrentPage, setStatus, setSortBy, setOrderBy } = collegeSlice.actions;
export const collegeReducer = collegeSlice.reducer;
