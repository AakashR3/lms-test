import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import { LoginApi } from "~/features/auth/login/store";
import { addRootReducer } from "~/config/store/reducers";

const auth = LoginApi.endpoints;

const loginSlice = createSlice({
	name: "auth_login",
	initialState: {},
	reducers: {},
	extraReducers(builder) {
		builder
			.addMatcher(auth.login.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				console.log(payload);
			})
			.addMatcher(auth.login.matchRejected, (state, action: any) => {
				const { data } = action.payload;
				const message = data?.Message || data?.title || "Something Went Wrong. Try Again";
				console.warn("We got a rejected action!");
				toast.error(message, {
					id: "login_error_message"
				});
			});
	}
});

export const loginAction = loginSlice.actions;
const reducer = { authLogin: loginSlice.reducer };

addRootReducer(reducer);
