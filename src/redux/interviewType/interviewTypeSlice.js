import { createSlice } from '@reduxjs/toolkit';
import { getInterviewType } from './interviewTypeThunk';

let interviewType = sessionStorage.getItem('interviewType');
let data = [];

if (interviewType) {
	try {
		let json = JSON.parse(interviewType);
		if (+new Date() - json.timestamp < 1000 * 60 * 60) {
			data = json.data;
		}
	} catch (e) {}
}

const initialState = {
	data,
	loading: false,
	error: null,
	complete: false,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const interviewTypeSlice = createSlice({
	name: 'interviewType',
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
			state.status = "idle";
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = "idle";
		},
	},
	extraReducers: {
		[getInterviewType.pending]: (state) => {
			state.loading = true;
		},
		[getInterviewType.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.complete = true;
		},
		[getInterviewType.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.complete = true;
			state.error = payload;
		},
	},
});

// The reducer
export const interviewTypeReducer = interviewTypeSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = interviewTypeSlice.actions;

