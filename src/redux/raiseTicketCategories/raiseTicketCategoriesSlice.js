import { createSlice } from "@reduxjs/toolkit";
import { getHelpdeskCategories, getHelpdeskCategoriesDropDown } from "./raiseTicketCategoriesThunk";

const initialState = {
    data: [],
    loading: false,
    complete: false,
    sortBy: "id",
    orderBy: "asc",
    status: "idle",
    totalPages:0,
    limit: 40,
    totalRecords: -1,
    currentPage: 0,
    error:null,
    categoryData:[],
    categoryDataStatus:"idle",
}

const raiseTicketCategoriesSlice = createSlice({
    name:"helpdeskCategories",
    initialState,
    reducers:{
        setSortBy: (state, action) => {
            state.sortBy = action.payload.sortBy;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload.orderBy;
        },
        setLimit: (state, action) => {
            state.limit = action.payload.limit;
            state.status = "idle";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.page;
            state.status = "idle";
        }
    },
    extraReducers: {
        [getHelpdeskCategories.pending]:(state)=>{
            state.loading = true;
        },
        [getHelpdeskCategories.fulfilled]:(state, {payload})=>{
            state.loading = false;
            state.data = payload.data;
            state.totalPages = payload.data.totalPages;
            state.limit = payload.data.limit;
            state.totalRecords = payload.data.totalRecords;
            state.currentPage = payload.data.currentPage - 1;
            state.complete = true;
            state.status = "fulfilled"
        },
        [getHelpdeskCategories.rejected]:(state, {payload})=>{
            state.loading = false;
            state.data = [];
            state.complete = true;
            state.status = "rejected";
            state.totalPages = 0;
            state.error = payload;
        },
        [getHelpdeskCategoriesDropDown.fulfilled]:(state, {payload})=>{
            state.categoryData = payload.data
            state.categoryDataStatus = "fulfilled"
        },
        [getHelpdeskCategoriesDropDown.rejected]:(state)=>{
            state.categoryData = []
            state.categoryDataStatus = "rejected"
        }
    }
})

export const raiseTicketCategoriesReducer = raiseTicketCategoriesSlice.reducer;
export const { setSortBy, setOrderBy, setLimit, setCurrentPage } = raiseTicketCategoriesSlice.actions