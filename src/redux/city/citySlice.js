import { createSlice } from '@reduxjs/toolkit';
import { getCity } from './citythunk';

const initialState = {
	cities: [],
	loading: false,
};
export const citySlice = createSlice({
	name: 'City',
	initialState,
	reducers: {},
	extraReducers: {
		[getCity.pending]: (state) => {
			state.loading = true;
		},
		[getCity.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.cities = payload;
		},
		[getCity.rejected]: (state) => {
			state.loading = false;
			state.cities = [];
		},
	},
});

export const cityReducer = citySlice.reducer;
