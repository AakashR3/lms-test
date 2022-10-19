import { api } from "~/config/api";
import { endPoints } from "~/config/api/endPoints";

export const dashboardApi = api.injectEndpoints({
	endpoints: builder => ({
		getCourseList: builder.query({
			query: () => ({
				url: endPoints.dashboard.courseList
			})
		}),
		trendingSubscriptionByCurrencyCode: builder.query({
			query: currencyCode => ({
				url: endPoints.dashboard.trendingSubscriptionByCode.replace(":currencyCode", currencyCode)
			})
		}),
		getCatalogList: builder.query({
			query: () => endPoints.dashboard.catalogList
		}),
		getCourseListInProgress: builder.query({
			query: userID => ({
				url: endPoints.dashboard.CourseListInProgress.replace(":userID", userID)
			})
		})
	})
});

export const {
	useGetCourseListQuery,
	useTrendingSubscriptionByCurrencyCodeQuery,
	useGetCatalogListQuery,
	useGetCourseListInProgressQuery
} = dashboardApi;
