import { createSlice } from '@reduxjs/toolkit';
import { getJobChange } from './jobChangeThunk';

let jobChange = sessionStorage.getItem('jobChange');
let data = [];

if (jobChange) {
	try {
		let json = JSON.parse(jobChange);
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
export const jobChangeSlice = createSlice({
	name: 'jobChange',
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
		[getJobChange.pending]: (state) => {
			state.loading = true;
		},
		[getJobChange.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.complete = true;
		},
		[getJobChange.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.complete = true;
		},
	},
});

// The reducer
export const jobChangeReducer = jobChangeSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = jobChangeSlice.actions;

