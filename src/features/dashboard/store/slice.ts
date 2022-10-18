import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";
import { dashboardApi } from "~/features/dashboard/store";

const { getCourseList, trendingSubscriptionByCurrencyCode, getCatalogList } = dashboardApi.endpoints;
const rejectedMatches = isAnyOf(getCourseList.matchRejected);

const slice = createSlice({
	name: "dashbarod",
	initialState: {
		courseList: [],
		trendingSubscription: [],
		catalogList: []
	},
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(getCourseList.matchFulfilled, (state, action: any) => {
			const payload: any = action.payload;
			state.courseList = payload;
		});
		builder.addMatcher(trendingSubscriptionByCurrencyCode.matchFulfilled, (state, action: any) => {
			const payload: any = action.payload;
			state.trendingSubscription = payload;
		});
		builder.addMatcher(getCatalogList.matchFulfilled, (state, action: any) => {
			const payload: any = action.payload;
			state.catalogList = payload;
		});
	}
});

export const dashbarodAction = slice.actions;
const reducer = { dashboard: slice.reducer };
addRootReducer(reducer);
