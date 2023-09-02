import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getHelpdeskCategories = createAsyncThunk(
  "helpdeskCategories/getHelpdeskCategories",
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/helpDeskCategory", {
        params,
        headers: {
          type: "view",
          module: "helpdesk",
        },
      });
      return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const insert = createAsyncThunk(
    "helpdeskCategories/insert",
    async (body, { rejectWithValue })=>{
        try{
            const res = await Axios.post(
                "/helpDeskCategory", body,{
                    headers:{
                        type:'create',module:'helpdesk'
                    }
                }
            )
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)

export const deleteById = createAsyncThunk(
    "helpdeskCategories/deleteById",
    async (id, { rejectWithValue })=>{
        try{
            const res = await Axios.delete(`/helpDeskCategory/`,{
                headers:{
                    id:id,type:'delete',module:'helpdesk'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }
        catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)

export const updateById = createAsyncThunk(
    "helpdeskCategories/updateById",
    async (body, { rejectWithValue })=>{
        try{
            const res = await Axios.put(`/helpdeskCategory/`,body,{
                headers:{
                    id:body.id,type:'update',module:'helpdesk'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }
        catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)
export const getHelpDeskCategoryById = createAsyncThunk(
    "helpdeskCategories/getHelpDeskCategoryById",
    async (id, { rejectWithValue })=>{
        try{
            const res = await Axios.get(`/getHelpDeskCategoryById/`,{
                headers:{
                    id:id,type:'view',module:'helpdesk'
                }
            })
            return res.data.data;
        }
        catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)

export const getHelpdeskCategoriesDropDown = createAsyncThunk(
    "helpdeskCategories/getHelpdeskCategoriesDropDown",
    async (params, { rejectWithValue }) => {
      try {
        const res = await Axios.get("/helpDeskCategoryDropdown", {
          params,
          headers: {
            type: "view",
            module: "helpdesk",
          },
        });
        return res.data;
      } catch (error) {
          return rejectWithValue(error?.response?.data?.message || error.message);
      }
    }
  );