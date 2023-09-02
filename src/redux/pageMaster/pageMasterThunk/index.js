import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getPageMaster = createAsyncThunk(
	//action type string
	"pageMaster/getPageMaster",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/page", { params });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getPageMasterById = createAsyncThunk(
	//action type string
	"pageMaster/getPageMasterById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getPageById/`, {
				headers: { id: id },
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const createPageMaster = createAsyncThunk(
	//action type string
	"pageMaster/createPageMaster",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/page/`, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const deletePageMasterById = createAsyncThunk(
	//action type string
	"pageMaster/deletePageMasterById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`/page/`, {
				headers: { id: id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const updatePageMasterById = createAsyncThunk(
	//action type string
	"pageMaster/updatePageMasterById",
	// callback function
	async (body) => {
		try {
			const res = await Axios.put(`/page/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},
);
