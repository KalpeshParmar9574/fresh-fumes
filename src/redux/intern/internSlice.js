import { createSlice } from "@reduxjs/toolkit";
import { getInternData, getInternForDropdown} from "./internThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	complete: false,
	limit: 40,
	page: 0,
	totalPage: null,
	totalCount: 0,
	sortBy: "id",
	orderBy: "DESC",
	isSearchQuery: false,
	internForDropdown: [],
	internForDropdownStatus: "idle"
};

// A slice for getBloodGroup with our 3 reducers
export const internSlice = createSlice({
	name: "intern",
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
			state.complete = false;
			state.status = "idle";
			state.error = null;
		},
		setPage: (state, action) => {
			state.page = action.payload.page;
			state.complete = false;
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: {
		[getInternData.pending]: (state) => {
			state.loading = true;
		},
		[getInternData.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list;
			state.status = "fulfilled";
			state.complete = true;
			state.page = payload.data.currentPage - 1;
			state.totalCount = payload.data.totalRecords;
			state.totalPage = payload.data.totalPages;
			state.isSearchQuery = payload.filter;
		},
		[getInternData.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
			state.page = 0;
			state.totalCount = 0;
			state.totalPage = 0;
		},

		[getInternForDropdown.fulfilled]: (state, { payload }) => {
			state.internForDropdownStatus = "fulfilled";
			state.internForDropdown = payload || payload.data;
		},
		[getInternForDropdown.rejected]: (state, payload) => {
			state.internForDropdown = [];
			state.internForDropdownStatus = "rejected";
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } = internSlice.actions;
export const internReducer = internSlice.reducer;
