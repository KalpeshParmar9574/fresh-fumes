import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../service/axios";
import { LOGIN_URL } from "../../constants";
import LocalStorage from "../../service/localStorage";
import { encryption } from "../../utils/encodeString";

const initialState = {
	isAuthenticated: LocalStorage.getItem("accessToken") ? true : false,
	accessToken: LocalStorage.getItem("accessToken") || false,
	employeeId: LocalStorage.getItem("employeeId") || null,
	fullName: LocalStorage.getItem("fullName") || "Guest",
	role: LocalStorage.getItem("role") || {},
	userPermissions: LocalStorage.getItem("userPermissions") || [],
};

export const authenticateUser = createAsyncThunk(
	"auth/authenticateUser",
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.post(LOGIN_URL, values);
			return response.data;
		} catch (error) {
			return rejectWithValue(error?.response?.data || error);
		}
	},
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOutUser: (state) => {
			LocalStorage.removeAllItems();
			state.isAuthenticated = false;
			state.accessToken = false;
			state.employeeId = null;
			state.role = {};
			state.userPermissions = [];
		},
	},
	extraReducers: (builder) => {
		
		builder.addCase(authenticateUser.fulfilled, (state, action) => {
			const { data } = action.payload;
			LocalStorage.setItem("accessToken", data.user.accessToken);
			LocalStorage.setItem("employeeId", data.user.employeeId);
			LocalStorage.setItem("userID",encryption(JSON.stringify(data.user.id)));
			LocalStorage.setItem(
				"fullName",
				`${data.user.firstName} ${data.user.lastName}`,
			);
			LocalStorage.setItem("role", data.user.role);
			LocalStorage.setItem("roleId", data.user.roleId);
			LocalStorage.setItem(
				"userPermissionsnewdata",
				JSON.stringify(data.user.userPermissions),
			);
			LocalStorage.setItem(
				"userPermissions",
				encryption(JSON.stringify(data.user.userPermissions)),
			);
			state.employeeId = data.user.employeeId;
			state.fullName = `${data.user.firstName} ${data.user.lastName}`;
			state.role = data.user.role;
			state.userPermissions = data.user.userPermissions;
			state.isAuthenticated = true;
		});
	},
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
