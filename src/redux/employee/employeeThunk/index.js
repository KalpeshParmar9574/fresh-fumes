import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const insertEmployee = createAsyncThunk(
	"employee/insertEmployee",
	async (value, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/employee", value, {
				headers: { "Content-Type": "multipart/form-data",type:'create',module:'employee' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateEmployee = createAsyncThunk(
	"employee/updateEmployee",
	async ({ id, values }, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/employee`, values,{
				headers: { type:'update',module:'employee' },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getEmployee = createAsyncThunk(
	"employee/getEmployee",
	async (params, { rejectWithValue }) => {
		try {
			let newData = false;
			let isSearchQuery = false;

			if (
				(params.newJoining && params.page === 1) ||
				(params.reliving && params.page === 1) ||
				(params.activeEmployees && params.page === 1) ||
				(params.newData && params.page === 1)
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
					status: "employee",
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
				if (error.response.config.params.page === 1) {
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

export const getTotalEmployeeCount = createAsyncThunk(
	"employee/get/totalEmployees",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get(`/totalEmployees`, {
				headers: { status: "employee", type: "view", module: "employee" },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getEmployeeById = createAsyncThunk(
	"employee/getById",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getEmployeeById/`, {
				headers: { id: id ,type:'view',module:'employee'},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data || error.message);
		}
	},
);

export const getTeamLeadData = createAsyncThunk(
	"employee/getTeamLeadData",
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
	"employee/getProjectManagerData",
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
	"employee/getEmployeeForDropDown",
	async (params, { rejectWithValue }) => {
		// console.log(params);
		try {
			const res = await Axios.get("/getEmployeesForDropdownFromApp", {
				headers: {
					is_all_employee: 1,
				},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue({
				// status: error.response.status,
				error: error?.response?.data?.message || error?.message,
			});
		}
	},
);

export const getAvailableEmployeeForDropDown = createAsyncThunk(
	"employee/getAvailableEmployeeForDropDown",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.get("/getInterviewerForDropdown", { params });
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
	"employee/getHRData",
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

export const getAllMemberDropdown = createAsyncThunk(
	"employee/getAllMemberDropdown",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/getAllMemberDropdown`);
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
export const getTLandPMByDepartmentIds = createAsyncThunk(
	"employee/getTLandPMByDepartmentIds",
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

export const getJoiningEmployee = createAsyncThunk(
	"employee/getJoiningEmployee",
	async (params, { rejectWithValue }) => {
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

			const res = await Axios.get("/getAllEmployeeJoining", {
				params: {
					...params,
					status: "joining-employee",
				},
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
				if (error.response.config.params.page === 1) {
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

export const updateEmployeeProfile = createAsyncThunk(
	"employee/updateEmployeeProfile",
	async ({ id, values }, { rejectWithValue }) => {
		try {
			const res = await Axios.put(`/employeeProfile`, values, {
				headers: { id: id,type:"update",module:"employee" },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const sendPasswordMail = createAsyncThunk(
	"employee/sendPasswordMail",
	async ({ id, values }, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/sendPasswordMail`, values, {
				headers: { id: id },
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getNewJoiningEmployeeCount = createAsyncThunk(
	"employee/get/totalNewJoiningCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get(`/totalNewJoiningCount`,{
				headers:{type:'view',module:'employee'}
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const updateEmployeeExcelData = createAsyncThunk(
	"Intern/updateEmployeeExcelData ",
	async (body, { rejectWithValue }) => {
		try {
			const response = await Axios.put("/updateEmployeeExcelData", body,{
				headers:{type:'update',module:'employee'}
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const exportEmployeeFile = createAsyncThunk(
	"Intern/exportEmployees",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/exportEmployees", params,{
				headers:{type:'view',module:'employee'}
			});
			// console.log(response.data)
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const backoutEmployeeById = createAsyncThunk(
	//action type string
	"employee/backoutEmployeeById ",
	// callback function
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.delete("/backoutEmployeeById", { headers: { id, type:'delete', module:'employee' } });
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);
