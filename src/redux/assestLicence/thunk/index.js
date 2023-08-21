import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const insertAssestLicence = createAsyncThunk(
  "assestLicence/insertAssestLicence",
  async (value, { rejectWithValue }) => {
    try {
 const res = await Axios.post("/assetLicence", value, {
        headers: { "Content-Type": "application/json",type:'create',module:'licenceMaster' },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateAssestLicence = createAsyncThunk(
  "assestLicence/updateAssestLicence",
  async ({ value,id }, { rejectWithValue }) => {
    try {
      const res = await Axios.put(`/assetLicence`,value, {
        headers: { id: id,type:'update',module:'licenceMaster'}});
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// export const getAssestLicence = createAsyncThunk(
//   "assestLicence/getAll",
//   async (params,{ rejectWithValue }) => {
//     try {
     
//       const res = await Axios.get(`/assetLicence`,{params,
//         headers: { type: "view", module: "licenceMaster" },
//       });
//       return res.data
   
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message);
//     }


//   }
// );

export const getAssestLicence = createAsyncThunk(
  "assestLicence/getAll",
  async (params,{ rejectWithValue }) => {
    try {
     
      const res = await Axios.post(`/getAssetLicence`,params,{
        headers: { type: "view", module: "licenceMaster" },
      });
      return res.data
   
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }


  }
);

export const deleteAssestLicence = createAsyncThunk(
  "assestLicence/deleteAssestLicence",
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`/assetLicence`,{
        headers: { id : id,type:'delete',module:'licenceMaster' }});
        toast.success(res.data.message);
      return res.data;
      
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const getAssestLicenceById = createAsyncThunk(
  "assestLicence/getById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`/getAssetLicenceById`, {
        headers: { id: id,type:'view',module:'licenceMaster' },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);
