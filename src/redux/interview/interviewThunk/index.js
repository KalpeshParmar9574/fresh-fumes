import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { INTERVIEW_STATUS } from "../../../constants/masters";

export const getInterview = createAsyncThunk(
	//action type string
	"interview/getEducation",
	// callback function
	async (thunkAPI, { rejectWithValue }) => {
		try {
			const res = await Axios.get(INTERVIEW_STATUS, {
				params: { sortBy: "id", orderBy: "DESC" },
			});
			sessionStorage.setItem(
				"interview",
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
	"interview/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(INTERVIEW_STATUS, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"interview/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${INTERVIEW_STATUS}/`, {
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
	"interview/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${INTERVIEW_STATUS}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
