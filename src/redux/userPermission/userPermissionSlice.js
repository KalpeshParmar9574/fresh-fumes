import { createSlice } from "@reduxjs/toolkit";
import {
	getAllRoles,
	getAllModule,
	getUserPermissionById,
} from "./userPermissionthunk";

const initialState = {
	data: [],
	status: "idle",
	loading: false,
	totalPages:0,
	limit: 5,
	totalRecords: -1,
	currentPage: 0,
	userRoleDropdown: [],
	AllModule: [],
};

// A slice for getBloodGroup with our 3 reducers
export const userPermissionSlice = createSlice({
	name: "UserRoles",
	initialState,
	reducers: {},
	extraReducers: {
		// Get All User Role

		[getAllRoles.pending]: (state) => {
			state.loading = true;
			state.status = "pending";
		},
		[getAllRoles.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userRoleDropdown = payload.data;
			state.status = "fulfilled";
		},
		[getAllRoles.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
		},
		// Get All Module

		[getAllModule.pending]: (state) => {
			state.loading = true;
			state.status = "pending";
		},
		[getAllModule.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.AllModule = payload.data;
			state.status = "fulfilled";
		},
		[getAllModule.rejected]: (state) => {
			state.loading = false;
			state.data = [];
			state.status = "rejected";
		},

		// Get User Permission By User Id
		// [getUserPermissionById.pending]: (state) => {
		// 	state.loading = true;
		// 	state.status = "pending";
		// },
		// [getUserPermissionById.fulfilled]: (state, { payload }) => {
		// 	state.loading = false;
		// 	state.data = payload.data;
		// 	state.status = "fulfilled";
		// },
		// [getUserPermissionById.rejected]: (state) => {
		// 	state.loading = false;
		// 	state.data = [];
		// 	state.status = "rejected";
		// },
	},
});

// The reducer
export const userPermisssionReducer = userPermissionSlice.reducer;
