import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "./addressThunk";

const initialState = {
    data: [],
    loading: false,
    error: null,
    complete: false,
    totalPages: 0,
    limit: 40,
    totalRecords: 0,
    currentPage: 0,
    sortBy: "id",
    orderBy: "DESC",
    status: "idle",
    isSearchQuery: false,
};

// A slice for getBloodGroup with our 3 reducers
export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload.limit;
            state.status = "idle";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.page;
            state.status = "idle";
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload.sortBy;
            state.status = "idle";
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload.orderBy;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
    extraReducers: {
        [getAddress.pending]: (state) => {
            state.loading = true;
        },
        [getAddress.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload.data.data.list || payload.data.data;
            state.totalPages = payload.data.data.totalPages;
            // state.limit = payload.data.data.limit;
            state.totalRecords = payload.data.data.totalRecords;
            state.currentPage = payload.data.data.currentPage - 1;
            state.complete = true;
            state.status = "fulfilled";
            state.isSearchQuery = payload.filter;
        },
        [getAddress.rejected]: (state, payload) => {
            state.loading = false;
            state.data = [];
            state.error = payload;
            state.complete = true;
            state.totalPages = 0;
            state.totalRecords = 0;
            state.currentPage = 0;
            state.status = "rejected";
        },
    },
});

// The reducer
export const addressReducer = addressSlice.reducer;
export const { setSortBy, setOrderBy, setStatus, setLimit, setCurrentPage } =
    addressSlice.actions;
