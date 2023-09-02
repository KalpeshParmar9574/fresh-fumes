import { createSlice } from "@reduxjs/toolkit";
import {
	getEmployee,
	getProjectManagerData,
	getTeamLeadData,
	getEmployeeForDropDown,
	getHRData,
	getAllMemberDropdown,
} from "./employeeThunk";

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
	MemberDropdown: [],
	MemberDropdownStatus: "idle",
	isSearchQuery: false,
	newData: false,
	sortBy: "employeeId",
	orderBy: "DESC",
};

const onSuccessGetData = (stateData, payload) => {
	let empData = [];

	if (payload.data.data.list) {
		// console.log(payload,"payload.data.data.list", payload.data.data.list);
		if (payload.filter && payload.newData) {
			
			empData = [...payload.data.data.list];
		} else if (!payload.filter && payload.newData) {
			
			empData = [...payload.data.data.list];
		} else if(payload.scrollApiCall===false) {
			
			empData = [...payload.data.data.list];
		}else if (payload.page===1) {
			
			empData = [...payload.data.data.list];
		}else{
			
			empData = [...stateData, ...payload.data.data.list];
		}
	} else {
		empData = [...payload.data.data];
	}
	// console.log("empData", empData);
	return empData;
};

const onErrorGetData = (stateData, payload) => {
	let empData = [];

	if (payload?.payload?.status === 404 && payload?.payload?.isSearchQuery) {
		empData = [];
	} else if (payload?.payload?.newData && payload?.payload?.filter) {
		empData = [];
	} else if (!payload?.payload?.newData && payload?.payload?.filter) {
		empData = [...stateData];
	} else if (payload?.payload?.newData && !payload?.payload?.filter) {
		empData = [];
	} else if (!payload?.payload?.newData && !payload?.payload?.filter) {
		empData = [...stateData];
	}
	return empData;
};

// A slice for getBloodGroup with our 3 reducers
export const employeeSlice = createSlice({
	name: "employee",
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
		setNewData: (state, action) => {
			state.data = action.payload.data;
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
			state.status = "fulfilled";
			state.complete = true;
			state.page = payload.data.data.currentPage;
			state.totalCount = payload.data.data.totalRecords;
			state.totalPage = payload.data.data.totalPages;
			state.hasMore =
				payload.data.data.currentPage === payload.data.data.totalPages
					? false
					: true;
			state.newData = payload.newData;
			state.isSearchQuery = payload.filter;
		},
		[getEmployee.rejected]: (state, payload) => {
			state.loading = false;
			state.data = onErrorGetData(state.data, payload);
			state.error = payload.payload.error;
			state.isSearchQuery = payload.payload.isSearchQuery;
			state.status = "rejected";
			state.complete = true;
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
		[getAllMemberDropdown.fulfilled]: (state, { payload }) => {
			state.MemberDropdownStatus = "fulfilled";
			state.MemberDropdown = payload.data;
		},
		[getAllMemberDropdown.rejected]: (state, payload) => {
			state.MemberDropdown = [];
			state.MemberDropdownStatus = "rejected";
		},
	},
});

// The reducer
export const { setLimit, setPage, setHasMore, setData, setNewData,setSortBy,setOrderBy } = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;
