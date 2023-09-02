import { createSlice } from '@reduxjs/toolkit';
import { getTechnology } from './technologyThunk';

let technology = sessionStorage.getItem('technology');
let data = [];

if (technology) {
	try {
		let json = JSON.parse(technology);
		if (+new Date() - json.timestamp < 1000 * 60 * 60) {
			data = json.data;
		}
	} catch (e) {}
}

const initialState = {
	data,
	loading: false,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const technologySlice = createSlice({
	name: 'technology',
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
		[getTechnology.pending]: (state) => {
			state.loading = true;
		},
		[getTechnology.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
		},
		[getTechnology.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
		},
	},
});

// The reducer
export const technologyReducer = technologySlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = technologySlice.actions;
