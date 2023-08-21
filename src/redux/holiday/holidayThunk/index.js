import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getHoliday = createAsyncThunk(
	//action type string
	"holiday/getHoliday",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/holiday", {
				headers: { isHoliday: 1,type: 'view',module:'holiday' },
				params,
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"holiday/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/holiday/`, body,{
				headers: {isHoliday: 1, type: 'create',module:'holiday' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"holiday/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`/holiday/`, {
				headers: { id: id,isHoliday: 1,type: 'delete',module:'holiday' },
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
	"holiday/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/holiday/`, body, {
				headers: { id: body.id,isHoliday: 1,type: 'update',module:'holiday' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
