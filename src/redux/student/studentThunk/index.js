import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { STUDENTS } from "../../../constants/students";

export const deleteStudentById = createAsyncThunk(
  //action type string

  "student/deleteStudentById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`${STUDENTS}/`, { headers: { id: id,type:'delete',module:'drives' } });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getStudentStatus = createAsyncThunk(
  //action type string
  "student/getStudentStatus",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/studentStatus", {
				params: { sortBy: params.sortBy, orderBy: params.orderBy },
        headers:{type:'view',module:'drives'}
			});
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const addStudentStatus = createAsyncThunk(
  //action type string
  "student/addStudentStatus",
  // callback function
  async (body) => {
    try {
      const res = await Axios.post(`/studentStatus/`, body,{
        headers:{type:'create',module:'drives'}
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const updateStudentStatusById = createAsyncThunk(
  "student/updateStudentStatusById",
  async (body) => {
    try {
      const res = await Axios.put(`/studentStatus/`, body, {
        headers: { id: body.id,type:'update',module:'drives' },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const deleteStudentStatusById = createAsyncThunk(
  //action type string
  "student/deleteStudentStatusById",
  // callback function
  async (id) => {
    try {
      const res = await Axios.delete(`/studentStatus/`, {
        headers: { id: id,type:'delete',module:'drives' },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);


export const getStudentById = createAsyncThunk(
  //action type string
  "student/getStudentById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`/students/`, { headers: { id: id,type:'view',module:'interns' } });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const updateStudentById = createAsyncThunk(
  //action type string
  "student/updateStudentById",
  // callback function
  async ({driveId,studentId, body }, { rejectWithValue }) => {
  
    try {
      const res = await Axios.put(`${STUDENTS}/`, body, {
        headers: { id: studentId,type:'update',module:driveId&&driveId!==''?'drives':'interns'},
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const addStudentInDrive = createAsyncThunk(
  //action type string
  "student/addStudentInDrive",
  // callback function
  async ({body,driveId}, { rejectWithValue }) => {
    
    try {
      const res = await Axios.post(`${STUDENTS}`, body,{
        headers:{type:'create',module:driveId&&driveId!==''?'drives':'interns'}
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
export const convertInternToCandidate = createAsyncThunk(
  //action type string
  "student/convertInternToCandidate",
  // callback function
  async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/convertInternToCandidate`, {} ,{ headers: { id: params.id, isEmployee: params.isEmployee }});
      // toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const convertInternToEmployee = createAsyncThunk(
  //action type string
  "student/convertInternToEmployee",
  // callback function
  async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/convertInternToCandidate`, {} ,{ headers: { id: params.id, productionDate:params.productionDate, isEmployee: params.isEmployee }});
      // toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const convertStudentToEmployee = createAsyncThunk(
  //action type string
  "student/convertInternToEmployee",
  // callback function
  async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post(`/convertInternToEmployee`, {},{ headers: { id: params.id,productionDate:params.productionDate,isEmployee: params.isEmployee}});
      // toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
export const getDrivesWithStudents = createAsyncThunk(
  //action type string
  "drives/getDrivesWithStudents",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      let isSearchQuery = false;
			if (params?.search && params?.search !== "") {
				isSearchQuery = true;
			}
      const res = await Axios.get(
        `/drivesWithStudents/`,
        //{  },
        {
          params: {
            sortBy: params.sortBy,
            orderBy: params.orderBy,
            search: params.search,
          },
          headers: { id: params.id,type:'view',module:'drives' }
        }
      );
      // return res.data.data;
      return {
				data: res.data.data,
				filter: params?.filter || isSearchQuery,
			};
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const totalStudentsByDrive = createAsyncThunk(
	"drives/getTotalStudentsByDrive",
	async (id, { rejectWithValue }) => {
		try {
			const res = await Axios.get(`/totalStudentsByDrive`, { headers: { id: id,type:'view',module:"drives" }});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
