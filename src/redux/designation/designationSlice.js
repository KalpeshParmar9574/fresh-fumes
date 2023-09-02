import { createSlice } from '@reduxjs/toolkit';
import { getDesignation } from './designationThunk';

let designation = sessionStorage.getItem('designation');
let data = [];

if (designation) {
	try {
		let json = JSON.parse(designation);
		if (+new Date() - json.timestamp < 1000 * 60 * 60) {
			data = json.data;
		}
	} catch (e) {}
}

const initialState = {
	data,
	loading: false,
	complete: false,
	error: null,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const designationSlice = createSlice({
	name: 'designation',
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
	},
	extraReducers: {
		[getDesignation.pending]: (state) => {
			state.loading = true;
		},
		[getDesignation.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.complete = true;
		},
		[getDesignation.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.complete = true;
		},
	},
});

// The reducer
export const designationReducer = designationSlice.reducer;
export const { setSortBy, setOrderBy } = designationSlice.actions;
