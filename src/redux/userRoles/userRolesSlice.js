import { createSlice } from "@reduxjs/toolkit";
import { getUserRoles } from "./userRolesthunk";

const initialState = {
  data: [],
  status: 'idle',
  loading: false,
  totalPages:0,
  limit: 5,
  totalRecords: -1,
  currentPage: 0,
  sortBy: "id",
	orderBy: "DESC",
};

// A slice for getBloodGroup with our 3 reducers
export const userRolesSlice = createSlice({
  name: "UserRoles",
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
    [getUserRoles.pending]: (state) => {
      state.loading = true;
      state.status = 'pending';
    },
    [getUserRoles.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      state.status = 'fulfilled';
    },
    [getUserRoles.rejected]: (state) => {
      state.loading = false;
      state.data = [];
      state.status = 'rejected';
    },
  },
});

// The reducer
export const userRolesReducer = userRolesSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = userRolesSlice.actions;

