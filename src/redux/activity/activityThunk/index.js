import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { ACTIVITY_STATUS } from "../../../constants/masters";
export const getActivity = createAsyncThunk(
	//action type string
	"activity/getActivity",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(ACTIVITY_STATUS, {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
			});
			sessionStorage.setItem(
				"activity",
				JSON.stringify({
					data: res.data.data,
					timestamp: +new Date(),
				}),
			);
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"activity/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(ACTIVITY_STATUS, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"activity/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${ACTIVITY_STATUS}/`, {
				headers: { id: id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateById = createAsyncThunk(
	//action type string
	"activity/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${ACTIVITY_STATUS}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
