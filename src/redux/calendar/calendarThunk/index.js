import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";
import {
  DASHBOARD_COUNT,
} from "../../../constants/dashboard";

export const getCalendarData = createAsyncThunk(
  //action type string
  "calendar/getCalendarData",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get(DASHBOARD_COUNT, {
        headers: { date_for_hoidays: params.date },
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const getCurrentMonthHolidayList = createAsyncThunk(
  //action type string
  "dashboard/getCurrentMonthHolidayList",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get(DASHBOARD_COUNT, {
        headers: { date_for_hoidays: params.date },
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);
