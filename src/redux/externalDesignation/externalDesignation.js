import { createSlice } from "@reduxjs/toolkit";
import { getExternalDesignation } from "./externalDesignationThunk";

let externalDesignation = sessionStorage.getItem("externalDesignation");
let data = [];

if (externalDesignation) {
  try {
    let json = JSON.parse(externalDesignation);
    if (+new Date() - json.timestamp < 1000 * 60 * 60) {
      data = json.data;
    }
  } catch (e) {}
}

const initialState = {
  data,
  loading: false,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const externalDesignationSlice = createSlice({
  name: "externalDesignation",
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
    [getExternalDesignation.pending]: (state) => {
      state.loading = true;
    },
    [getExternalDesignation.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getExternalDesignation.rejected]: (state, payload) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
    },
  },
});

// The reducer
export const externalDesignationReducer = externalDesignationSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = externalDesignationSlice.actions;