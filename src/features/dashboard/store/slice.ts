import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";
import { dashboardApi } from "~/features/dashboard/store";
import { notify } from "~/helpers";
const {
	getCourseList,
	trendingSubscriptionByCurrencyCode,
	getCatalogList,
	getCourseListInProgress,
	getTranscriptList,
	getLeaderBoard
} = dashboardApi.endpoints;

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
		catalogList: [],
		courseListInProgress: [],
		transcriptList: [],
		leaderBoard: []
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
			.addMatcher(getCourseListInProgress.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.courseListInProgress = payload;
			})
			.addMatcher(getTranscriptList.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.transcriptList = payload;
			})
			.addMatcher(getLeaderBoard.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.leaderBoard = payload;
			})
			.addMatcher(rejectedMatches, (state, action: any) => {
				const data = action.payload;
				if (data) notify("dashboard_error_messages", data);
			});
	}
});

export const dashbarodAction = slice.actions;
const reducer = { dashboard: slice.reducer };
addRootReducer(reducer);
