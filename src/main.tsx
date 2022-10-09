import React from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";

import "~/styles/app.css";

export class LmsApp {
	init() {
		try {
			console.log("App Initialization...");
			// configure redux store
			const ElementRef = document.getElementById("root") as HTMLElement;
			createRoot(ElementRef).render(this.render());
		} catch (error: any) {
			console.error("Failed to start App", error);
		}
	}

	render() {
		return (
			<>
				<span className="flex">test</span>
				<Toaster position="top-right" toastOptions={{ duration: 5000 }} />
			</>
		);
	}
}

const App = new LmsApp();
App.init();
