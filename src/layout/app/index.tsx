import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "~/layout/app/components";

function AppLayout() {
	return (
		<Fragment>
			<Sidebar />
			<section className="flex-1 flex flex-col">
				<Header />
				<main className="flex-1 overflow-auto">
					<Outlet />
				</main>
			</section>
		</Fragment>
	);
}

export default AppLayout;
