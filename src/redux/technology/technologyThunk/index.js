import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { TECHNOLOGY } from "../../../constants/masters";
export const getTechnology = createAsyncThunk(
	//action type string
	"technology/getTechnology",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(TECHNOLOGY, {
				params: { sortBy: params.sortBy||'', orderBy: params.orderBy||'' },
			});
			sessionStorage.setItem(
				"technology",
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
	"technology/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(TECHNOLOGY, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"technology/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${TECHNOLOGY}/`, {
				headers: { id: id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const updateById = createAsyncThunk(
	//action type string
	"technology/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${TECHNOLOGY}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);
