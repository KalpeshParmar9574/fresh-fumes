import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Axios } from '../../../service/axios';

export const getCity = createAsyncThunk(
	//action type string
	'city/getCity',
	// callback function
	async (state, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/cities/`, { headers: { state: state } });
			return res.data.data;
		} catch (error) {
			toast.error(error.response.data.message);
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	}
);

export const getCityForFilters = createAsyncThunk(
	//action type string
	'city/getCityForFilters',
	// callback function
	async (city, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getAllCity`, { headers: { city: city } });
			return res.data.data;
		} catch (error) {
			toast.error(error.response.data.message);
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	}
);
