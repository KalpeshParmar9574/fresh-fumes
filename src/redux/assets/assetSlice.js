import { createSlice } from "@reduxjs/toolkit";
import { getAllAssets, getAllGeneratedAssets, getGeneratedAssetsForDropdown } from "./thunk";

const initialState = {
	data: [],
	loading: false,
	status: "idle",
	generatedAssets: [],
	generatedAssetsStatus: "idle",
	totalPages:0,
	limit: 40,
	totalRecords: -1,
	currentPage: 0,
	sortBy: "id",
	orderBy: "DESC",
	filter: "All",
	location: "All",
};

export const assetSlice = createSlice({
	name: "assets",
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.generatedAssetsStatus = "idle";
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.generatedAssetsStatus = "idle";
		},
		setStatus: (state, action) => {
			state.generatedAssetsStatus = action.payload.status;
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.generatedAssetsStatus = "idle";
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.generatedAssetsStatus = "idle";
		},
		setFilter: (state, action) => {
			state.filter = action.payload.filter;
			state.generatedAssetsStatus = "idle";
		},
		setLocation: (state, action) => {
			state.location = action.payload.location;
			state.generatedAssetsStatus = "idle";
		},
		setEmployee: (state, action) => {
			state.employeeSearch = action.payload.employeeSearch;
			state.generatedAssetsStatus = "idle";
		},
	},
	extraReducers: {
		[getAllAssets.pending]: (state) => {
			state.loading = true;
		},
		[getAllAssets.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data;
			state.status = "completed";
		},
		[getAllAssets.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
		},

		[getAllGeneratedAssets.pending]: (state) => {
			state.loading = true;
		},
		[getAllGeneratedAssets.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.generatedAssets = payload.data.list || payload.data;
			state.totalPages = payload.data.totalPages;
			// state.limit = payload.data.limit;
			state.currentPage = payload.data.currentPage-1;
			state.totalRecords = payload.data.totalRecords;
			state.generatedAssetsStatus = "completed";
		},
		[getAllGeneratedAssets.rejected]: (state, payload) => {
			state.loading = false;
			state.generatedAssets = [];
			state.totalRecords = 0;
			state.totalPages = 0;
			state.currentPage = 0;
			state.generatedAssetsStatus = "rejected";
		},

		[getGeneratedAssetsForDropdown.pending]: (state) => {
			state.loading = true;
		},
		[getGeneratedAssetsForDropdown.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.generatedAssetsForDropdown = payload.data.list || payload.data;
			state.totalPages = payload.data.totalPages;
			state.limit = payload.data.limit;
			state.totalRecords = payload.data.totalRecords;
			state.generatedAssetsStatus = "completed";
		},
		[getGeneratedAssetsForDropdown.rejected]: (state, payload) => {
			state.loading = false;
			state.generatedAssetsForDropdown = [];
			state.totalRecords = 0;
			state.totalPages = 0;
			state.generatedAssetsStatus = "rejected";
		}
	},
});

// The reducer
export const assetReducer = assetSlice.reducer;
export const {
	setLimit,
	setCurrentPage,
	setStatus,
	setSortBy,
	setOrderBy,
	setFilter,
	setLocation,
} = assetSlice.actions;
