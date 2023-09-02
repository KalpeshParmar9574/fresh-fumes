import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { COMPANY } from "../../../constants/company";
export const getCompany = createAsyncThunk(
	//action type string
	"company/getCompany",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(COMPANY, { params,
				headers:{type:'view',module:'company'}});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getById = createAsyncThunk(
	//action type string
	"company/getById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getCompanyById/`, {
				headers: { id: id,type:'view',module:'company' },
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"company/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(COMPANY, body,{
				headers:{type:'create',module:'company'}
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
	"company/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${COMPANY}/`, {
				headers: { id: id,type:'delete',module:'company' },
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
	"company/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${COMPANY}/`, body, {
				headers: { id: body.id,type:'update',module:'company' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const addCompanyFromCandidate = createAsyncThunk(
	//action type string
	"company/addCompanyFromCandidate",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/createCompanyFromCandidate", body,{
				headers:{type:'create',module:'company'}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getTotalCompanyCount = createAsyncThunk(
	"company/totalCompany",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/totalCompany",{
				headers:{type:'view',module:'company'}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
