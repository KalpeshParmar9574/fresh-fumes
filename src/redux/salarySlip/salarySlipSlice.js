import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
    totalPages:0,
    limit: 40,
    totalRecords: -1,
    currentPage: 0,
    sortBy: 'id',
    orderBy: 'DESC',
    status: 'idle',
};

// A slice for getBloodGroup with our 3 reducers
export const salarySlipSlice = createSlice({
    name: "salarySlip",
    initialState,
    reducers: {
        setSortBy: (state, action) => {
			state.sortBy = action.payload.sortBy;
			state.status = 'idle';
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = 'idle';
		},
    },
});

// The reducer
export const salarySlipReducer = salarySlipSlice.reducer;
