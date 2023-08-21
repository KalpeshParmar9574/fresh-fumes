import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getProject = createAsyncThunk(
	//action type string
	"project/getProject",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			let isSearchQuery = false;
			if ((params.technologyId && params.technologyId !== "") || 
				(params.projectManager && params.projectManager !== "") ||
				(params.projectName && params.projectName !== "") ||
				(params.year && params.year !== "")) {
					isSearchQuery = true;
			}
			const res = await Axios.get("/project", { params, headers: { type: "view", module: "project" } });
			//return res.data.data;
			return {
				data: res.data.data,
				filter: params.filter || isSearchQuery,
			};
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getProjectById = createAsyncThunk(
	//action type string
	"project/getprojectById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getProjectById/`, {
				headers: { id: body.id, type: "view", module: "project" },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const createProject = createAsyncThunk(
	//action type string
	"project/create",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/project/`, body,{
				headers:{type:'create',module:'project'}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const deleteProjectById = createAsyncThunk(
	//action type string
	"project/deleteProjectById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`/project/`, {
				headers: { id: id, type: "delete", module: "project" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateProjectById = createAsyncThunk(
	//action type string
	"project/updateProjectById",
	// callback function
	async ({id, body}, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/project/`, body, {
				headers: { id: id, type: "update", module: "project" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getProjectCount = createAsyncThunk(
	"project/getProjectCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getProjectCount",{headers:{type:'view',module:'project'}});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);