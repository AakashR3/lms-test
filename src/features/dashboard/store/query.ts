import { api } from "~/config/api";
import { endPoints } from "~/config/api/endPoints";

export const dashboardApi = api.injectEndpoints({
	endpoints: builder => ({
		getCourseList: builder.mutation({
			query: () => ({
				url: endPoints.dashboard.courseList
			})
		}),
		trendingSubscriptionByCurrencyCode: builder.mutation({
			query: currencyCode => ({
				url: endPoints.dashboard.trendingSubscriptionByCode.replace(":currencyCode", currencyCode)
			})
		}),
		getCatalogList: builder.mutation({
			query: () => ({
				url: endPoints.dashboard.catalogList
			})
		})
	})
});

export const { useGetCourseListMutation, useTrendingSubscriptionByCurrencyCodeMutation, useGetCatalogListMutation } =
	dashboardApi;
