import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { Router } from '@tanstack/react-location';
import { configureStore } from '@reduxjs/toolkit';
import { Toaster } from 'react-hot-toast';

import { api } from './config/api';
import AppLayout from '~/layouts/app';
import { routes, location } from '~/router';
import { setStore, store, StoreState } from '~/config/store';
import { createRootReducer } from '~/config/store/reducers';

import 'virtual:windi.css';
import 'keen-slider/keen-slider.min.css';

export class LmsApp {
	init() {
		try {
			console.log('App Initialization...');
			// configure redux store
			this.configureStore();

			const ElementRef = document.getElementById('root') as HTMLElement;
			ReactDOM.createRoot(ElementRef).render(this.render());
		} catch (error: any) {
			console.error('Failed to start App', error);
		}
	}
	configureStore(initialState?: Partial<StoreState>) {
		const store = configureStore({
			reducer: createRootReducer(),
			devTools: import.meta.env.DEV,
			preloadedState: {
				...initialState
			},
			middleware: (getDefaultMiddleware) =>
				getDefaultMiddleware({
					thunk: true,
					serializableCheck: false,
					immutableCheck: false
				}).concat(api.middleware)
		});
		setStore(store);
		return store;
	}
	render() {
		return (
			<React.StrictMode>
				<Provider store={store}>
					<Router routes={routes} location={location}>
						<AppLayout />
					</Router>
					<Toaster position="top-right" toastOptions={{ duration: 15000 }} />
				</Provider>
			</React.StrictMode>
		);
	}
}

const App = new LmsApp();
App.init();
