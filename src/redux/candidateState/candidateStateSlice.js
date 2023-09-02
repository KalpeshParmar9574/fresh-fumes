import { createSlice } from "@reduxjs/toolkit";
import {
  getCandidateState,
  getCandidateStatus,
  getCandidateByStatus,
} from "./candidateStatethunk";

const initialState = {
  data: [],
  statusData: [],
  stateData: [],
  loading: false,
  sortBy: 'id',
  orderBy: 'DESC',
};

// A slice for getBloodGroup with our 3 reducers
export const candidateStateSlice = createSlice({
  name: "candidateState",
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
    [getCandidateState.pending]: (state) => {
      state.loading = true;
    },
    [getCandidateState.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getCandidateState.rejected]: (state, payload) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
    },
    [getCandidateStatus.pending]: (state) => {
      state.loading = true;
    },
    [getCandidateStatus.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.statusData = payload;
    },
    [getCandidateStatus.rejected]: (state, payload) => {
      state.loading = false;
      state.statusData = [];
      state.error = payload;
    },
    [getCandidateByStatus.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.stateData = payload;
    },
    [getCandidateByStatus.rejected]: (state, payload) => {
      state.loading = false;
      state.stateData = [];
      state.error = payload;
    },
  },
});

// The reducer
export const candidateStateReducer = candidateStateSlice.reducer;
export const { setLimit, setCurrentPage, setSortBy, setOrderBy } = candidateStateSlice.actions;

