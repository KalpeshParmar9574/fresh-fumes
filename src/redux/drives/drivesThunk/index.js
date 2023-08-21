import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { DRIVES } from "../../../constants/drives";

export const getDrives = createAsyncThunk(
	//action type string
	"drives/getDrives",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(DRIVES, { params ,headers: { type:'view',module:'drives' }});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const uploadStudentFile = createAsyncThunk(
	"drives/uploadStudentFile",
	async (body, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/addStudentsFromFile", body,{
				headers:{type:'create',module:'drives'}
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getById = createAsyncThunk(
	//action type string
	"drives/getById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`getDrivesById/`, { headers: { id: id,type:'view',module:'drives' } });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"drives/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(DRIVES, body,{
				headers:{type:'create',module:'drives'}
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
	"drives/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${DRIVES}/`, { headers: { id,type:'delete',module:'drives' } });
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateById = createAsyncThunk(
	//action type string
	"drives/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${DRIVES}/`, body, {
				headers: { id: body.id,type:'update',module:'drives' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getDriveCount = createAsyncThunk(
	"drives/getDriveCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getDriveCount",{
				headers:{type:'view',module:'drives'}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
