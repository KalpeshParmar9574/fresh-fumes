import { createSlice } from '@reduxjs/toolkit';
import { getAssetVM, getAssetVMById} from './assetVMThunk';

const initialState = {
	data: [],
	loading: false,
	status: 'idle',
	totalPages: 1,
	limit: 40,
	totalRecords: 0,
	currentPage: 1,
	sortBy: 'id',
	orderBy: 'DESC',
	isSearchQuery: false,
};

// A slice for getBloodGroup with our 3 reducers
export const assetVMSlice = createSlice({
	name: 'AssetVM',
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.currentPage = 1;
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
			[getAssetVM.pending]: (state) => {
				state.loading = true;
			},
			[getAssetVM.fulfilled]: (state, {payload}) => {
				
				state.loading = false;
				state.data = payload?.data?.list;
				state.loading = false;
				state.status = "fulfilled";
				state.complete = true;
				state.totalPages = payload?.data?.totalPages;
				state.limit = payload?.data?.limit;
				state.totalRecords = payload?.data?.totalRecords || 0;
				state.currentPage=payload?.data?.currentPage;
				// state.currentPage=payload.data.currentPage||state.currentPage;
				// state.isSearchQuery = payload.filter;
				state.totalPages = payload?.data?.totalPages;
			},
			[getAssetVM.rejected]: (state, payload) => {
				state.loading = false;
				state.error = payload;
				state.data = [];
				state.totalPages = 1;
				state.currentPage=1;
				state.totalRecords =  0;
				state.completed = true;
			},

			[getAssetVMById.pending]: (state) => {
				state.loading = true;
			},
			[getAssetVMById.fulfilled]: (state, { payload }) => {
				state.loading = false;
				state.vmData = payload;
			},
			[getAssetVMById.rejected]: (state, payload) => {
				state.loading = false;
				state.error = payload;
				state.completed = true;
			},
		},
});

// The reducer
export const { setLimit, setCurrentPage, setStatus, setSortBy, setOrderBy } = assetVMSlice.actions;
export const assetVMReducer = assetVMSlice.reducer;
