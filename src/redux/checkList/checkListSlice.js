import { createSlice } from "@reduxjs/toolkit";
import { getCheckList, insert, updateById, deleteById } from "./checkListThunk";
import { toast } from "react-toastify";

let checkList = sessionStorage.getItem("checkList");
let data = [];

if (checkList) {
  try {
    let json = JSON.parse(checkList);
    if (+new Date() - json.timestamp < 1000 * 60 * 60) {
      data = json.data;
    }
  } catch (e) {}
}

const initialState = {
  data,
  loading: false,
  complete: false,
  error: null,
};

// A slice for getBloodGroup with our 3 reducers
export const checkListSlice = createSlice({
  name: "checkList",
  initialState,
  reducers: {},
  extraReducers: {
    [getCheckList.pending]: (state) => {
      state.loading = true;
    },
    [getCheckList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.complete = true;
    },
    [getCheckList.rejected]: (state, payload) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
      state.complete = true;
    },
  },
});

// The reducer
export const checkListReducer = checkListSlice.reducer;
