import { api } from "~/config/api";
import { endPoints } from "~/config/api/endPoints";

export const dashboardApi = api.injectEndpoints({
	endpoints: builder => ({
		categoryByUserId: builder.mutation({
			query: params => ({
				url: endPoints.dashboard.categoryByUserID.replace(":userId", params)
			})
		})
	})
});

export const { useCategoryByUserIdMutation } = dashboardApi;
