import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";
import { toast } from "react-toastify";

export const getHelpDeskTickets = createAsyncThunk(
    "raiseTickets/getRaiseTickets",
    async (params, { rejectWithValue }) => {
        try {
            let isSearchQuery = false;
            if(params.search && params.search !== ""){
                isSearchQuery = true;
            }
          const res = await  Axios.get("/getHelpDeskTicketFromApp", {
                params,
                headers:{
                    userId : 127
                },
            })
            // toast.success(res.data.message);
            return {
                data: res.data.data,
                filter: params.filter || isSearchQuery,
            };
        
        } catch (error) {
            // toast.error(error?.response?.data?.message || error.message); 
			return rejectWithValue(error.response.data.message || error.message);

        }
    }
)

export const insert = createAsyncThunk(
    "raiseTickets/insert",
    async (body, { rejectWithValue })=>{
        try{
            const res = await Axios.post(
                "/genrateTicketFromAPP", body,{
                    headers:{
                        type:'create',module:'tickets'
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

export const updateById = createAsyncThunk(
    "raiseTickets/updateById",
    async ({id,formData}, { rejectWithValue })=>{
        try{
            const res = await Axios.put(`/updateHelpDeskTicketFromApp/`,formData,{
                headers:{
                    ticketId:id,type:'update',module:'tickets'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)
export const updatePriority = createAsyncThunk(
    "raiseTickets/updatePriority",
    async (body, { rejectWithValue })=>{
        try{
            const res = await Axios.put(`/updateHelpDeskTicketFromApp/`,body,{
                headers:{
                    ticketId:body.id,type:'update',module:'tickets'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)

export const deleteById = createAsyncThunk(
    "raiseTickets/deleteById",
    async(body, { rejectWithValue })=>{
        try{
            const res = await Axios.delete(`/helpdeskTickets/`,{
                headers:{
                    ticketId:body.id,type:'delete',module:'tickets'
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

export const getHelpdeskTicketById = createAsyncThunk(
    "raiseTickets/getraiseTicketsById",
    async (id, { rejectWithValue })=>{
        try{
            const res = await Axios.get(`/getHelpDeskTicketByIdFromApp/`,{
                headers:{
                    ticketId:id,type:'view',module:'tickets'
                }
            })
            return res.data;
        }
        catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)
export const getTotalTicketCount = createAsyncThunk(
	"raiseTickets/getTotalTicketCount",
	async ({ rejectWithValue }) => {
		try {
			const res = await Axios.get("/getTotalTicketCountFromApp", {
				headers: { userId : 127 },
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message || error.message);
		}
	},
);
export const ticketReply = createAsyncThunk(
    "raiseTickets/ticketReply",
    async (body, { rejectWithValue })=>{
        try{
            const res = await Axios.put(`/ticketReply/`,body,{
                headers:{
                    ticketId:body.id,type:'update',module:'tickets'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)
export const sendTicketResponse = createAsyncThunk(
    "raiseTickets/sendTicketResponse",
    async ({formData,id}, { rejectWithValue })=>{
        try{
            const res = await Axios.post(`/sendTicketResponseFromApp/`,formData,{
                headers:{
                    ticketId:id,type:'update',module:'tickets'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)

export const closeTicket = createAsyncThunk(
    "helpdeskTickets/closeTicket",
    async (id, { rejectWithValue })=>{
        try{
            const res = await Axios.put(`/closeTicketFromApp/`,id,{
                headers:{
                    ticketId:id,type:'update',module:'tickets'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)
export const reOpenTicket = createAsyncThunk(
    "helpdeskTickets/reOpenTicket",
    async (id, { rejectWithValue })=>{
        try{
            const res = await Axios.put(`/reOpenTicketFromApp/`,id,{
                headers:{
                    ticketId:id,type:'update',module:'tickets'
                }
            })
            toast.success(res.data.message);
            return res.data;
        }catch(error){
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
)

