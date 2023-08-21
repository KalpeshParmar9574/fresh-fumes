import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";
import { toast } from "react-toastify";

export const getInternData = createAsyncThunk(
	"intern/get",
	async (params, { rejectWithValue }) => {
		try {
			let isSearchQuery = false;
			if (params.search && params.search !== "") {
				isSearchQuery = true;
			}
			const res = await Axios.post("/getIntern", params,{
				headers: { type:'view',module:'interns' },
			});
			//return res.data.data;
			return {
				data: res.data.data,
				filter: params.filter || isSearchQuery,
			};
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getTotalInternCount = createAsyncThunk(
	"Intern/get/totalCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/totalInterns", {
				headers: { type:'view',module:'interns' },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const updateInternFile = createAsyncThunk(
	"Intern/updateInternFile",
	async (body, { rejectWithValue }) => {
		try {
			const response = await Axios.put("/updateIntern", body,{
				headers: { type:'update',module:'interns' },
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const exportInternFile = createAsyncThunk(
	"Intern/exportInternFile",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/exportIntern", params,{
				headers: { type:'view',module:'interns' },
			});
			// console.log(response.data)
			return response.data;
			
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const convertToCandidate = createAsyncThunk(
	"Intern/convertToCandidate",
	async ({ id }) => {
		try {
			const res = await Axios.post(`/convertInternToCandidate`, null, {
				headers: { id: id, type:'update',module:'interns' },
			});
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
		}
	},
);

export const convertAllInternsToCandidate = createAsyncThunk(
	"Intern/convertAllInternsToCandidate",
	async () => {
		try {
			const res = await Axios.post(`/convertBulkInternToCandidate`, null,{
				headers: { type:'update',module:'interns' },
			});
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
		}
	},
);

export const getInternForDropdown = createAsyncThunk(
	"intern/getInternForDropdown",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/getInternDropdown",
				{headers: { ...params, type:'view',module:'interns' }});
			return res.data.data;

		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
