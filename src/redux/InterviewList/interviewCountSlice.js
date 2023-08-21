import { createSlice } from "@reduxjs/toolkit";
import { getInterviewCount } from "./InterviewListThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	complete: false,
	page: 0,
	limit: 40,
	interviewCount: -1,
};

// A slice for dashboard with our 3 reducers
export const InterviewCountSlice = createSlice({
	name: "getInterviewCount",
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
		[getInterviewCount.pending]: (state) => {
			state.loading = true;
		},
		[getInterviewCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list || payload.data;
			state.completed = true;
			state.status = "completed";
			state.interviewCount = payload.data.interviewCounts;
		},
		[getInterviewCount.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.data = [];
			state.status = "rejected";
			state.completed = true;
			state.interviewCount = 0;
		},
	},
});

export const { setLimit, setPage, setOrderBy, setSortBy } =
	InterviewCountSlice.actions;

// The reducer
export const InterviewCountReducer = InterviewCountSlice.reducer;
