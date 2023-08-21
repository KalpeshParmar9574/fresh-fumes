import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getJobVacancies = createAsyncThunk(
	//action type string
	"jobVacancy/getJobVacancies",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("jobVacancies", { params });
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getJobVacancyId = createAsyncThunk(
	//action type string
	"jobVacancy/getJobVacancyId",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`getjobVacanciesById`, {
				headers: { id: id },
			});
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const addJobVacancy = createAsyncThunk(
	//action type string
	"jobVacancy/addJobVacancy",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/addjobVacancies", body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

export const deleteJobVacancy = createAsyncThunk(
	//action type string
	"jobVacancy/deleteJobVacancy",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete(`jobVacancies/`, {
				headers: { id: id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateJobVacancy = createAsyncThunk(
	//action type string
	"jobVacancy/updateJobVacancy",
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`jobVacancies/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const scanCV = createAsyncThunk(
	"jobVacancy/scanCV",
	async (body, { rejectWithValue }) => {
		try {
			const response = await Axios.post(
				"http://192.168.0.219:5000/api/post_cv_scraping",
				body,
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
