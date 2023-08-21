import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";

export const getAllEmailTemplates = createAsyncThunk(
    "emailTemplate/getAllEmailTemplates" , 
    async (params,{rejectWithValue}) =>{
       try{
          const res = await Axios.get("/getAllEmailTemplates");
            return res.data.data;
		}
         catch (error) {
			return rejectWithValue(error?.response?.data?.message || error.message);
		}
    }
)