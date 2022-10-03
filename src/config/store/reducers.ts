import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { api } from "~/config/api";

const rootReducers = {
	[api.reducerPath]: api.reducer
};

const addedReducers = {};

export const addReducer = (newReducers: any) => {
	Object.assign(addedReducers, newReducers);
};

export function addRootReducer(reducers: any) {
	// this is ok now because we add reducers before configureStore is called
	// in the future if we want to add reducers during runtime
	// we'll have to solve this in a more dynamic way
	addReducer(reducers);
}

export const createRootReducer = () => {
	const appReducer = combineReducers({
		...rootReducers,
		...addedReducers
	});

	return (state: any, action: AnyAction) => {
		return appReducer(state, action);
	};
};
