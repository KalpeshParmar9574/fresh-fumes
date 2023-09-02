import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getUserRoles = createAsyncThunk(
  //action type string
  "userRoles/getUserRoles",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/userRole", { params,
      headers:{
        type:'view',module:'userRoles'
      }
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const createUserRoles = createAsyncThunk(
  //action type string
  "project/create",
  // callback function
  async (body) => {
    try {
      const res = await Axios.post(`/userRole/`, body,{
        headers:{
          type:'create',module:'userRoles'
        }
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const deleteuserRoleById = createAsyncThunk(
  //action type string
  "userRole/deleteuserRoleById",
  // callback function
  async (id) => {
    try {
      const res = await Axios.delete(`/userRole`, { headers: { id: id,type:'delete',module:'userRoles' } });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const updateUserRolesById = createAsyncThunk(
  //action type string
  "userRoles/updateUserRolesById",
  // callback function
  async (body) => {
    try {
      const res = await Axios.put(`/userRole`, body, {
        headers: { id: body.id,type:'update',module:'userRoles' },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
