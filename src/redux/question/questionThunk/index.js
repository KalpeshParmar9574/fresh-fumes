import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getQuestions = createAsyncThunk(
	//action type string
	"question/getQuestions",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/questions", { params,
			headers:{
				type:'view',module:'questions'
			}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getQuestionById = createAsyncThunk(
	//action type string
	"question/getQuestionsById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`getQuestionById/`, { headers: { id: id,type:'view',module:'questions' } });
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const addQuestion = createAsyncThunk(
	//action type string
	"question/addQuestion",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/questions", body,{
				headers:{
					type:'create',module:'questions'
				}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
export const deleteQuestionById = createAsyncThunk(
	//action type string
	"question/deleteQuestionById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete("/questions", { headers: { id,type:'delete',module:'questions' } });
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateQuestionById = createAsyncThunk(
	//action type string
	"question/updateQuestionById",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put("/questions", body, {
				headers: { id: body.id,type:'update',module:'questions' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
