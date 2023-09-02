import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getSpecialDay = createAsyncThunk(
	//action type string
	"specialDay/getSpecialDay",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/holiday", {
				headers: { isHoliday: 0,type: 'view',module:'specialDay' },
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
				headers: {isHoliday: 0, type: 'create',module:'specialDay' },
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
				headers: { isHoliday: 0,id: id,type: 'delete',module:'specialDay' },
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
				headers: { isHoliday: 0,id: body.id ,type: 'update',module:'specialDay'},
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
