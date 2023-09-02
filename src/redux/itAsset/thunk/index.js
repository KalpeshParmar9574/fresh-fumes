import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getAsset = createAsyncThunk(
	"asset/getAsset",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/asset", { params, headers: { type: "view", module: "assetMapping" } });
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const insert = createAsyncThunk(
	"asset/insert",
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/asset", body,{
				headers: { type: "create", module: "assetMapping" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateAsset = createAsyncThunk(
	"asset/updateAsset",
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/asset/`, body, {
				headers: {
					id: body.id,
					type: "update",
					module: "assetMapping",
				},
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const deleteById = createAsyncThunk(
	"asset/deleteById",
	async (id, { rejectWithValue }) => {
		try {
			// const res = await Axios.delete(`/asset/${id}`);
			const res = await Axios.delete(`/asset`, { headers: { id: id,type:'delete',module:'assetMapping' } });
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
