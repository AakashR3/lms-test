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
	getUpcomingEventsList
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
		upcomingEventsList: []
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addMatcher(getCourseList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.courseList = Data;
			})
			.addMatcher(trendingSubscriptionByCurrencyCode.matchFulfilled, (state, action: any) => {
				const { Data }: any = action.payload;
				state.trendingSubscription = Data;
			})
			.addMatcher(getCatalogList.matchFulfilled, (state, action: any) => {
				const { Data }: any = action.payload;
				state.catalogList = Data;
			})
			.addMatcher(getCourseListInProgress.matchFulfilled, (state, action: any) => {
				const { Data }: any = action.payload;
				state.courseListInProgress = Data;
			})
			.addMatcher(getTranscriptList.matchFulfilled, (state, action: any) => {
				const { Data }: any = action.payload;
				state.transcriptList = Data;
			})
			.addMatcher(getLeaderBoard.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.leaderBoard = payload;
			})
			.addMatcher(getUpcomingEventsList.matchFulfilled, (state, action: any) => {
				const payload: any = action.payload;
				state.upcomingEventsList = payload;
				console.log("upcomingEventsList");
				console.log(state.upcomingEventsList);
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
