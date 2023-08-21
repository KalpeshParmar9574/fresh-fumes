import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getUser = createAsyncThunk(
	//action type string
	"AuthenticateEmployees/getAllAuthenticateEmployees",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/getAllAuthenticateEmployees", { params,
			headers:{
				type:'view',module:'userList'
			}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const getUserCount = createAsyncThunk(
	//action type string
	"AuthenticateEmployees/getAllAuthenticateEmployeeCount",
	// callback function
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/getAllAuthenticateEmployeeCount", {
				params,
				headers:{
					type:'view',module:'userList'
				}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
	},
);

export const updateAccess = createAsyncThunk(
	//action type string
	"AuthenticateEmployees/updateEmployeeAccess",
	// callback function
	async (body) => {
		try {
			const res = await Axios.put(
				`/updateEmployeeAccess`,
				{},
				{
					headers: { id: body,type:'update',module:'userList' },
				},
			);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},
);

export const updateEmployeeRole = createAsyncThunk(
	//action type string
	"AuthenticateEmployees/updateEmployeeRole",
	// callback function
	async (body) => {
		try {
			const res = await Axios.put(
				`/updateEmployeeRole`,
				{},
				{
					headers: { id: body.id, roleid: body.roleid,type:'update',module:'userList' },
				},
			);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},
);
