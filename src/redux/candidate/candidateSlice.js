import { createSlice } from "@reduxjs/toolkit";
import { getCandidate,getCandidateFromResume,getEmployeesForDropdown, getEsCandidate } from "./candidateThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	candidateFromResume:{},
	dropDownList:[],
	complete: false,
	limit: 40,
	page: 0,
	totalPage: 0,
	totalCount: 0,
	sortBy: "id",
	orderBy: "DESC",
};

// A slice for getBloodGroup with our 3 reducers
export const candidateSlice = createSlice({
	name: "candidate",
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
		
		[getCandidateFromResume.pending]: (state) => {
			state.loading = true;
		},
		[getCandidateFromResume.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.candidateFromResume = payload.data;
		},
		[getCandidateFromResume.rejected]: (state, { payload }) => {
			state.loading = false;
			state.candidateFromResume = [];
		},
		[getCandidate.pending]: (state) => {
			state.loading = true;
		},
		[getCandidate.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list || payload.data;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCount = payload.data.totalRecords;
			state.totalPage = payload.data.totalPages;
		},
		[getCandidate.rejected]: (state, { payload }) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
			state.totalCount = 0;
			state.totalPage = 0;
			state.page = 0;
		},
		[getEmployeesForDropdown.pending]: (state) => {
			state.loading = true;
		},
		[getEmployeesForDropdown.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.dropDownList = payload.data.list || payload.data;
			
		},
		[getEmployeesForDropdown.rejected]: (state, { payload }) => {
			state.loading = false;
			state.dropDownList = [];
		},

		//Es Candidate

		[getEsCandidate.pending]: (state) => {
			state.loading = true;
		},
		[getEsCandidate.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list || payload.data;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCount = payload.data.totalRecords;
			state.totalPage = payload.data.totalPages;
		},
		[getEsCandidate.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
			state.totalCount = 0;
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } =
	candidateSlice.actions;
export const candidateReducer = candidateSlice.reducer;
