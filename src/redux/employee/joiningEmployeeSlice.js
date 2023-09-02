import { createSlice } from "@reduxjs/toolkit";
import { getJoiningEmployee } from "./employeeThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	complete: false,
	limit: 16,
	page: 1,
	totalCount: -1,
	hasMore: true,
	allEmployeeData: [],
	HRDataStatus: "idle",
	HRData: [],
	isSearchQuery: false,
	newData: false,
	sortBy: "employeeId",
	orderBy: "DESC",
};

const onSuccessGetData = (stateData, payload) => {
	let empData = [];
	// console.log("State Data", stateData);
	// console.log("Payload Data", payload);
	// console.log("New Data :", payload.newData);
	// console.log("Filter :", payload.filter);
	// console.log("Scroll :", payload.scrollApiCall);
	let totalR =
		payload.data.data.totalRecords == 1
			? 1
			: payload.data.data.totalRecords - 1;

	if (payload.data.data.list) {
		if (payload.filter && payload.newData) {
			empData = [...payload.data.data.list];
		} else if (!payload.filter && payload.newData) {
			empData = [...payload.data.data.list];
		} else {
			empData = [...stateData, ...payload.data.data.list];
		}
	} else {
		empData = [...payload.data.data];
	}
	//  else if (payload.newData == false && payload.filter == true) {
	// 	if (stateData.length === totalR) {
	// 		empData = [...stateData];
	// 	} else {
	// 		empData = [...stateData, ...payload.data.data.list];
	// 	}
	// } else if (payload.newData == true && payload.filter == false) {
	// 	if (stateData.length === totalR) {
	// 		empData = [...stateData];
	// 	} else {
	// 		empData = [...payload.data.data.list];
	// 	}
	// }
	/*  payload.data.data.list? payload.newData
					? state.data.length === totalR
						? [...state.data]
						: [...state.data, ...payload.data.data.list]
					: state.data.length === totalR
					? [...state.data]
					: [...state.data, ...payload.data.data.list]
				: payload.data.data */

	return empData;
};

const onErrorGetData = (stateData, payload) => {
	let empData = [];

	if (payload.payload.status === 404 && payload.payload.isSearchQuery) {
		empData = [];
	} else if (payload.payload.newData && payload.payload.filter) {
		empData = [];
	} else if (!payload.payload.newData && payload.payload.filter) {
		empData = [...stateData];
	} else if (payload.payload.newData && !payload.payload.filter) {
		empData = [];
	} else if (!payload.payload.newData && !payload.payload.filter) {
		empData = [...stateData];
	}
	return empData;
};

// A slice for getBloodGroup with our 3 reducers
export const joiningEmployeeSlice = createSlice({
	name: "joiningEmployee",
	initialState,
	reducers: {
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
		setHasMore: (state, action) => {
			state.hasMore = action.payload.hasMore;
			state.complete = false;
			state.status = "idle";
			state.error = null;
		},
		setData: (state, action) => {
			state.data = [];
			state.complete = false;
			state.status = "idle";
			state.error = null;
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
		[getJoiningEmployee.pending]: (state) => {
			state.loading = true;
		},
		[getJoiningEmployee.fulfilled]: (state, { payload }) => {
			state.loading = false;
			
			state.data = payload.data.data||payload.data.list||payload.data;
			// state.data = onSuccessGetData(state.data, payload);
			state.status = "fulfilled";
			state.complete = true;
			state.totalCount = payload.data.totalRecords;
			state.totalPage = payload.data.totalPages;
			state.hasMore =
				payload.data.data.currentPage === payload.data.data.totalPages
					? false
					: true;
			state.newData = payload.newData;
			state.isSearchQuery = payload.filter;
		},
		[getJoiningEmployee.rejected]: (state, payload) => {
			state.loading = false;
			state.data = onErrorGetData(state.data, payload);
			state.error = payload.payload.error;
			state.isSearchQuery = payload.payload.isSearchQuery;
			state.status = "rejected";
			state.complete = true;
			state.hasMore = payload.payload.status === 404 ? false : true;
			state.totalCount = 0;
		},
	},
});

// The reducer
export const { setLimit, setPage, setHasMore, setData,setOrderBy,setSortBy } =
	joiningEmployeeSlice.actions;
export const joiningEmployeeReducer = joiningEmployeeSlice.reducer;
