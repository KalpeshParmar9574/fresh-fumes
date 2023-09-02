import { createSlice } from "@reduxjs/toolkit";
import { getHoliday } from "./holidayThunk";

const initialState = {
	data: [],
	status: "idle",
	loading: false,
	totalPages:0,
	limit: 40,
	totalRecords: -1,
	currentPage: 0,
	sortBy: "startDate",
	orderBy: "asc",
};

// A slice for getBloodGroup with our 3 reducers
export const holidaySlice = createSlice({
	name: "holiday",
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.status = "idle";
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = "idle";
		},
		setStatus: (state, action) => {
			state.status = action.payload.status;
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = "idle";
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = "idle";
		},
	},
	extraReducers: {
		[getHoliday.pending]: (state) => {
			state.loading = true;
			state.status = "pending";
		},
		[getHoliday.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.list || payload || payload.data;
			state.totalPages = payload.totalPages;
			state.limit = payload.limit;
			state.totalRecords = payload.totalRecords;
			state.status = "fulfilled";
		},
		[getHoliday.rejected]: (state) => {
			state.loading = false;
			state.status = "rejected";
			state.data = [];
		},
	},
});

// The reducer
export const holidayReducer = holidaySlice.reducer;
export const { setLimit, setCurrentPage, setStatus, setSortBy, setOrderBy } =
	holidaySlice.actions;
