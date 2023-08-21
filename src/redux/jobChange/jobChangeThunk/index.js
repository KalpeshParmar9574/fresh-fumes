import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { JOB_CHANGE } from "../../../constants/masters";
export const getJobChange = createAsyncThunk(
	//action type string
	"jobChange/getJobChange",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(JOB_CHANGE, {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
			});
			sessionStorage.setItem(
				"jobChange",
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
	"jobChange/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(JOB_CHANGE, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"jobChange/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${JOB_CHANGE}/`, {
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
	"jobChange/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${JOB_CHANGE}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
