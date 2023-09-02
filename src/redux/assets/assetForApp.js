import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeAssetsFromApp } from "./thunk";

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

export const assetForAppSlice = createSlice({
	name: "assetForApp",
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
		[getEmployeeAssetsFromApp.pending]: (state) => {
			state.loading = true;
		},
		[getEmployeeAssetsFromApp.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data;
			state.status = "completed";
		},
		[getEmployeeAssetsFromApp.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
		},
	},
});

// The reducer
export const assetForAppReducer = assetForAppSlice.reducer;
export const {
	setLimit,
	setCurrentPage,
	setStatus,
	setSortBy,
	setOrderBy,
	setFilter,
	setLocation,
} = assetForAppSlice.actions;
