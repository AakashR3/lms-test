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
	getLeaderBoard,
	getScorecard,
	getRecommendedCourseList,
	getPeersCourseList,
	getLearningPath,
	getUpcomingEventsTodayList,
	getUpcomingEventsWeekList,
	getUpcomingEventsMonthList,
	getTimeSpent,
	getTimeSpentGraph,
	getPopularRoles
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
		leaderBoard: [],
		scorecard: [],
		recommendedCourseList: [],
		peersCourseList: [],
		learningPath: [],
		upcomingEventsTodayList: [],
		upcomingEventsWeekList: [],
		upcomingEventsMonthList: [],
		timeSpent: [],
		timeSpentGraph: [],
		popularRoles: []
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addMatcher(getCourseList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.courseList = Data;
			})
			.addMatcher(trendingSubscriptionByCurrencyCode.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.trendingSubscription = Data;
			})
			.addMatcher(getCatalogList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.catalogList = Data;
			})
			.addMatcher(getCourseListInProgress.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.courseListInProgress = Data;
			})
			.addMatcher(getTranscriptList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.transcriptList = Data;
				console.log("transcriptList");
				console.log(state.transcriptList);
			})
			.addMatcher(getLeaderBoard.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.leaderBoard = Data;
				console.log("leaderBoard");
				console.log(state.leaderBoard);
			})
			.addMatcher(getScorecard.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.scorecard = Data;
				console.log("scorecard");
				console.log(state.scorecard);
			})
			.addMatcher(getRecommendedCourseList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.recommendedCourseList = Data;
				console.log("recommendedCourseList");
				console.log(state.recommendedCourseList);
			})
			.addMatcher(getPeersCourseList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.peersCourseList = Data;
				console.log("peersCourseList");
				console.log(state.peersCourseList);
			})
			.addMatcher(getLearningPath.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.learningPath = Data;
				console.log("learningPath");
				console.log(state.learningPath);
			})
			.addMatcher(getUpcomingEventsTodayList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.upcomingEventsTodayList = Data;
				console.log("upcomingEventsTodayList");
				console.log(state.upcomingEventsTodayList);
			})
			.addMatcher(getUpcomingEventsWeekList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.upcomingEventsWeekList = Data;
				console.log("upcomingEventsWeekList");
				console.log(state.upcomingEventsWeekList);
			})
			.addMatcher(getUpcomingEventsMonthList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.upcomingEventsMonthList = Data;
				console.log("upcomingEventsMonthList");
				console.log(state.upcomingEventsMonthList);
			})
			.addMatcher(getUpcomingEventsMonthList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.upcomingEventsMonthList = Data;
				console.log("upcomingEventsMonthList");
				console.log(state.upcomingEventsMonthList);
			})
			.addMatcher(getTimeSpent.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.timeSpent = Data;
				console.log("timeSpent");
				console.log(state.timeSpent);
			})
			.addMatcher(getTimeSpentGraph.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.timeSpentGraph = Data;
				console.log("timeSpentGraph");
				console.log(state.timeSpentGraph);
			})
			.addMatcher(getPopularRoles.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.popularRoles = Data;
				console.log("popularRoles");
				console.log(state.popularRoles);
			})
			.addMatcher(rejectedMatches, (state, action: any) => {
				const { Data } = action.payload;
				if (Data) notify("dashboard_error_messages", Data);
			});
	}
});

export const dashbarodAction = slice.actions;
const reducer = { dashboard: slice.reducer };
addRootReducer(reducer);
