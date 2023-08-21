import { createSlice } from "@reduxjs/toolkit";
import {
  getHelpDeskTickets,
  getHelpdeskTicketById,
  getTotalTicketCount,
} from "./raiseTicketThunk";

const initialState = {
  data: [],
  loading: false,
  complete: false,
  sortBy: "id",
  orderBy: "ASC",
  status: "idle",
  totalPages: 0,
  limit: 40,
  totalRecords: -1,
  currentPage: 0,
  error: null,
  isSearchQuery: false,
  totalTicketsCount: {
    closedTickets: 0,
    openTickets: 0,
    reopenTickets: 0,
    totalTickets: 0,
  },
};

const raiseTicketsSlice = createSlice({
  name: "raiseTickets",
  initialState,
  reducers: {
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
    },
  },
  extraReducers: {
    [getHelpDeskTickets.pending]: (state) => {
      state.loading = true;
    },
    [getHelpDeskTickets.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.list;
      state.totalPages = payload.data.totalPages;
      state.limit = payload.data.limit;
      state.totalRecords = payload.data.totalRecords;
      state.currentPage = payload.data.currentPage - 1;
      state.complete = true;
      state.status = "fulfilled";
      state.isSearchQuery = payload.filter;
    },
    [getHelpDeskTickets.rejected]: (state) => {
      state.loading = false;
      state.data = [];
      state.complete = true;
      state.status = "rejected";
      state.totalPages = 0;
      state.totalRecords = 0;
      state.currentPage = 0;
    },
    [getHelpdeskTicketById.pending]: (state) => {
      state.loading = true;
    },
    [getHelpdeskTicketById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      // state.totalPages = payload.data.totalPages;
      // state.limit = payload.data.limit;
      // state.totalRecords = payload.data.totalRecords;
      // state.currentPage = payload.data.currentPage - 1;
      // state.complete = true;
      // state.status = "fulfilled"
    },
    [getHelpdeskTicketById.rejected]: (state) => {
      state.loading = false;
      state.data = [];
      // state.complete = true;
      // state.status = "rejected";
      // state.totalPages = 0;
    },
    [getTotalTicketCount.fulfilled]: (state, { payload }) => {
      state.totalTicketsCount = payload.data;
    },
  },
});

export const raiseTicketsReducer = raiseTicketsSlice.reducer;
export const { setSortBy, setOrderBy, setLimit, setCurrentPage } =
  raiseTicketsSlice.actions;
