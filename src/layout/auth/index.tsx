import { Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { navigateLink } from "~/config/api/links";
import { Slider } from "./components/Slider";

function AuthLayout() {
	const navigate = useNavigate();
	useEffect(() => {
		const sId = localStorage.getItem("sessionId");
		if (sId !== "null" && !!sId) navigate(navigateLink.dashboard, { replace: true });
		//eslint-disable-next-line
	}, []);
	return (
		<Fragment>
			<Slider />
			<main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-5xl">
				<Outlet />
				<div className="my-5 flex justify-center text-xs text-slate-400 dark:text-navy-300">
					<a href="https://myigetit.com/about" target="_blank" rel="noreferrer">
						About
					</a>
					<div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
					<a href="https://myigetit.com/privacy" target="_blank" rel="noreferrer">
						Privacy Notice
					</a>
					<div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
					<a href="https://myigetit.com/terms" target="_blank" rel="noreferrer">
						Term of service
					</a>
				</div>
			</main>
		</Fragment>
	);
}

export default AuthLayout;
