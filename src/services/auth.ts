import { api } from '~/config/api';

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		doLogin: build.mutation({
			async queryFn(credentials, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: 'Users/UserAuthentication',
					method: 'POST',
					body: credentials
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		forgotPassword: build.mutation({
			async queryFn(params, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: 'Users/ForgotPassword',
					params
				});

				console.log(result);

				if (result.error?.status === 400) {
					// don't refetch on 404
					return { data: result.data };
				}

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		}),
		doSignUp: build.mutation({
			async queryFn(user, api, extraOptions, baseQuery) {
				const result = await baseQuery({
					url: 'Users/UserRegistration',
					method: 'POST',
					body: {
						...user,
						PreferredSoftwareID: 0,
						FavouriteSoftware: 0,
						EmailPref: 0
					}
				});

				if (result.error) {
					// but refetch on another error
					return { error: result.error };
				}

				return { data: result.data };
			}
		})
	})
});

export const { useDoLoginMutation, useDoSignUpMutation, useForgotPasswordMutation } = authApi;
