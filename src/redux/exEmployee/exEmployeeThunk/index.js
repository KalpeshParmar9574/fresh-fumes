import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const insertEmployee = createAsyncThunk(
	"exEmployee/insertEmployee",
	async (value, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/employee", value, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateEmployee = createAsyncThunk(
	"exEmployee/updateEmployee",
	async ({ id, values }, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/employee`, values);
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getEmployee = createAsyncThunk(
	"exEmployee/getEmployee",
	async (params, { rejectWithValue }) => {
		// try {
		// 	const res = await Axios.get("/employees", {
		// 		params: {
		// 			...params,
		// 			status: "ex-employee",
		// 		},
		// 	});
		// 	return res.data;
		// } catch (error) {
		// 	let errorObj = {
		// 		status: error.response.status,
		// 		error: error.response.data.message || error.message,
		// 	};
		// 	if (
		// 		error.response.config.params.search &&
		// 		error.response.config.params.search !== ""
		// 	) {
		// 		errorObj.isSearchQuery = true;
		// 	} else {
		// 		errorObj.isSearchQuery = false;
		// 	}
		// 	return rejectWithValue(errorObj);
		// }

		try {
			let newData = false;
			let isSearchQuery = false;
			if (
				params.newJoining ||
				params.reliving ||
				params.activeEmployees ||
				params.newData
			) {
				newData = true;
			}

			if (params.search && params.search !== "") {
				isSearchQuery = true;
				newData = true;
			}

			const res = await Axios.get("/employees", {
				params: {
					...params,
					status: "ex-employee",
				},
				headers:{module:'employee',type:'view'}
			});
			return {
				data: res.data,
				newData: newData,
				scrollApiCall: params.scrollApiCall,
				page: params.page,
				filter: params.filter || isSearchQuery,
			};
		} catch (error) {
			let errorObj = {
				status: error.response.status,
				error: error.response.data.message || error.message,
			};
			if (
				error.response.config.params.search &&
				error.response.config.params.search !== ""
			) {
				errorObj.isSearchQuery = true;
			} else {
				errorObj.isSearchQuery = false;
			}

			if (
				error.response.config.params.newJoining ||
				error.response.config.params.reliving ||
				(error.response.config.params.activeEmployees &&
					!error.response.config.params.scrollApiCall) ||
				error.response.config.params.filter
			) {
				if (error.response.config.params.page == 1) {
					errorObj.newData = true;
				} else {
					errorObj.newData = false;
				}
			} else {
				errorObj.newData = false;
			}

			if (error.response.config.params.filter) {
				errorObj.filter = true;
			}
			return rejectWithValue(errorObj);
		}
	},
);

export const getEmployeeById = createAsyncThunk(
	"exEmployee/getById",
	async (id, { rejectWithValue }) => {
		try {
			// const res = await Axios.get(`/getEmployeeById`);
			const res = await Axios.get(`/getEmployeeById`, { headers: { id: id } });
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data || error.message);
		}
	},
);

export const getTeamLeadData = createAsyncThunk(
	"exEmployee/getTeamLeadData",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/employeesForDropdown`, {
				headers: { is_tl: 1, is_hr: 0 },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data || error.message);
		}
	},
);

export const getProjectManagerData = createAsyncThunk(
	"exEmployee/getProjectManagerData",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/employeesForDropdown`, {
				headers: { is_tl: 0, is_hr: 0 },
			});
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getEmployeeForDropDown = createAsyncThunk(
	"exEmployee/getEmployeeForDropDown",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/employees",{
				headers:{module:'employee',type:'view'}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue({
				status: error.response.status,
				error: error.response.data.message || error.message,
			});
		}
	},
);

export const getHRData = createAsyncThunk(
	"exEmployee/getHRData",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/employeesForDropdown`, {
				headers: { is_hr: 1 },
			});
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getTLandPMByDepartmentIds = createAsyncThunk(
	"exEmployee/getTLandPMByDepartmentIds",
	async (ids, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getLeadandManager`, {
				headers: {
					department_id: JSON.stringify(ids),type:'view',module:'employee'
				},
			});

			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getExEmployeeCount = createAsyncThunk(
	"employee/get/totalExEmployees",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get(`/totalEmployees`, {
				headers: { status: "ex-employee" ,type: "view", module: "employee"},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
