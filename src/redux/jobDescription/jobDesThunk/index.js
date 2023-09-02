import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { JOB_DESCRIPTION } from "../../../constants/jobDescription";

export const getJobDes = createAsyncThunk(
  //action type string
  "jobDes/getJobDes",
  // callback function
  async (params, { rejectWithValue }) => {
    let e_id=JSON.parse(localStorage.getItem('employeeId'));
    try {
      const res = await Axios.get(JOB_DESCRIPTION, { params,headers: {
        id: e_id,
        type:'view',
        module:'jobDescription'
      }, });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const getById = createAsyncThunk(
  //action type string
  "jobDes/getById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`getJobDescriptionById`, {
        headers: {
          id: id,type:'view',
          module:'jobDescription'
        },
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const insert = createAsyncThunk(
  //action type string
  "jobDes/insert",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post(JOB_DESCRIPTION, body,{
        headers:{type:'create',
        module:'jobDescription'}
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
export const deleteById = createAsyncThunk(
  //action type string
  "jobDes/deleteById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`${JOB_DESCRIPTION}`,{
        headers: {
          id: id,
          type:'delete',
        module:'jobDescription'
        },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateById = createAsyncThunk(
  //action type string
  "jobDes/updateById",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      // const res = await Axios.put(`${JOB_DESCRIPTION}/${body.id}`, body);
      const res = await Axios.put(`JobDescription`, body,{
        headers:{type:'update',
        module:'jobDescription'}
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const candidateStateUpdate = createAsyncThunk(
  //action type string
  "jobDes/updateCandidateStatus",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.put(`candidateStatusManageInBoard`, body,{
        headers:{
          type:'update',
        module:'candidates'
        }
      });
      // toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getJobDescCount = createAsyncThunk(
	"jobDes/getJobDescCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getJobDescriptionCount",{
        headers:{type:'view',
        module:'jobDescription'}
      });
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
