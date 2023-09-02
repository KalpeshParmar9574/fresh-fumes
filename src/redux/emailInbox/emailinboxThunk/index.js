import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../service/axios";

export  const getAllEmail = createAsyncThunk(
    "emailInbox/getAllEmail" , 
    async (params,{rejectWithValue}) =>{
       try{
            const res = await Axios.post("/getmessages",params,{
               headers: { type:'view',module:'inbox'}
            });
            return res.data;
		}
         catch (error) {
			 
        return rejectWithValue(error?.response?.data?.message || error.message);
		
		}
    }
)

export  const getEmailById = createAsyncThunk(
   "emailInbox/getEmailById" , 
   async (params,{rejectWithValue}) =>{
      try{
           const res = await Axios.post("/getmessagesbyid",params,{
              headers: { type:'view',module:'inbox'}
           });
           return res.data;
     }
        catch (error) {
         
       return rejectWithValue(error?.response?.data?.message || error.message);
     
     }
   }
)


export  const getNewEmail = createAsyncThunk(
   "emailInbox/getNewEmail" , 
   async (_,{rejectWithValue}) =>{
      try{
           const res = await Axios.get('/sync',{
            headers: { type:'view',module:'inbox'}
         });
           return res.data;
     }
        catch (error) {
       return rejectWithValue(error?.response?.data?.message || error.message);
     }
   }
)

export  const getMessagesCount = createAsyncThunk(
   "emailInbox/getMessagesCount" , 
   async (_,{rejectWithValue}) =>{
      try{
           const res = await Axios.get('/getMessagesCount',{
            headers: { type:'view',module:'inbox'}
         });
           return res.data;
     }
        catch (error) {
       return rejectWithValue(error?.response?.data?.message || error.message);
     }
   }
)


// export const getNewEmail = async () =>{
//       try{
//            const res = await Axios.get('/sync');
//            return res;
//      }
//         catch (error) {
         
//        return error
     
//      }
//    }