import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '@tanstack/react-location';

import AppLayout from '~/layouts/app';
import { routes, location } from '~/router';

import 'virtual:windi.css';
import 'virtual:windi-devtools';

export class LmsApp {
	init() {
		try {
			console.log('App Initialization...');
			const ElementRef = document.getElementById('root') as HTMLElement;
			ReactDOM.createRoot(ElementRef).render(this.render());
		} catch (error: any) {
			console.error('Failed to start App', error);
		}
	}

	render() {
		return (
			<React.StrictMode>
				<Router routes={routes} location={location}>
					<AppLayout />
				</Router>
			</React.StrictMode>
		);
	}
}

const App = new LmsApp();
App.init();
