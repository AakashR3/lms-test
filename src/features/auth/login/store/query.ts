import { api } from "~/config/api";
import { encryptPassword } from "~/helpers";
import { endPoints } from "~/config/api/endPoints";
import { LoginRequest, UserResponse } from "~/features/auth/login/@types";

export const LoginApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<UserResponse, LoginRequest>({
			query: ({ Email, EncPassword }) => ({
				url: endPoints.auth.login,
				method: "POST",
				params: { LoginType: "basic" },
				body: {
					UserName: Email,
					EncPassword: encryptPassword(EncPassword)
				}
			})
		})
	})
});

export const { useLoginMutation } = LoginApi;
