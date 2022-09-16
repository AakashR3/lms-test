import { Outlet } from "react-router-dom";
import { Slider } from "./../components/Slider";
import { useEffect } from "react";

function AuthLayout() {
	useEffect(() => {
		localStorage.clear();
	}, []);
	return (
		<section className="h-full w-full flex">
			<Slider />
			<main className="animate-opacity w-1/2 sm:(w-full) md:flex flex-col overflow-auto h-full py-5">
				<div className="flex-1 h-full">
					<Outlet />
				</div>
				<footer className="flex items-center justify-center space-x-3 text-sm text-gray-400">
					<a href="https://myigetit.com/about" className="hover:(text-blue-400)">
						About
					</a>
					<a href="https://myigetit.com/privacy" className="hover:(text-blue-400)">
						Privacy
					</a>
					<a href="https://myigetit.com/terms" className="hover:(text-blue-400)">
						Terms
					</a>
				</footer>
			</main>
		</section>
	);
}

export default AuthLayout;
