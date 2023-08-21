import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { MANUFACTURER } from "../../../constants/masters";

export const getManufacturer = createAsyncThunk(
  //action type string
  "manufacturer/getManufacturer",
  // callback function
  async (params, { rejectWithValue }) => {
    try {
      const res = await Axios.get(MANUFACTURER, { params, headers: { type: "view", module: "manufacturers" } }); 
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const insert = createAsyncThunk(
  //action type string
  "manufacturer/insert",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post(MANUFACTURER, body,{ headers: { type: "create", module: "manufacturers" } });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
export const deleteById = createAsyncThunk(
  //action type string
  "manufacturer/deleteById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`${MANUFACTURER}`, {
        headers: { id: id, type: "delete", module: "manufacturers" },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateById = createAsyncThunk(
  //action type string
  "manufacturer/updateById",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.put(`${MANUFACTURER}`, body, {
        headers: { id: body.id, type: "update", module: "manufacturers" },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getManufacturerCount = createAsyncThunk(
	"manufacturer/getManuCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getManufacturerCount",{
        headers: { type: "view", module: "manufacturers" },
      });
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
