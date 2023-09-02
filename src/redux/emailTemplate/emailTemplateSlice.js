import { createSlice } from "@reduxjs/toolkit";
import { getAllEmailTemplates } from "./emailTemplateThunk";


const initialState = {
    data:[],
    status:'idle',
    loading:false,

}


export const emailTemplateSlice = createSlice({
    name:"emailTemplate",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllEmailTemplates.pending]:(state)=>{
            state.loading=true;
            state.status="pending"
        },
        [getAllEmailTemplates.fulfilled]:(state,{payload})=>{
            state.data= payload;
            state.loading = false;
            state.status = "fulfilled";
        },
        [getAllEmailTemplates.rejected]:(state,{payload})=>{
            state.loading = false;
            state.status = "rejected"
        }
    }

})

export const emailTemplateReducer = emailTemplateSlice.reducer;