import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { DEPARTMENT } from "../../../constants/masters";

export const getDepartment = createAsyncThunk(
	//action type string
	"department/getDepartment",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(DEPARTMENT, { params,
			headers:{
				type:'view',module:'department'
			}
			});

			sessionStorage.setItem(
				"department",
				JSON.stringify({
					data: res.data.data,
					timestamp: +new Date(),
				}),
			);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"department/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(DEPARTMENT, body,{
				headers:{
					type:'create',module:'department'
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
	"department/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${DEPARTMENT}/`, {
				headers: { id: id,type:'delete',module:'department' },
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
	"department/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${DEPARTMENT}/`, body, {
				headers: { id: body.id,type:'update',module:'department' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
