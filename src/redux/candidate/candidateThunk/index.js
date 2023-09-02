import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const insertCandidate = createAsyncThunk(
	"candidate/insert",
	async (value, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/candidate", value,{
        headers: { type: 'create',module:'candidates' },
      });
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const updateCandidate = createAsyncThunk(
  "candidate/update",
  async ({ id, finalValue }, { rejectWithValue }) => {
    try {
      const res = await Axios.put(
        // `/candidate/${id}`,
        `/candidate`,
        finalValue,{headers: { id: id, type:'update',module:'candidates' },});
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addCandidateJd = createAsyncThunk(
  "candidate/CandidateJd",
  async ({ candidateResume, values, id }, { rejectWithValue }) => {
    try {
      const imageFormData = new FormData();
      imageFormData.append("firstName", values.firstName);
      imageFormData.append("lastName", values.lastName);
      imageFormData.append("contactNumber", values.contactNumber);
      imageFormData.append("email", values.email);
      imageFormData.append(
        "alternateContactNumber",
        values.alternateContactNumber
      );
      imageFormData.append("skype", values.skype);
      imageFormData.append("linkedIn", values.linkedIn);
      imageFormData.append("referedBy", values.referedBy??'');
      imageFormData.append("gender", values.gender);
      imageFormData.append("totalExperience", values.totalExperience);
      imageFormData.append("technologies", JSON.stringify(values.technologies));
      // imageFormData.append("activity", JSON.stringify(values.activity));
      imageFormData.append(
        "candidateJobs",
        JSON.stringify(values.candidateJobs)
      );
      // candidateResume==

      imageFormData.append("candidateResume", candidateResume ?? null);
      const res = await Axios.post(`/addCandidateInJD`, imageFormData, {
        headers: { id: id ?? null,type:'create',module:'candidates' },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCandidate = createAsyncThunk(
	"candidate/get",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/getcandidate", params,{
        headers: { type: 'create',module:'candidates' },
      });

			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const exportCandidateFile = createAsyncThunk(
	"candidate/exportCandidateFile",
	async (params, { rejectWithValue }) => {
		try {
			const response = await Axios.post("/exportCandidates", params,{
        headers: { type: 'export',module:'candidates' },
      });
			// console.log(response.data)
			return response.data;
			
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const updateCandidateFile = createAsyncThunk(
	"candidate/updateCandidateFile",
	async (body, { rejectWithValue }) => {
		try {
			const response = await Axios.put("updateCandidateExcelData", body,{
        headers: { type: 'update',module:'candidates' },
      });
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error.message);
		}
	},
);

export const getTotalCandidateCount = createAsyncThunk(
	"candidate/get/totalCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/totalCandidate",{
        headers: { type: 'view',module:'candidates' },
      });

			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getCandidateById = createAsyncThunk(
  "candidate/getById",
  async (id, { rejectWithValue }) => {
    try {
      // const res = await Axios.get(`/candidate/${id}`);
      const res = await Axios.get(
        // `/candidate/${id}`,
        `/candidate`,
        {headers: { id: id , type: 'view',module:'candidates'},});
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const getEmployeesForDropdown = createAsyncThunk(
  "candidate/getEmployeesForDropdown",
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`/employeesForDropdown`,{
        headers: { is_all_employee:true },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const uploadCandidateImage = createAsyncThunk(
  "candidate/uploadImage",
  async ({ id, file, candidateResume, toBeDeletedCandidateResume }) => {
    try {
      const imageFormData = new FormData();
      imageFormData.append("candidateImage", file ?? null);
      imageFormData.append("candidateResume", candidateResume ?? null);
      imageFormData.append(
        "toBeDeletedCandidateResume",
        toBeDeletedCandidateResume ?? ""
      );
      const res = await Axios.post(
        // `/uploadCandidateImage/${id}`,
        `/uploadCandidateImage`,
        imageFormData,{headers: { id,type: 'update',module:'candidates' },}
      );
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  }
);

export const uploadCandidateResume = createAsyncThunk(
  "candidate/uploadResume",
  async ({ id, file }) => {
    try {
      const imageFormData = new FormData();
      imageFormData.append("candidateResume", file);
      imageFormData.append("candidateImage", null);
      const res = await Axios.post(
        // `/uploadCandidateImage/${id}`,
        `/uploadCandidateImage`,
        imageFormData,{headers: { id,type: 'update',module:'candidates' },}
      );
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  }
);

export const convertToEmployee = createAsyncThunk(
	"candidate/convertToEmployee",
	async ({ id,joiningDate,productionDate }) => {
		try {
			const res = await Axios.put(`/convertCandidateToEmployee`, null, {
				headers: { id,joiningDate,productionDate,type: 'update',module:'candidates' },
			});
			return res.data;
		} catch (error) {
			toast.error(error.response.data.message || error.message);
		}
	},
);

export const getEsCandidate = createAsyncThunk(
	"candidate/getEsCandidate",
	async (params, { rejectWithValue }) => {
		try {
			const res = await Axios.post("/esCandidateSearch", params,{
        headers: { type: 'view',module:'candidates' },
      });
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);

export const getCandidateFromResume = createAsyncThunk(
  "candidate/getCandidateFromResume",
  async ({ candidateResume}, { rejectWithValue }) => {
    try {
      const imageFormData = new FormData();
      imageFormData.append("file", candidateResume ?? null);
      const res = await Axios.post('http://192.168.0.80:8000/upload', imageFormData,{mode:'cors'});
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
