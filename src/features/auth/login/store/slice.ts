import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

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
				const { Status, Message, Data } = action.payload;
				auth.login(Data.SessionId);
			})
			.addMatcher(login.matchRejected, (state, action: any) => {
				const { data } = action.payload;
				const message = data?.Message || data?.title || "Something Went Wrong. Try Again";
				console.warn("We got a rejected action!");
				toast.error(message, {
					id: "login_error_message"
				});
			});
	}
});

export const loginAction = slice.actions;
const reducer = { authLogin: slice.reducer };

addRootReducer(reducer);
