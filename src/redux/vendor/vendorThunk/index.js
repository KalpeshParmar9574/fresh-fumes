import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";

export const getVendor = createAsyncThunk(
  //action type string
  "vendor/getVendor",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/vendors", {
        params: { ...params },
        headers: { type: "view", module: "vendors" },
      });

      return res.data.data;
    } catch (error) {
      if (error.response.status === 404) {
        return rejectWithValue(error.response.data.message);
      }
      toast.error(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const getVendorForFiltering = createAsyncThunk(
  "vendor/getVendorForFiltering",
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/vendor", { params,
        headers: { type: "view", module: "vendors" } 
      });
      return res?.data?.data;
    } catch (error) {

    }
  }
);

export const insertVendor = createAsyncThunk(
  //action type string
  "vendor/insert",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post(`/vendor/`, body,{
        headers: { type: "create", module: "vendors" },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const deleteVendorById = createAsyncThunk(
  //action type string
  "vendor/deletevendorById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`/vendor`, { headers: { id: id ,
      type: "delete", module: "vendors"
      } });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const updateVendorById = createAsyncThunk(
  //action type string
  "vendor/updateVendorById",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.put(`/vendor`, body, {
        headers: { id: body.id,type: "update", module: "vendors" },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const getVendorById = createAsyncThunk(
  //action type string
  "vendor/getVendorById",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.get(`/getVendorById`, body, {
        headers: { id: body.id,type: "view", module: "vendors" },
      });
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
