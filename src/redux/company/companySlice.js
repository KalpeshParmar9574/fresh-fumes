import { createSlice } from "@reduxjs/toolkit";
import { getCompany } from "./companyThunk";

const initialState = {
	data: [],
	status: "idle",
	loading: false,
	totalPages: 0,
	limit: 40,
	error: null,
	totalRecords: -1,
	currentPage: 0,
	sortBy: "id",
	orderBy: "DESC",
	statusForDropDown: "idle",
	companyForDropdown: [],
};

// A slice for getBloodGroup with our 3 reducers
export const companySlice = createSlice({
	name: "company",
	initialState,
	reducers: {
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
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.status = "idle";
			state.error = null;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: {
		[getCompany.pending]: (state) => {
			state.loading = true;
		},
		[getCompany.fulfilled]: (state, { payload }) => {
			state.loading = false;
			
			if (payload.list) {
				state.data = payload.list;
				state.totalPages = payload.totalPages;
				state.limit = payload.limit;
				// state.currentPage = payload.currentPage;
				state.totalRecords = payload.totalRecords;
				state.status = "fulfilled";
			}

			if (!payload.list) {
				state.companyForDropdown = payload;
				state.statusForDropDown = "fulfilled";
			}
		},
		[getCompany.rejected]: (state, payload) => {
			state.data = [];
			state.loading = false;
			state.status = "rejected";
			state.statusForDropDown = "rejected";
			state.totalRecords = 0;
			state.totalPages = 0;
			state.error = payload;
		},
	},
});

// The reducer
export const companyReducer = companySlice.reducer;
export const { setSortBy, setOrderBy, setLimit, setCurrentPage, setStatus } =
	companySlice.actions;
