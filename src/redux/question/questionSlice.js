import { createSlice } from "@reduxjs/toolkit";
import { getQuestions, getQuestionById, updateQuestionById, addQuestion } from "./questionThunk";

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
export const questionSlice = createSlice({
    name: "questions",
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
			state.status = 'idle';
		},
		setOrderBy: (state, action) => {
			state.orderBy = action.payload.orderBy;
			state.status = 'idle';
		},
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
    extraReducers: {
        [getQuestions.pending]: (state) => {
            state.loading = true;
        },
        [getQuestions.fulfilled]: (state, { payload }) => {
            state.loading = false;
            // console.log(payload)
            state.data = payload?.data?.list || payload?.data || payload;
            state.totalPages = payload.data.totalPages;
            state.limit = payload.data.limit;
            state.totalRecords = payload.data.totalRecords;
            state.currentPage = payload.data.currentPage - 1;
            state.complete = true;
            state.status = "fulfilled";
        },
        [getQuestions.rejected]: (state, payload) => {
            state.loading = false;
            state.data = [];
            state.error = payload;
            state.complete = true;
            state.totalRecords = 0;
            state.status = "rejected";
        },
        [addQuestion.fulfilled]: (state, { payload }) => {
            state.status = "idle";
        },
        [updateQuestionById.fulfilled]: (state, { payload }) => {
            state.status = "idle";
        },
    },
});

// The reducer
export const questionsReducer = questionSlice.reducer;
export const { setSortBy, setOrderBy, setStatus, setLimit, setCurrentPage } =
questionSlice.actions;
