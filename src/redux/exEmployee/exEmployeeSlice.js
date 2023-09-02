import { createSlice } from "@reduxjs/toolkit";
import {
	getEmployee,
	getProjectManagerData,
	getTeamLeadData,
	getEmployeeForDropDown,
	getHRData,
} from "./exEmployeeThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	complete: false,
	limit: 16,
	page: 1,
	totalCount: -1,
	hasMore: false,
	teamLeadDataStatus: "idle",
	teamLeadData: [],
	projectManagerDataStatus: "idle",
	projectManagerData: [],
	allEmployeeDataStatus: "idle",
	allEmployeeData: [],
	HRDataStatus: "idle",
	HRData: [],
	sortBy: "employeeId",
	orderBy: "DESC",
	isSearchQuery: false,
	newData: false,
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
		}else if (payload.page===1) {
			empData = [...payload.data.data.list];
		}else {
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
export const employeeSlice = createSlice({
	name: "exEmployee",
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
		[getEmployee.pending]: (state) => {
			state.loading = true;
		},
		[getEmployee.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = onSuccessGetData(state.data, payload);
			/*  payload.data.list
				? [...state.data, ...payload.data.list]
				: payload.data; */
			//   state.data =payload.data.data.list||payload.data.list || payload.data;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCount = payload.data.data.totalRecords;
			state.totalPage = payload.data.data.totalPages;
			state.page = payload.data.data.currentPage;
			state.hasMore =payload.data.data.currentPage === payload.data.data.totalPages? false: true;
			state.newData = payload.newData;
			state.isSearchQuery = payload.filter;
		},
		[getEmployee.rejected]: (state, payload) => {
			state.loading = false;
			state.data = onErrorGetData(state.data, payload);
			// payload.payload.status === 404 && payload.payload.isSearchQuery
			// 	? []
			// 	: state.data;
			state.error = payload.payload.error;
			state.isSearchQuery = payload.payload.isSearchQuery;
			state.status = "rejected";
			state.complete = true;
			console.log("P_0101", payload)
			state.hasMore = payload.payload.status === 404 ? false : true;
			state.totalCount = 0;
		},

		[getProjectManagerData.fulfilled]: (state, { payload }) => {
			state.projectManagerData = payload.data;
			state.projectManagerDataStatus = "fulfilled";
		},
		[getProjectManagerData.rejected]: (state, payload) => {
			state.projectManagerData = [];
			state.projectManagerDataStatus = "rejected";
		},

		[getTeamLeadData.fulfilled]: (state, { payload }) => {
			state.teamLeadDataStatus = "fulfilled";
			state.teamLeadData = payload.data;
		},
		[getTeamLeadData.rejected]: (state, payload) => {
			state.teamLeadData = [];
			state.teamLeadDataStatus = "rejected";
		},
		//
		[getEmployeeForDropDown.rejected]: (state, payload) => {
			state.allEmployeeData = [];
			state.allEmployeeDataStatus = "rejected";
		},

		[getEmployeeForDropDown.fulfilled]: (state, { payload }) => {
			state.allEmployeeDataStatus = "fulfilled";
			state.allEmployeeData = payload.data;
		},
		[getEmployeeForDropDown.rejected]: (state, payload) => {
			state.allEmployeeData = [];
			state.allEmployeeDataStatus = "rejected";
		},

		[getHRData.fulfilled]: (state, { payload }) => {
			state.HRDataStatus = "fulfilled";
			state.HRData = payload.data;
		},
		[getHRData.rejected]: (state, payload) => {
			state.HRData = [];
			state.HRDataStatus = "rejected";
		},
	},
});

// The reducer
export const { setLimit, setPage, setHasMore, setData,setSortBy,setOrderBy } = employeeSlice.actions;
export const exEmployeeReducer = employeeSlice.reducer;
