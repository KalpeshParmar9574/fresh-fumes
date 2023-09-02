import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getSkill = createAsyncThunk(
	//action type string
	"skill/getSkill",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/skill", {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
			});
			sessionStorage.setItem(
				"skill",
				JSON.stringify({
					data: res.data.data,
					timestamp: +new Date(),
				}),
			);
			return res.data.data;
		} catch (error) {
			toast.error(error.response.data.message);
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const insert = createAsyncThunk(
	//action type string
	"skill/insert",
	// callback function
	async (body) => {
		try {
			const res = await Axios.post(`/skill/`, body);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},
);
export const deleteById = createAsyncThunk(
	//action type string
	"skill/deleteById",
	// callback function
	async (id) => {
		try {
			const res = await Axios.delete(`/skill/`, {
				headers: { id: id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},
);

export const updateById = createAsyncThunk(
	//action type string
	"skill/updateById",
	// callback function
	async (body) => {
		try {
			const res = await Axios.put(`/skill/`, body, {
				headers: { id: body.id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},
);
