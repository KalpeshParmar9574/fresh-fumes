import { createSlice } from '@reduxjs/toolkit';
import { getBloodGroup } from './bloddGroupThunk';

let bloodGroup = sessionStorage.getItem('bloodGroup');
let data = [];

if (bloodGroup) {
	try {
		let json = JSON.parse(bloodGroup);
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
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const bloodGroupSlice = createSlice({
	name: 'bloodGroup',
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
		[getBloodGroup.pending]: (state) => {
			state.loading = true;
		},
		[getBloodGroup.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.completed = true;
			state.status = 'completed';
		},
		[getBloodGroup.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.data = [];
			state.status = 'rejected';
			state.completed = true;
		},
	},
});

// The reducer
export const bloodGroupReducer = bloodGroupSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = bloodGroupSlice.actions;

