import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getChangeRequest = createAsyncThunk(
  "changeRequest/get",
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/getEmployeeLogs",{headers: {...params,type:'view',module:'dataChangeRequest'}});

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const getChangeRequestById = createAsyncThunk(
  "changeRequestById/get",
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/getEmployeeLogsById", {
        headers: { id: id,type:'view',module:'dataChangeRequest' },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const updateRequestStatus = createAsyncThunk(
  "updateRequest",
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.put("/updateRequestStatus", null, {
        headers: {id: params.id, request_status: params.request_status, username: params.username, note: params.note, type:'update',module:'dataChangeRequest'}
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const getTotalChangeRequestCount = createAsyncThunk(
	"changeRequest/get/totalCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getEmployeeLogsCount",{
        headers:{type:'view',module:'dataChangeRequest'}
      });
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
