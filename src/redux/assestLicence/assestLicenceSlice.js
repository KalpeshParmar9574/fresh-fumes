import { createSlice } from "@reduxjs/toolkit";
import {
	getAssestLicence,

} from "./thunk/index";

const initialState = {
	loading: false,
	  error: null,
     data: [],
	 status: "idle",
	 limit : 40,
	 totalRecords: 0,
	 currentPage: 1,
	 totalPages: 1,
	 orderBy: 'desc', 
	 sortBy: 'id'

};
export const assestLicenceSlice = createSlice({
	name: "assestLicence",
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload.limit;
			state.currentPage = 1;
			state.status = "idle";
		},
		setcurrentPage : (state, action) => {
	    state.currentPage = action.payload.page;
			state.status = "idle";
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = "idle";
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = "idle";
		}
	},
	extraReducers: {
		[getAssestLicence.pending]: (state) => {
			state.loading = true;
		},
		[getAssestLicence.fulfilled]: (state, { payload }) => {
			
			state.loading = false;
			state.data = payload.data.list || payload.data;
            state.totalPages = payload.data.totalPages;
            state.limit = payload.data.limit;
			state.currentPage=payload.data.currentPage||state.currentPage;
            state.totalRecords = payload.data.totalRecords || 0;
		    state.status = "fulfilled";
		},
		[getAssestLicence.rejected]: (state, payload) => {
			state.loading = false;
			state.data = []
			state.totalPages = 1;
			state.currentPage=1;
            // state.limit = payload.data.limit||1;
            state.totalRecords = 0;
			  state.error = payload.payload.error;
			  state.status = "rejected";
		}
	},
});

// The reducer
export const { setLimit, setcurrentPage,setSortBy, setOrderBy} = assestLicenceSlice.actions;
export const assestLicenceReducer = assestLicenceSlice.reducer;