import { createSlice } from "@reduxjs/toolkit";
import { ViewPolicyById, getFAQs } from "./policyThunk";


const initialState = {
	
	loading: false,
	error: null,
	data:[],
	complete: false,
	limit: 40,
	page: 0,
	totalPage: 0,
	totalCount: 0,
	sortBy: "id",
	orderBy: "desc",
};

// A slice for getBloodGroup with our 3 reducers
export const policySlice = createSlice({
	name: "policy",
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
		[getFAQs.pending]: (state) => {
			state.loading = true;
		},
		[getFAQs.fulfilled]: (state, {payload} ) => {
			state.loading = false;
			state.policyData = payload?.data?.list || payload?.data || payload;
			state.complete = true;
		},
		[getFAQs.rejected]: (state, payload) => {
			state.loading = false;
			state.policyData = [];
			state.error = payload;
			state.complete = true;
		},
		[ViewPolicyById.pending]: (state) => {
			state.loading = true;
		},
		[ViewPolicyById.fulfilled]: (state, {payload} ) => {
			state.loading = false;
			state.viewPolicyData = payload?.data?.list || payload?.data || payload;
			state.complete = true;
		},
		[ViewPolicyById.rejected]: (state, payload) => {
			state.loading = false;
			state.viewPolicyData = [];
			state.error = payload;
			state.complete = true;
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } =
policySlice.actions;
export const policyReducer = policySlice.reducer;

// const SortArray=(payload)=>{
// 	let SortData=payload
// 	SortData?.data?.evalutionquestion?.sort((a, b) => (a.questionmaster.answerType < b.questionmaster.answerType) ? -1 : 1);
// 	return SortData
// }