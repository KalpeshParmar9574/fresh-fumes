import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getCollege = createAsyncThunk(
	//action type string
	"college/getCollege",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			let isSearchQuery = false;
			if (params?.search && params?.search !== "") {
				isSearchQuery = true;
			}
			const res = await Axios.get("/college", { params, headers: { type: "view", module: "college" }});
			//return res.data.data;
			return {
				data: res.data.data,
				filter: params?.filter || isSearchQuery,
			};
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getCollegeForFiltering = createAsyncThunk(
	"college/getCollegeForFiltering",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/college", { params, headers: { type: "view", module: "college" } });
			return res?.data?.data;
		} catch (error) {
			// console.log(error);
		}
	},
);

export const insertCollege = createAsyncThunk(
	//action type string
	"college/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/college/`, body, {
				headers: { type: "create", module: "college" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteCollegeById = createAsyncThunk(
	//action type string
	"college/deleteCollegeById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`/college/`, {
				headers: { id: id, type: "delete", module: "college" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateCollegeById = createAsyncThunk(
	//action type string
	"college/updateCollegeById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/college/`, body, {
				headers: { id: body.id, type: "update", module: "college" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getCollegeById = createAsyncThunk(
	//action type string
	"college/getCollegeById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getCollegeById/`, {
				headers: { id: body.id, type: "view", module: "college" },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getCollegeCount = createAsyncThunk(
	"college/getCollegeCount",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/totalCollege`, {
				headers: { type: "view", module: "college" },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
