import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getAllAssetsMapping = createAsyncThunk(
	"itemAssetMapping/getAllAssetsMapping",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/getAllAssetMapping", { params, headers: { type: "view", module: "assetItemMapping" } });
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const insertMapping = createAsyncThunk(
	"itemAssetMapping/insertMapping",
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/addUpdateAssetMapping", body,{
				headers: { type: "create", module: "assetItemMapping" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateMapping = createAsyncThunk(
	"itemAssetMapping/updateMapping",
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/addUpdateAssetMapping", body,{
				headers: { type: "update", module: "assetItemMapping" },
			});
			//toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const deleteMapping = createAsyncThunk(
	"itemAssetMapping/deleteMapping",
	async (id, { rejectWithValue }) => {
		try {
			// const res = await Axios.delete(`/deleteAssetMapping/${id}`);
			const res = await Axios.delete(`/deleteAssetMapping`, {
				headers: { id: id,type:'delete',module:'assetItemMapping' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
