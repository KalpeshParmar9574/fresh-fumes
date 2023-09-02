import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { encryption } from "../../../utils/encodeString";

export const getCmsVariable = createAsyncThunk(
  //action type string
  "cmsVariable/getCmsVariable",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/cmsVariable", { params });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const getCmsVariableById = createAsyncThunk(
  //action type string
  "cmsVariable/getCmsVariableById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`/getCmsVariableById`, {
        headers: { id: id },
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const createCmsVariable = createAsyncThunk(
  //action type string
  "cmsVariable/createCmsVariable",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post(`/cmsVariable/`, body);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const deleteCmsVariableById = createAsyncThunk(
  //action type string
  "cmsVariable/deleteCmsVariableById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`/cmsVariable`, { headers: { id: id } });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const updateCmsVariableById = createAsyncThunk(
  //action type string
  "cmsVariable/updateCmsVariableById",
  // callback function
  async (body) => {
    try {
      const res = await Axios.put(`/cmsVariable`, body, {
        headers: { id: body.id },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
