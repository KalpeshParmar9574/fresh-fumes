import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { ADDRESS_MASTER } from "../../../constants/masters";

export const getAddress = createAsyncThunk(
	//action type string
	"address/getAddress",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			let isSearchQuery = false;
			if (params.search && params.search !== "") {
				isSearchQuery = true;
			}
			const res = await Axios.get(ADDRESS_MASTER, { params ,
			headers:{
				type:'view',module:'addressMaster'
			}
			});
			//return res.data;
			return {
				data: res.data,
				filter: params.filter || isSearchQuery,
			};
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"address/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(ADDRESS_MASTER, body,{
				headers:{
					type:'create',module:'addressMaster'
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
	"address/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${ADDRESS_MASTER}/`, {
				headers: { id: id,type:'delete',module:'addressMaster' },
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
	"address/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${ADDRESS_MASTER}/`, body, {
				headers: { id: body.id,type:'update',module:'addressMaster' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getAddressCount = createAsyncThunk(
	"address/getAddressCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getAddressCount",{
				headers:{
					type:'view',module:'addressMaster'
				}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);