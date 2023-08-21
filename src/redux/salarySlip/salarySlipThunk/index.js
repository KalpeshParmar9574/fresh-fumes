import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const addSalarySlip = createAsyncThunk(
	"/addSalarySlip",
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/generateSalarySlip", body
			,{
				headers:{
					type:'create',module:'salarySlip'
				}
			}
			);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
