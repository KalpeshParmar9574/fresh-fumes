import { createSlice } from "@reduxjs/toolkit";
import { getDepartment } from "./departmentThunk";

let department = sessionStorage.getItem("department");
let data = [];

if (department) {
	try {
		let json = JSON.parse(department);
		if (+new Date() - json.timestamp < 1000 * 60 * 60) {
			data = json.data;
		}
	} catch (e) {}
}

const initialState = {
	data: [],
	loading: false,
	complete: false,
	sortBy: "id",
	orderBy: "ASC",
	status: "idle",
	totalPages:0,
	limit: 40,
	totalRecords: -1,
	currentPage: 0,
};

// A slice for getBloodGroup with our 3 reducers
export const departmentSlice = createSlice({
	name: "department",
	initialState,
	reducers: {
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
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
		[getDepartment.pending]: (state) => {
			state.loading = true;
		},
		[getDepartment.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list?payload.data.list:payload.data;
			state.complete = true;
			state.status = "fulfilled";
			state.totalPages = payload.data.totalPages;
			// state.limit = payload.data.limit;
			state.totalRecords = payload.data.totalRecords;
		},
		[getDepartment.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.complete = true;
			state.status = "rejected";
			state.totalPages = 0;
			// state.limit = payload.data.limit;
			state.totalRecords = 0;
		},
	},
});

// The reducer
export const departmentReducer = departmentSlice.reducer;
export const { setSortBy, setOrderBy, setCurrentPage, setLimit } =
	departmentSlice.actions;
