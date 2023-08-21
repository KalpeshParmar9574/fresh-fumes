import { createSlice } from "@reduxjs/toolkit";
import { getAllEmail, getNewEmail,getMessagesCount } from "./emailinboxThunk";

const initialState = {
  loading: false,
  error: null,
  data: [],
  status: "idle",
  limit: 40,
  totalRecords: 0,
  currentPage: 1,
  totalPages: 1,
  orderBy: "",
  sortBy: "",
  sync: false,
  search: "",
  emailStatus: "",
  totalEmails :0
};

export const emailInboxSlice = createSlice({
  name: "emailInbox",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
      state.currentPage = 1;
      state.status = "idle";
    },
    setcurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
      state.status = "idle";
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.status = "idle";
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload.orderBy;
      state.status = "idle";
    },
  },
  extraReducers: {
    [getAllEmail.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    [getAllEmail.fulfilled]: (state, { payload }) => {
      state.data = payload.data.list;
      state.totalPages = payload.data.totalPages;
      state.limit = payload.data.limit;
      state.currentPage = payload.data.currentPage || state.currentPage;
      state.totalRecords = payload.data.totalRecords || 0;
      state.loading = false;
      
      state.status = "fulfilled";

    },
    [getAllEmail.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = [];
      state.totalPages = 1;
      state.currentPage = 1;
      // state.limit = payload.data.limit||1;
      state.totalRecords = 0;
      state.error = payload?.payload?.error || payload;
      state.status = "rejected";
    },
    [getMessagesCount.fulfilled]: (state, { payload }) => {
      state.totalEmails = payload?.count
    },
    [getNewEmail.pending]: (state) => {
      state.sync = true;
      state.loading = true;
    },
    [getNewEmail.fulfilled]: (state) => {
      state.sync = false;
      state.loading = false;
    },
    [getNewEmail.rejected]: (state) => {
      state.sync = false;
      state.loading = false;
      state.status = "rejected";
    },
  },
});
export const { setLimit, setcurrentPage, setSortBy, setOrderBy } =
  emailInboxSlice.actions;
export const emailInboxReducer = emailInboxSlice.reducer;
