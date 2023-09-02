import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getEmailConfig = createAsyncThunk(
	//action type string
	"getSystemConfig/get",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get( "/getConfigByModule" , {
        headers: { type: "view", module: "systemConfig", config_module: params },
      });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);


export const updateEmailConfig = createAsyncThunk(
    "updateSystemConfig/update",
    async ( {module_type,value} , { rejectWithValue }) => {
      try {
         const res = await Axios.post(`/addEditConfig`,value, {
         headers: {type:'update',module:'systemConfig' , config_module: module_type }});
         toast.success(res.data.message);
        return res.data;
      } catch (error) {
        return rejectWithValue(error?.response?.data || error.message);
      }
    }
  );