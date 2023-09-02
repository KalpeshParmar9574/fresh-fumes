import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { DEPARTMENT } from "../../../constants/masters";

export const getWorkFlow = createAsyncThunk(
	//action type string
	"workflow/getWorkFlow",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/getAllWorkFlowForEmail", params, {
			headers:{
				type:'view',module:'workflow'
			}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insertWorkFlow = createAsyncThunk(
	//action type string
	"workflow/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/workFlowForEmail", body,{
				headers:{
					type:'create',module:'workFlow'
				}
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
	"workflow/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete("/workFlowForEmail", {
				headers: { id: id,type:'delete',module:'workFlow' },
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
	"workflow/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put("/workFlowForEmail", body, {
				headers: { id: body.id,type:'update',module:'workFlow' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getTotalWorkflowCount = createAsyncThunk(
	"workflow/totalWorkflow",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getWorkFlowCount",{
				headers:{type:'view',module:'workFlow'}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);