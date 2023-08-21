import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";

export const getHscCourse = createAsyncThunk(
  //action type string
  "hsccourse/getHscCourse",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/hscCourse", { params });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);
