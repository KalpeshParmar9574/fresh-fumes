import { createSlice } from "@reduxjs/toolkit";
import { getOnboardingCandidate } from "./candidateThunk";

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
export const onboardingCandidateSlice = createSlice({
	name: "onboardingCandidate",
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
		[getOnboardingCandidate.pending]: (state) => {
			state.loading = true;
		},
		[getOnboardingCandidate.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list || payload.data;
			state.status = "fulfilled";
			state.complete = true;
			state.totalCount = payload.data.totalRecords;
			state.totalPage = payload.data.totalPages;
		},
		[getOnboardingCandidate.rejected]: (state, { payload }) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
			state.totalCount = 0;
			state.totalPage = 0;
			state.page = 0;
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } =
onboardingCandidateSlice.actions;
export const onboardingCandidateReducer = onboardingCandidateSlice.reducer;
