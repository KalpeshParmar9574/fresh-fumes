import { createSlice } from '@reduxjs/toolkit';
import { getJobVacancies } from './jobVacancyThunks';

const initialState = {
	data: [],
	loading: true,
	totalPages:0,
	limit: 5,
	totalRecords: -1,
	currentPage: 0,
	sortBy: 'id',
	orderBy: 'DESC',
	status: 'idle',
};

const jobVacancySlice = createSlice({
	name: 'jobVacancy',
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
	},
	extraReducers: {
		[getJobVacancies.pending]: (state) => {
			state.loading = true;
		},
		[getJobVacancies.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list;
			state.totalPages = payload.data.totalPages;
			state.limit = payload.data.limit;
			state.totalRecords = payload.data.totalRecords;
			state.status = 'fulfilled';
		},
		[getJobVacancies.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.status = 'rejected';
		},
	},
});

export const { setLimit, setCurrentPage } = jobVacancySlice.actions;

export const jobVacancyReducer = jobVacancySlice.reducer;
