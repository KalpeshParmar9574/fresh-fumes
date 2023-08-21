import { createSlice } from "@reduxjs/toolkit";
import { insertEvaluation, getAllInternEvaluation, getInternEvaluation, getEvaluationQuestion } from "./internEvaluationThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	evaluationQuestion: [],
	complete: false,
};

// A slice for getBloodGroup with our 3 reducers
export const internEvaluationSlice = createSlice({
	name: "internEvaluation",
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
		[getInternEvaluation.pending]: (state) => {
			state.loading = true;
		},
		[getInternEvaluation.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data;
			state.status = "fulfilled";
			state.complete = true;
		},
		[getInternEvaluation.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
		},
		[getAllInternEvaluation.pending]: (state) => {
			state.loading = true;
		},
		[getAllInternEvaluation.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data;
			state.status = "fulfilled";
			state.complete = true;
		},
		[getAllInternEvaluation.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
		},
		[getEvaluationQuestion.pending]: (state) => {
			state.loading = true;
		},
		[getEvaluationQuestion.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.evaluationQuestion = payload || payload.data;
			state.status = "fulfilled";
			state.complete = true;
		},
		[getEvaluationQuestion.rejected]: (state, payload) => {
			state.loading = false;
			state.evaluationQuestion = [];
			state.error = payload;
			state.status = "rejected";
			state.complete = true;
		},
		[insertEvaluation.fulfilled]: (state, { payload }) => {
			state.status = "idle";
	},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } = internEvaluationSlice.actions;
export const internEvaluationReducer = internEvaluationSlice.reducer;
