import { api } from "~/config/api";
import { endPoints } from "~/config/api/endPoints";

export const authApi = api.injectEndpoints({
	endpoints: build => ({
		doLogin: build.mutation({
			async queryFn({ body, params }, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.auth.login,
					method: "POST",
					body,
					params
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		sendVerifyEmail: build.mutation({
			async queryFn(params, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.auth.sendOtp,
					method: "POST",
					params,
					body: {}
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		verifyOtp: build.mutation({
			async queryFn(body, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.auth.verifyOtp,
					method: "POST",
					body
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		doSignUp: build.mutation({
			async queryFn(body, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.account.create,
					method: "POST",
					body
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		doSocialSignUp: build.mutation({
			async queryFn(body, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.auth.socialLogin,
					method: "POST",
					body
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		resetPassword: build.mutation({
			async queryFn(body, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.account.resetPassword,
					method: "POST",
					body
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		ssoRequest: build.mutation({
			async queryFn(params, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.auth.ssoRequest,
					params
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		VerifyEmailLink: build.mutation({
			async queryFn(params, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: endPoints.auth.VerifyEmailLink,
					params
				});
				if (result.error) {
					return { error: result.error };
				}
				return { data: result.data };
			}
		})
	})
});

export const {
	useDoLoginMutation,
	useDoSignUpMutation,
	useSendVerifyEmailMutation,
	useVerifyOtpMutation,
	useResetPasswordMutation,
	useSsoRequestMutation,
	useDoSocialSignUpMutation,
	useVerifyEmailLinkMutation
} = authApi;
