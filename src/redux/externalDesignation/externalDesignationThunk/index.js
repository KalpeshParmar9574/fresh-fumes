import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { EXTERNAL_DESIGNATION } from "../../../constants/masters";

export const getExternalDesignation = createAsyncThunk(
	//action type string
	"externalDesignation/getExternalDesignation",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(EXTERNAL_DESIGNATION, {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
			});
			sessionStorage.setItem(
				"externalDesignation",
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
	"externalDesignation/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(EXTERNAL_DESIGNATION, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"externalDesignation/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${EXTERNAL_DESIGNATION}/`, {
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
	"externalDesignation/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${EXTERNAL_DESIGNATION}/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
