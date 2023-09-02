import { createSlice } from '@reduxjs/toolkit';
import { totalStudentsByDrive } from './studentThunk';

const initialState = {
	loading: false,
	status: 'idle',
	totalCount : 0,
};

// A slice for getBloodGroup with our 3 reducers
export const studentByDriveCountSlice = createSlice({
	name: 'studentByDriveCount',
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.status = 'idle';
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
			state.status = 'idle';
		},
		setStatus: (state, action) => {
			state.status = action.payload.status;
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = 'idle';
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = 'idle';
		},
	},
	extraReducers: {
		[totalStudentsByDrive.pending]: (state) => {
			state.loading = true;
		},
		[totalStudentsByDrive.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.totalCount = payload.totalStudents || 0;
			state.status = 'fulfilled';
		},
		[totalStudentsByDrive.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.status = 'rejected';
		},
	},
});

// The reducer
export const { setLimit, setCurrentPage, setStatus, setSortBy, setOrderBy } = studentByDriveCountSlice.actions;
export const studentByDriveCountReducer = studentByDriveCountSlice.reducer;
