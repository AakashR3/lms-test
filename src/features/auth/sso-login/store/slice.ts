import { createSlice } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";

const ssoLoginSlice = createSlice({
	name: "auth_sso_login",
	initialState: {},
	reducers: {}
});

export const ssoLoginAction = ssoLoginSlice.actions;
const reducer = { authSsoLogin: ssoLoginSlice.reducer };

addRootReducer(reducer);
