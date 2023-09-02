import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { INTERVIEW_TYPE } from "../../../constants/masters";

export const getInterviewType = createAsyncThunk(
	//action type string
	"interviewType/getInterviewType",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(INTERVIEW_TYPE, {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
			});
			sessionStorage.setItem(
				"interviewType",
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
	"interviewType/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(INTERVIEW_TYPE, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"interviewType/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${INTERVIEW_TYPE}/`, {
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
	"interviewType/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${INTERVIEW_TYPE}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
