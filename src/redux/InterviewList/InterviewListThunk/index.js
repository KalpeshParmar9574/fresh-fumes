import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";
import { INTERVIEW_LIST } from "../../../constants/interview";

export const getInterviewList = createAsyncThunk(
	//action type string
	"InterviewList/InterviewList",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post(INTERVIEW_LIST, params,{
				headers: { type: 'view',module:'interview' },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getInterviewCount = createAsyncThunk(
	"InterviewList/InterviewList/totalInterview",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get(`/interviewCounts`,{
				headers: { type: 'view',module:'interview' },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
