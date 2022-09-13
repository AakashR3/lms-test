import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '~/services/auth';

// create slice
const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports
export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

interface IAuthState {
	user?: null;
	token: string | null;
	isAuthenticated: boolean;
}

function createInitialState(): IAuthState {
	return {
		user: null,
		token: null,
		isAuthenticated: false
	};
}

function createReducers() {
	return {
		logout: () => createInitialState()
	};
}

function createExtraActions() {
	return {};
}
function createExtraReducers() {
	return {
		...login()
	};
	function login() {
		var { matchFulfilled, matchRejected, matchPending } = authApi.endpoints.doLogin;
		return {};
	}
}
