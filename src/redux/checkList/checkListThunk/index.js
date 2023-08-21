import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { CHECK_LIST } from "../../../constants/masters";

export const getCheckList = createAsyncThunk(
	//action type string
	"checkList/getCheckList",
	// callback function
	async (thnkAPI, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`${CHECK_LIST}s`, {
				params: { sortBy: "id", orderBy: "DESC" },
			});
			sessionStorage.setItem(
				"checkList",
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
	"checkList/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(CHECK_LIST, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"checkList/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${CHECK_LIST}/`, {
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
	"checkList/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${CHECK_LIST}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
