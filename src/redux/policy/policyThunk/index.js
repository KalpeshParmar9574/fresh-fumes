import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Axios } from "../../../service/axios";
import { INTERVIEW_STATUS } from "../../../constants/masters";

export const getFAQs = createAsyncThunk(
  "policy/getFAQsFromApp",
  async ({ rejectWithValue }) => {
    try {
      const res = await Axios.get(
        "/getFAQsFromApp",
        {
          headers: { type: "view", module: "policy" },
          // {
          // headers: { type: 'create',module:'candidates' },
        }
      );
      // console.log("EVALUATION__________01", res.data.data);
      return res.data.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      // return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const ViewPolicyById = createAsyncThunk(
  "policy/getFAQByIdFromApp",
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/getFAQByIdFromApp", {
        headers: {
          faqCategoryId: body?.id,
          type: "view",
          module: "policy",
        },
      });
      // console.log("EVALUATION_DATA__________________", res.data);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      // return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const submitEvalutionForm = createAsyncThunk(
  //action type string
  "evaluation/submitEvalutionForm",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post("submitEvalutionForm", body);
      toast.success(res.data.message);
      // console.log("RES_EVEALUTION FORM_____________",res.data);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      // return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const ViewSubmittedEvaluationById = createAsyncThunk(
  // action type string
  "evaluation/ViewSubmittedEvaluationById",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.get("getSubmitEvalutionById", {
        headers: {
          submitevalutionid: body?.submitevalutionid,
          type: "view",
          module: "evaluation",
        },
      });
      //  console.log("RES_EVEALUTION_VIEW_HISTORY_____________", res.data);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      //  return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const ViewSubmittedEvaluationHistory = createAsyncThunk(
  // action type string
  "evaluation/ViewSubmittedEvaluationHistory",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post("getSubmittedEvalutionFormMonthiwse", body);
      //  console.log("EVALUATION_HISTORY_RESPONSE_____________", res.data);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      //  return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getSubmittedEvalutionHistory = createAsyncThunk(
  // action type string
  "evaluation/getSubmittedEvalutionHistory",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post(`getSubmittedEvalutionHistory`, body);
      //  console.log("HISTORY", res.data);
      return res?.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      //  return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// export const ViewSubmittedEvaluationById = createAsyncThunk(
//    //action type string
//   "evaluation/viewEvaluationById",
//   // callback function
//   async (body, { rejectWithValue }) => {
//     try {
//       const res = await Axios.post("getSubmittedEvalutionForm",{
// 				params: { submittedBy: body.submittedBy,submittedFor:body.submittedFor },
//       });
//       toast.success(res.data.message);
// 	  console.log("RES_EVEALUTION FORM_______",res.data);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data || error.message);
//     }
//   }
// );

export const insertEvaluation = createAsyncThunk(
  //action type string
  "interview/insert",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.post(INTERVIEW_STATUS, body);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      // return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
export const deleteById = createAsyncThunk(
  //action type string
  "interview/deleteById",
  // callback function
  async (id, { rejectWithValue }) => {
    try {
      const res = await Axios.delete(`${INTERVIEW_STATUS}/`, {
        headers: { id: id },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      // return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateById = createAsyncThunk(
  //action type string
  "interview/updateById",
  // callback function
  async (body, { rejectWithValue }) => {
    try {
      const res = await Axios.put(`${INTERVIEW_STATUS}/`, body, {
        headers: { id: body.id },
      });
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      // return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
