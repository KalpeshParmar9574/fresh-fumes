import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getAllRoles = createAsyncThunk(
	//action type string
	"userPermission/getAllUserRoles",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/userRole", { params,
			headers:{
				type:'view',module:'userPermissions'
			}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getAllModule = createAsyncThunk(
	//action type string
	"userPermission/getAllModule",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/getAllModuleList", { params,
			headers:{
				type:'view',module:'userPermissions'
			}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getUserPermissionById = createAsyncThunk(
	//action type string
	"userPermission/getUserPermissionById",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/userPermission", { headers: {...params,type:'view',module:'userPermissions'} });

			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data);
		}
	},
);

export const getUserPermissionByRoll = createAsyncThunk(
	//action type string
	"userPermission/getUserPermissionById",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/getUserPermission", { headers: {...params,type:'view',module:'userPermissions'} });

			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data);
		}
	},
);

export const updatePermission = createAsyncThunk(
	//action type string
	"userPermission/updatePermission",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.put("/updatePermission", params,{
				headers:{
					type:'update',module:'userPermissions'
				}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

/* export const createUserRoles = createAsyncThunk(
  //action type string
  "project/create",
  // callback function
  async (body) => {
    try {
      const res = await Axios.post(`/userRole/`, body);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const deleteuserRoleById = createAsyncThunk(
  //action type string
  "userRole/deleteuserRoleById",
  // callback function
  async (id) => {
    try {
      const res = await Axios.delete(`/userRole/${id}`);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const updateUserRolesById = createAsyncThunk(
  //action type string
  "userRoles/updateUserRolesById",
  // callback function
  async (body) => {
    try {
      const res = await Axios.put(`/userRole/${body.id}`, body);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
); */
