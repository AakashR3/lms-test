import { toast } from "react-hot-toast";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";
import { ResetPasswordApi } from "~/features/account/reset-password/store";

const auth = ResetPasswordApi.endpoints;
const rejectedMatches = isAnyOf(auth.resetPassword.matchRejected, auth.verifyEmailLink.matchRejected);

const slice = createSlice({
	name: "auth_resetPassword",
	initialState: {},
	reducers: {},
	extraReducers(builder) {
		builder
			.addMatcher(auth.resetPassword.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				console.log("auth.resetPassword.matchRejected");
				toast.success(payload.Message);
			})
			.addMatcher(rejectedMatches, (state, action: any) => {
				const { data } = action.payload;
				const message = data?.Message || data?.title || "Something Went Wrong. Try Again";
				console.warn("We got a rejected action!");
				toast.error(message, {
					id: "reset_error_message"
				});
			});
	}
});

export const resetPasswordAction = slice.actions;
const authResetPasswordReducer = { authResetPassword: slice.reducer };
addRootReducer(authResetPasswordReducer);
