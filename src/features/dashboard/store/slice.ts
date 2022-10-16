import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";
import { dashboardApi } from "~/features/dashboard/store";

const { categoryByUserId } = dashboardApi.endpoints;
const rejectedMatches = isAnyOf(categoryByUserId.matchRejected);

const slice = createSlice({
	name: "dashbarod",
	initialState: {
		userCategory: []
	},
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(categoryByUserId.matchFulfilled, (state, action: any) => {
			const payload: any = action.payload;
			state.userCategory = payload;
		});
	}
});

export const dashbarodAction = slice.actions;
const reducer = { dashboard: slice.reducer };
addRootReducer(reducer);
