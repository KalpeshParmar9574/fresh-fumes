import { createSlice } from '@reduxjs/toolkit';
import { getTotalEmployeeCount } from './employeeThunk';

const initialState = {
	loading: false,
	status: 'idle',
	error: null,
	totalCount: null,
	complete: false,
};

export const employeeCountSlice = createSlice({
	name: 'employeeCount',
	initialState,
	reducers: {
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = 'idle';
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = 'idle';
		},
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.complete = false;
			state.status = 'idle';
			state.error = null;
		},
		setPage: (state, action) => {
			state.page = action.payload.page;
			state.complete = false;
			state.status = 'idle';
			state.error = null;
		},
	},
	extraReducers: {
		[getTotalEmployeeCount.pending]: (state) => {
			state.loading = true;
		},
		[getTotalEmployeeCount.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.status = 'fulfilled';
			state.complete = true;
			state.totalCount = payload.totalEmployees;
		},
		[getTotalEmployeeCount.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.status = 'rejected';
			state.complete = true;
			state.totalCount = 0;
		},
	},
});

// The reducer
export const { setLimit, setPage, setOrderBy, setSortBy } =
	employeeCountSlice.actions;
export const employeeCountReducer = employeeCountSlice.reducer;
