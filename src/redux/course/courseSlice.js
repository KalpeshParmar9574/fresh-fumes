import { createSlice } from '@reduxjs/toolkit';
import { getCourse } from './courseThunk';

let course = sessionStorage.getItem('course');
let data = [];

if (course) {
	try {
		let json = JSON.parse(course);
		if (+new Date() - json.timestamp < 1000 * 60 * 60) {
			data = json.data;
		}
	} catch (e) {}
}

const initialState = {
	data,
	loading: false,
	status: 'idle',
	completed: false,
	error: null,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const courseSlice = createSlice({
	name: 'course',
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
		[getCourse.pending]: (state) => {
			state.loading = true;
		},
		[getCourse.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
		},
		[getCourse.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.completed = true;
		},
	},
});

// The reducer
export const courseReducer = courseSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = courseSlice.actions;
