import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { CANDIDATE_STATE } from "../../../constants/masters";
export const getCandidateState = createAsyncThunk(
	//action type string
	"candidateState/getCandidateState",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(CANDIDATE_STATE, {
				params: { sortBy: params.sortBy, orderBy: params.orderBy,type:'view',module:'interview' },
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getCandidateStatus = createAsyncThunk(
	//action type string
	"candidateStatus/getCandidateStatus",
	// callback function
	async (thunkAPI, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/candidateStatus",{
				headers:{type:'view',module:'interview'}
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getCandidateByStatus = createAsyncThunk(
	"candidate/getByStatus",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(
				`/candidateStateByStatus?candidateStatusId=${id}`,{
					headers:{type:'view',module:'interview'}
				}
			);
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"candidateState/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post(CANDIDATE_STATE, body,{
				headers:{type:'create',module:'interview'}
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
	"candidateState/deleteById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`${CANDIDATE_STATE}/`, {
				headers: { id: id,type:'delete',module:'interview' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const updateById = createAsyncThunk(
	//action type string
	"candidateState/updateById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`${CANDIDATE_STATE}/`, body, {
				headers: { id: body.id ,type:'update',module:'interview'},
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);
