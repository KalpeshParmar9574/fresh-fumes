import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getEmailTemplatesDynamic = createAsyncThunk(
	//action type string
	"email/getEmailTemplatesDynamic",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/emailTemplate", { params,
			headers:{
				type:'view',module:'emailTemplate'
			}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getEmailTemplatesDynamicById = createAsyncThunk(
	//action type string
	"email/getEmailTemplatesDynamicById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`getEmailTemplateById/`, { headers: { id: id,type:'view',module:'emailTemplate' } });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const addEmailTemplate = createAsyncThunk(
	//action type string
	"email/addEmailTemplate",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/emailTemplate", body,{
				headers:{
					type:'create',module:'emailTemplate'
				}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteEmailTemplateDynamicById = createAsyncThunk(
	//action type string
	"email/deleteEmailTemplateDynamicById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete("/emailTemplate", { headers: { id,type:'delete',module:'emailTemplate' } });
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateEmailTemplateDynamicById = createAsyncThunk(
	//action type string
	"email/updateEmailTemplateDynamicById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put("/emailTemplate", body, {
				headers: { id: body.id,type:'update',module:'emailTemplate' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
