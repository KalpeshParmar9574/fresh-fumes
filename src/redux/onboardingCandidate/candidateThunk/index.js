import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const sendOnboardingLink = createAsyncThunk(
	"onboardingCandidate/sendOnboardingLink",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/sendOnboardingLink",{
        headers: { type: 'view',module:'candidateOnboarding', id:id },
      });
			return response.data;
			
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getOnboardingCandidate = createAsyncThunk(
	"onboardingCandidate/get",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/getOnboardingCandidate", params,{
        headers: { module:'cadidate' },
      });

			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const verifyOnboardingProcess = createAsyncThunk(
	"onboardingCandidate/verifyOnboardingProcess",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/verifyOnboardingProcess",{
        headers: { type: 'view',module:'candidateOnboarding', id:id },
      });
			return response.data;
			
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const resubmitOnboardingProcess = createAsyncThunk(
	"onboardingCandidate/resubmitOnboardingProcess",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/resubmitOnboardingProcess",{...params}, {
        headers: { type: 'view',module:'candidateOnboarding', id:params.id},
      });

			return response.data;
			
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getOnboardingCandidateDetails = createAsyncThunk(
	"onboardingCandidate/getOnboardingCandidateDetails",
	async (id, { rejectWithValue }) => {
		try {
			const response = await Axios.get("/getOnboardingCandidateDetails",{
        headers: { type: 'view',module:'candidateOnboarding', id:id },
      });
			return response.data;
			
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getTotalOnboardingCandidateCount = createAsyncThunk(
	"onboardingCandidate/getTotalOnboardingCandidateCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getOnboardingCandidateCount",{
        headers: { type: 'view',module:'candidateOnboarding' },
      });

			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);