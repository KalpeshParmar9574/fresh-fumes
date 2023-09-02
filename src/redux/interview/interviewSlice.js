import { createSlice } from "@reduxjs/toolkit";
import { getInterview } from "./interviewThunk";

let interview = sessionStorage.getItem("interview");
let data = [];

if (interview) {
	try {
		let json = JSON.parse(interview);
		if (+new Date() - json.timestamp < 1000 * 60 * 60) {
			data = json.data;
		}
	} catch (e) {}
}

const initialState = {
	data,
	loading: false,
	error: null,
	complete: false,
};

// A slice for getBloodGroup with our 3 reducers
export const interviewSlice = createSlice({
	name: "interview",
	initialState,
	reducers: {},
	extraReducers: {
		[getInterview.pending]: (state) => {
			state.loading = true;
		},
		[getInterview.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.complete = true;
		},
		[getInterview.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.error = payload;
			state.complete = true;
		},
	},
});

// The reducer
export const interviewReducer = interviewSlice.reducer;
