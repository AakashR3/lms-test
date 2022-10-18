import { createSlice } from "@reduxjs/toolkit";

import { notify } from "~/helpers";
import * as auth from "~/helpers/auth";
import { LoginApi } from "~/features/auth/login/store";
import { addRootReducer } from "~/config/store/reducers";

const { login } = LoginApi.endpoints;
const slice = createSlice({
	name: "auth_login",
	initialState: {},
	reducers: {},
	extraReducers(builder) {
		builder
			.addMatcher(login.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				auth.login(Data.SessionId);
			})
			.addMatcher(login.matchRejected, (state, action: any) => {
				const { data } = action.payload;
				notify("login_error_message", data);
			});
	}
});

export const loginAction = slice.actions;
const reducer = { authLogin: slice.reducer };
addRootReducer(reducer);
