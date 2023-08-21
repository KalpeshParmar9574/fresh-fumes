import { createSlice } from "@reduxjs/toolkit";
import { getEducation } from "./educationThunk";

let education = sessionStorage.getItem("education");
let data = [];

if (education) {
  try {
    let json = JSON.parse(education);
    if (+new Date() - json.timestamp < 1000 * 60 * 60) {
      data = json.data;
    }
  } catch (e) {}
}

const initialState = {
  data,
  loading: false,
  status: "idle",
  error: "",
  completed: false,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const educationSlice = createSlice({
  name: "education",
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
    [getEducation.pending]: (state) => {
      state.loading = true;
    },
    [getEducation.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload || [];
      state.error = "";
      state.completed = true;
    },
    [getEducation.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.data = [];
      state.completed = true;
    },
  },
});

// The reducer
export const educationReducer = educationSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = educationSlice.actions;

