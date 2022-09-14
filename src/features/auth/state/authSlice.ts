import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { StoreState } from "~/config/store";
import { authApi } from "~/services/auth";
import toast from "react-hot-toast";

interface IAuthState {
	user?: null;
	token: string | null;
	isAuthenticated: boolean;
}

const initialState: IAuthState = {
	user: null,
	token: null,
	isAuthenticated: false
};

const auth = authApi.endpoints;
const matchsRejected = isAnyOf(
	auth.doSignUp.matchRejected,
	auth.doLogin.matchRejected,
	auth.forgotPassword.matchRejected,
	auth.sendVerifyEmail.matchRejected,
	auth.resetPassword.matchRejected
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState
	},
	extraReducers(builder) {
		builder
			.addMatcher(auth.doLogin.matchFulfilled, (state, action: any) => {
				console.log("fulfilled", action.payload.Data[0]);
				// state.user = action.payload.user;
				// state.token = action.payload;
				localStorage.setItem("isLogged", "true");
				localStorage.setItem("user", JSON.stringify(action.payload.Data[0]));
				state.isAuthenticated = true;
			})
			.addMatcher(auth.doSignUp.matchFulfilled, (state, action: any) => {
				toast.success(action.payload?.Message);
				// state.user = action.payload.user;
			})
			.addMatcher(matchsRejected, (state, action: any) => {
				toast.error(action.payload?.data?.Message || "Something Went Wrong. Try Again");
			});
	}
});

export const selectIsAuthenticated = (state: StoreState) => state.auth.isAuthenticated;

export const { logout } = authSlice.actions;

const reducer = { auth: authSlice.reducer };

export default reducer;
