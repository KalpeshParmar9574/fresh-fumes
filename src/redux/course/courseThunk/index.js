import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { COURSE } from "../../../constants/masters";

export const getCourse = createAsyncThunk(
	//action type string
	"course/getDesignation",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(COURSE, {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
			});
			sessionStorage.setItem(
				"course",
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
	"course/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(COURSE, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"course/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${COURSE}/`, {
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
	"course/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${COURSE}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
