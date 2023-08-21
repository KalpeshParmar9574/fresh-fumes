import { createSlice } from "@reduxjs/toolkit";
import { ViewSubmittedEvaluationById, ViewSubmittedEvaluationHistory, getEvaluation, getEvaluationById, getSubmittedEvalutionHistory } from "./evaluationThunk";



// let data = [];
// let EvaluationData = {};


const initialState = {
	
	loading: false,
	error: null,
	evaluationData :  [],
	evaluationFormData :  {},
	viewSubmittedEvaluationData :  {},
	evaluationHistory :  {},
	viewSubmittedEvaluationHistory :  {},
	complete: false,
	limit: 40,
	page: 0,
	totalPage: 0,
	totalCount: 0,
	sortBy: "id",
	orderBy: "desc",
};

// A slice for getBloodGroup with our 3 reducers
export const evaluationSlice = createSlice({
	name: "evaluation",
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
		[getEvaluation.pending]: (state) => {
			state.loading = true;
		},
		[getEvaluation.fulfilled]: (state, {payload} ) => {
			state.loading = false;
			state.evaluationData = payload;
			state.complete = true;
		},
		[getEvaluation.rejected]: (state, payload) => {
			state.loading = false;
			state.evaluationData = [];
			state.error = payload;
			state.complete = true;
		},
		[getEvaluationById.pending]: (state) => {
			state.loading = true;
		},
		[getEvaluationById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.evaluationFormData = payload?.data;
			state.complete = true;
		},
		[getEvaluationById.rejected]: (state, payload) => {
			state.loading = false;
			state.evaluationFormData = [];
			state.error = payload;
			state.complete = true;
		},
		[ViewSubmittedEvaluationById.pending]: (state) => {
			state.loading = true;
		},
		[ViewSubmittedEvaluationById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.viewSubmittedEvaluationData = payload?.data;
			state.complete = true;
		},
		[ViewSubmittedEvaluationById.rejected]: (state, payload) => {
			state.loading = false;
			state.viewSubmittedEvaluationData = [];
			state.error = payload;
			state.complete = true;
		},
		[getSubmittedEvalutionHistory.pending]: (state) => {
			state.loading = true;
		},
		[getSubmittedEvalutionHistory.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.evaluationHistory = payload?.data || payload;
			state.complete = true;
			state.page = payload.data.currentPage-1 || 0;
			state.totalCount = payload.data.totalRecords || 0;
			state.totalPage = payload.data.totalPages || 0;
		},
		[getSubmittedEvalutionHistory.rejected]: (state, payload) => {
			state.loading = false;
			state.evaluationHistory = {};
			state.error = payload;
			state.complete = true;
			state.totalCount = 0;
			state.totalPage = 0;
			state.page = 0;
		},
		[ViewSubmittedEvaluationHistory.pending]: (state) => {
			state.loading = true;
		},
		[ViewSubmittedEvaluationHistory.fulfilled]: (state, {payload} ) => {
			state.loading = false;
			state.viewSubmittedEvaluationHistory = payload?.data;
			state.complete = true;
		},
		[ViewSubmittedEvaluationHistory.rejected]: (state, payload) => {
			state.loading = false;
			state.viewSubmittedEvaluationHistory = {};
			state.error = payload;
			state.complete = true;
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } =
evaluationSlice.actions;
export const evaluationReducer = evaluationSlice.reducer;

// const SortArray=(payload)=>{
// 	let SortData=payload
// 	SortData?.data?.evalutionquestion?.sort((a, b) => (a.questionmaster.answerType < b.questionmaster.answerType) ? -1 : 1);
// 	return SortData
// }