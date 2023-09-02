import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";
import {
	DASHBOARD_COUNT,
	DASHBOARD_NOTIFICATION,
} from "../../../constants/dashboard";

export const getDashboard = createAsyncThunk(
	//action type string
	"dashboard/getDashboard",
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
	},
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
	},
);

export const getNotification = createAsyncThunk(
	//action type string
	"dashboard/getDashboardNotifications",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(DASHBOARD_NOTIFICATION);
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);
export const getLincenceNotification = createAsyncThunk(
	//action type string
	"dashboard/getLincenceNotification",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get('/getExpiryNotification', {
				headers: { module:'vmMaster',type:'view' },
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);
