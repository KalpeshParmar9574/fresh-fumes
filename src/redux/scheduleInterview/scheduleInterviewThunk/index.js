import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Axios } from '../../../service/axios';

export const insertInterviewSchedule = createAsyncThunk(
	//action type string
	'scheduleInterview/insertInterviewSchedule',
	// callback function
	async (body, { rejectWithValue }) => {
		try {
			const res = await Axios.post('/scheduleInterview', body,{
				headers:{
					type:'update',module:'interview'
				}
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}
);
