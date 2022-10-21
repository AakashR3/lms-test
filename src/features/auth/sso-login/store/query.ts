import { api } from "~/config/api";
import { endPoints } from "~/config/api/endPoints";

export const DomainApi = api.injectEndpoints({
	endpoints: builder => ({
		ssoRequest: builder.mutation({
			query: params => ({
				url: endPoints.auth.ssoRequest,
				params
			})
		}),
		tokenValidation: builder.mutation({
			query: body => ({
				url: endPoints.auth.TokenValidation,
				method: "POST",
				body
			})
		})
	})
});

export const { useSsoRequestMutation, useTokenValidationMutation } = DomainApi;
