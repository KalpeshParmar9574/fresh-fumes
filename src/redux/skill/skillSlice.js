import { createSlice } from '@reduxjs/toolkit';
import { getSkill } from './skillThunk';

let skill = sessionStorage.getItem('skill');
let data = [];

if (skill) {
	try {
		let json = JSON.parse(skill);
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
export const skillSlice = createSlice({
	name: 'skill',
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
		[getSkill.pending]: (state) => {
			state.loading = true;
		},
		[getSkill.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.complete = true;
		},
		[getSkill.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.complete = true;
			state.data = [];
		},
	},
});

// The reducer
export const skillReducer = skillSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = skillSlice.actions;

