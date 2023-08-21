import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";
import { toast } from "react-toastify";

export const getInternEvaluation = createAsyncThunk(
	"intern/evaluation/get",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/getEvalutionById", { headers: { employeeId: params.employeeId, studentId: params.studentId} });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getAllInternEvaluation = createAsyncThunk(
	//action type string
	"intern/evaluation/getAll",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`getEvalutionByStudentId/`, { headers: { id: params.id } });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const insertEvaluation = createAsyncThunk(
	//action type string
	"intern/evaluation/insert",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/addUpdateEvalution", body,{
				headers: {
					type:'view',module:'interns'
				}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getEvaluationQuestion = createAsyncThunk(
	//action type string
	"getEvaluationQuestion",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`evalutionQuestion/`);
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);


