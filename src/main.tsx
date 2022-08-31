import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "@tanstack/react-location";

import { location, routes } from "~/router";
import AppLayout from "~/components/layout";
import { setup, strict } from "@twind/react";

export class LmsApp {
    init() {
        try {
            console.log('App Initialization...');
			this.setupTheme()
            const ElementRef = document.getElementById('root') as HTMLElement;
            ReactDOM.createRoot(ElementRef).render(this.render());
        } catch (error: any) {
            console.error('Failed to start App', error);
        }
    }
	setupTheme(){
		setup({
			theme: {},
			darkMode: 'class'
		})
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
