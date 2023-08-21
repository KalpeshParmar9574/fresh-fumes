import { createSlice } from "@reduxjs/toolkit";
import { getInterviewList } from "./InterviewListThunk";

const initialState = {
	loading: false,
	status: "idle",
	error: null,
	data: [],
	complete: false,
	page: 0,
	totalPage: 0,
	limit: 40,
	totalCount: -1,
	sortBy: "interviewDate",
	orderBy: "DESC",
};

// A slice for dashboard with our 3 reducers
export const InterviewListSlice = createSlice({
	name: "getInterviewList",
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
		setTotalPage: (state, action) => {
			state.totalPage = action.payload.totalPage;
			state.complete = false;
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: {
		[getInterviewList.pending]: (state) => {
			state.loading = true;
		},
		[getInterviewList.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list || payload.data;
			state.completed = true;
			state.status = "completed";
			state.totalCount = payload.data.length;
			// state.totalCount = payload.data.totalRecords;
			state.totalPage = Math.ceil(
				payload.data.length / state.limit,
			); /* payload.data.totalPages; */
		},
		[getInterviewList.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.data = [];
			state.status = "rejected";
			state.completed = true;
			state.totalCount = 0;
			state.totalPage=0;
		},
	},
});

export const { setLimit, setPage, setOrderBy, setSortBy, setTotalPage } =
	InterviewListSlice.actions;

// The reducer
export const InterviewListReducer = InterviewListSlice.reducer;
