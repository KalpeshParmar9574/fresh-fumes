import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const addItem = createAsyncThunk(
	"inventory/addItem",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/item", values,{
				headers:{type:'create',module:'items'}
			});
			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error?.message);
		}
	},
);

export const getAllItems = createAsyncThunk(
	"inventory/getAllItems",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/item", { params, headers:{type:'view',module:'items'} });
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const getAllItemById = createAsyncThunk(
	"inventory/getAllItemById",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/item/getById", {
				headers: {
					id,type:'view',module:'items'
				},
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const updateItem = createAsyncThunk(
	"inventory/updateItem",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.put("/item", values,{
				headers:{type:'update',module:'items'}
			});

			toast.success(response.dat);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const deleteItem = createAsyncThunk(
	"inventory/deleteItem",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.delete(`/item/`, {
				headers: { id,type:'delete',module:'items' },
			});
			toast.success(response.dat);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const addAttributeValue = createAsyncThunk(
	"inventory/addAttributeValue",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/item/addAttributeValues", values,{
				headers:{type:'create',module:'items'}
			});
			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const getInventoryData = createAsyncThunk(
	"inventory/getInventoryData",
	async ({ id, params, inventorySearchData }, { rejectWithValue }) => {
		try {
			const response = await Axios.post(
				"/getInventoryListById",
				{ inventoryData: inventorySearchData },
				{
					headers: {
						item_id: id,
						type:'view',module:'itemInventory'
					},
					params,
				},
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const addItemInventoryGroup = createAsyncThunk(
	"inventory/addItemInventoryGroup",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/addItemInventoryDetail", values,{
				headers:{type:'create',module:'itemInventory'}
			});

			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const getInventoryCountById = createAsyncThunk(
	"inventory/getInventoryCountById",
	async ({ id, inventorySearchData }, { rejectWithValue }) => {
		try {
			const response = await Axios.post(
				"/getInventoryCountById",
				{ inventoryData: inventorySearchData },
				{
					headers: {
						item_id: id,
						type:'view',module:'itemInventory'
					},
				},
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

// {{baseUrl}}/editItemInventoryDetail
export const updateInventoryItem = createAsyncThunk(
	"inventory/updateInventoryItem",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.put("/editItemInventoryDetail", values,{
				headers:{type:'update',module:'itemInventory'}
			});

			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const updateInventoryItemStatus = createAsyncThunk(
	"inventory/updateInventoryItemStatus",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.put("/updateItemInventoryStatus", values,{
				headers:{type:'update',module:'itemInventory'}
			});

			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const getAllISP = createAsyncThunk(
	"inventory/getAllISP",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/assetIsp", { params ,headers:{type:'view',module:'ispMaster'}});
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const addIsp = createAsyncThunk(
	"inventory/addIsp",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/assetIsp", values,{
				headers:{type:'create',module:'ispMaster'}
			});
			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error?.message);
		}
	},
);

export const updateIsp = createAsyncThunk(
	"inventory/updateIsp",
	async ({id,finalValues}, { rejectWithValue }) => {
		try {
			const response = await Axios.put("/assetIsp", finalValues,{
				headers: {
					id: id,
					type:'update',module:'ispMaster'
				},
			},);

			toast.success(response.data.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const getAllIspById = createAsyncThunk(
	"inventory/getAllIspById",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/getAssetIspById", {
				headers: {
					id,
					type:'view',module:'ispMaster'
				},
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const deleteIsp = createAsyncThunk(
	"inventory/deleteIsp",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.delete(`/assetIsp/`, {
				headers: { id, type:'delete',module:'ispMaster' },
			});
			toast.success(response.message);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);