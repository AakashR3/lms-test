import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";
import { dashboardApi } from "~/features/dashboard/store";
import { notify } from "~/helpers";
const { getCourseList, trendingSubscriptionByCurrencyCode, getCatalogList } = dashboardApi.endpoints;
const rejectedMatches = isAnyOf(
	getCourseList.matchRejected,
	trendingSubscriptionByCurrencyCode.matchRejected,
	getCatalogList.matchRejected
);

const slice = createSlice({
	name: "dashbarod",
	initialState: {
		courseList: [],
		trendingSubscription: [],
		catalogList: []
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addMatcher(getCourseList.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.courseList = payload;
			})
			.addMatcher(trendingSubscriptionByCurrencyCode.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.trendingSubscription = payload;
			})
			.addMatcher(getCatalogList.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.catalogList = payload;
			})
			.addMatcher(rejectedMatches, (state, action: any) => {
				const { data } = action.payload;
				notify("dashboard_error-messages", data);
			});
	}
});

export const dashbarodAction = slice.actions;
const reducer = { dashboard: slice.reducer };
addRootReducer(reducer);
