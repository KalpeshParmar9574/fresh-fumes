import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { JOB_DESCRIPTION } from "../../../constants/jobDescription";

export const getCandidateByJob = createAsyncThunk(
	//action type string
	"jobCan/getCandidateById",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`getCandidateByJob`, {
				headers: { jobId: id,type:'view',module:'jobDescription' },
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);
