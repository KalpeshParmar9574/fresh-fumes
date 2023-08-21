import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";



export const getEmployeeAssetsFromApp = createAsyncThunk(
  "assets/getEmployeeAssetsFromApp",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/getEmployeeAssetsFromApp", {
        headers: {userId:id, type: "view", module: "assets" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
)

export const getAllAssets = createAsyncThunk(
  "assets/getAllAssets",
  async (params, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/assets",{
        headers:{type:'view',module:'assets'}
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const getAssetById = createAsyncThunk(
  "assets/getAssetById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/getAssetItemById", {
        headers: { id, type: "view", module: "assets" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const generateAsset = createAsyncThunk(
  "assets/generateAsset",
  async (values, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/generateAsset", values,{
        headers:{type:'create',module:'assets'}
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const getGeneratedAssetsById = createAsyncThunk(
  "assets/getGeneratedAssetsById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/generatedAssetById", {
        headers: { id, type: "view", module: "assets" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const getAllGeneratedAssets = createAsyncThunk(
  "assets/getAllGeneratedAssets",
  async (params, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/generatedAssets", { params,headers:{type:'view',module:'assets'} });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const updateGeneratedAssets = createAsyncThunk(
  "assets/updateGeneratedAssets",
  async (values, { rejectWithValue }) => {
    try {
      const response = await Axios.put("/editGeneratedAsset", values,{
        headers:{type:'update',module:'assets'}
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export async function getSerailNumberByItemIds(body) {
  try {
    const response = await Axios.post(
      "/getItemInventorySerialNumberList",
      body,
      {
        headers: { type: "view", module: "assets" },
      }
    );
    return response.data.data.serialNumber;
  } catch (error) {
    return [];
  }
}

export async function checkSerialNumber(body) {
  try {
    const response = await Axios.post("/checkSerialNumber", body,{
      headers:{type:'view',module:'assets'}
    });
    return response.data;
  } catch (error) {
    return [];
  }
}

export const getGeneratedAssetsCount = createAsyncThunk(
  "assets/totalAssets",
  async (params, { rejectWithValue }) => {
    try {
      const countResponse = await Axios.get("/totalAssets", { params ,headers:{type:'view',module:'assets'}});
      const nameResponse = await Axios.get("/getAssetItemById", {
        headers: { id: params.assetId, type: "view", module: "assets" },
      });

      return { ...countResponse.data, ...nameResponse.data.data };
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const getGeneratedAssetsForDropdown = createAsyncThunk(
  "assets/getGeneratedAssetsForDropdown",
  async (params, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/getGeneratedAssetsForDropdown",{headers:{...params,type:'view',module:'assets'}});
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  }
);

export const migrateServerToPC = createAsyncThunk(
	//action type string
	"assets/migrateServerToPC",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/migrateServerToPc`, null,{
				headers: { id: id, type:"update",module:"assets"},
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);