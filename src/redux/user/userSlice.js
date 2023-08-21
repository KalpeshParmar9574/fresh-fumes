import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userthunk";

const initialState = {
	data: [],
	status: "idle",
	loading: false,
	totalPages:0,
	limit: 40,
	totalRecords: -1,
	currentPage: 0,
	isSearchQuery: false,
};

// A slice for getBloodGroup with our 3 reducers
export const userSlice = createSlice({
	name: "UserRoles",
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
			state.status = "idle";
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = "idle";
		},
	},
	extraReducers: {
		[getUser.pending]: (state) => {
			state.loading = true;
			state.status = "pending";
		},
		[getUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list;
			state.totalPages = payload.data.totalPages;
			// state.limit = payload.data.limit;
			state.totalRecords = payload.data.totalRecords;
			state.status = "fulfilled";
			state.isSearchQuery = payload.filter;
			// state.currentPage = payload.page;
		},
		[getUser.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
			state.totalPages = 0;
			state.currentPage = 0;
			// state.limit = payload.data.limit;
			state.totalRecords = 0;
		},
	},
});

// The reducer
export const userReducer = userSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = userSlice.actions;
