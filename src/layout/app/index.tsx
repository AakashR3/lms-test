import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "~/layout/app/components";

function AppLayout() {
	return (
		<Fragment>
			<Sidebar />
			<Header />
			<main className="mt-[60px] grid grid-cols-1 place-content-start transition-[width,margin-left,margin-right,padding-left,padding-right] duration-[.25s] ease-in print:m-0 md:ml-[var(--main-sidebar-width)] w-full px-[var(--margin-x)] pb-8">
				<Outlet />
			</main>
		</Fragment>
	);
}

export default AppLayout;
