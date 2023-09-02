import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

// export const getAssetVM = createAsyncThunk(
// 	//action type string
// 	"assetVM/getAssetVM",
// 	// callback function
// 	async (params, { rejectWithValue }) => {
// 		try {
// 			let isSearchQuery = false;
// 			if (params?.search && params?.search !== "") {
// 				isSearchQuery = true;
// 			}
// 			const res = await Axios.get("/assetVm", { params });
// 			// return res.data.data;
// 			return {
// 				data: res.data.data,
// 				filter: params?.filter || isSearchQuery,
// 			};
// 		} catch (error) {
// 			return rejectWithValue(error?.response?.data?.message || error.message);
// 		}
// 	},
// );
// export const getAssetVM = createAsyncThunk(
// 	//action type string
// 	"assetVM/getAssetVM",
// 	// callback function
// 	async (params, { rejectWithValue }) => {
// 		try {
// 			const res = await Axios.get("/assetVm", { params, headers: { type: "view", module: "vmMaster" }});
// 			return res.data.data;
// 		} catch (error) {
// 			return rejectWithValue(error?.response?.data?.message || error.message);
// 		}
// 	},
// );

export const getAssetVM = createAsyncThunk(
	//action type string
	"assetVM/getAssetVM",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/getAssetVm", params,{headers: { type: "view", module: "vmMaster" }});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insertAssetVM = createAsyncThunk(
	//action type string
	"assetVM/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/assetVm/`, body,{
				headers: { type: "create", module: "vmMaster" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteAssetVM = createAsyncThunk(
	//action type string
	"assetVM/deleteAssetVMById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`/assetVm/`, {
				headers: { id: id, type: "delete", module: "vmMaster" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateAssetVMById = createAsyncThunk(
	//action type string
	"assetVM/updateAssetVMById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/assetVm/`, body, {
				headers: { id: body.id, type: "update", module: "vmMaster" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getAssetVMById = createAsyncThunk(
  //action type string
  "student/getAssetVMById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`/getAssetVmById/`, { headers: { id: id,type:'view',module:'vmMaster' } });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);


