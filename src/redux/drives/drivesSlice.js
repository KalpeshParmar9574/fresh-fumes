import { createSlice } from "@reduxjs/toolkit";
import { getDrives, insert, updateById } from "./drivesThunk";

const initialState = {
    data: [],
    loading: false,
    error: null,
    complete: false,
    totalPages: 0,
    limit: 40,
    totalRecords: -1,
    currentPage: 0,
    sortBy: "id",
    orderBy: "DESC",
    status: "idle",
};

// A slice for getBloodGroup with our 3 reducers
export const drivesSlice = createSlice({
    name: "drives",
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
        [getDrives.pending]: (state) => {
            state.loading = true;
        },
        [getDrives.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload.data.list || payload.data;
            state.totalPages = payload.data.totalPages;
            state.limit = payload.data.limit;
            state.totalRecords = payload.data.totalRecords;
            state.currentPage = payload.data.currentPage - 1;
            state.complete = true;
            state.status = "fulfilled";
        },
        [getDrives.rejected]: (state, payload) => {
            state.loading = false;
            state.data = [];
            state.error = payload;
            state.complete = true;
            state.totalRecords = 0;
            state.status = "rejected";
        },
        [insert.fulfilled]: (state, { payload }) => {
            state.status = "idle";
        },
        [updateById.fulfilled]: (state, { payload }) => {
            state.status = "idle";
        },
    },
});

// The reducer
export const drivesReducer = drivesSlice.reducer;
export const { setSortBy, setOrderBy, setStatus, setLimit, setCurrentPage } =
    drivesSlice.actions;
