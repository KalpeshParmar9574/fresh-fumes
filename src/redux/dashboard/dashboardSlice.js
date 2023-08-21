import { createSlice } from "@reduxjs/toolkit";
import { getDashboard, getNotification,getLincenceNotification } from "./dashboardThunk";

const initialState = {
	data: [],
	lincenceNotification:[],
	loading: false,
	status: "idle",
	completed: false,
	notification: [],
};

// A slice for dashboard with our 3 reducers
export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {},
	extraReducers: {
		[getDashboard.pending]: (state) => {
			state.loading = true;
		},
		[getDashboard.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.completed = true;
			state.status = "completed";
		},
		[getDashboard.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.data = [];
			state.status = "rejected";
			state.completed = true;
		},
		
		[getLincenceNotification.pending]: (state) => {
			state.loading = true;
		},
		[getLincenceNotification.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.lincenceNotification = payload;
			state.completed = true;
			state.status = "completed";
		},
		[getLincenceNotification.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.lincenceNotification = [];
			state.status = "rejected";
			state.completed = true;
		},
		[getNotification.pending]: (state) => {
			state.loading = true;
		},
		[getNotification.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.notification = payload;
			state.completed = true;
			state.status = "completed";
		},
		[getNotification.rejected]: (state, payload) => {
			state.loading = false;
			state.error = payload;
			state.notification = [];
			state.status = "rejected";
			state.completed = true;
		},
	},
});

// The reducer
export const dashboardReducer = dashboardSlice.reducer;
