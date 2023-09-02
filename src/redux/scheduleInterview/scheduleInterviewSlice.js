import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

// A slice for getBloodGroup with our 3 reducers
export const scheduleInterviewSlice = createSlice({
	name: 'scheduleInterview',
	initialState,
	reducers: {},
	extraReducers: {},
});

// The reducer
export const scheduleInterviewReducer = scheduleInterviewSlice.reducer;
