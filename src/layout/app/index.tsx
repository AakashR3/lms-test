import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<Fragment>
			<aside className="w-[54px] border-r bg-white">aside</aside>
			<main className="flex flex-col h-full">
				<header className="w-[54px] border-b flex-initial">header</header>
				<section className="flex-1">
					<Outlet />
				</section>
			</main>
		</Fragment>
	);
}

export default AppLayout;
