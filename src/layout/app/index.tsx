import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "~/components/spinner";

import { useUserMenuQuery, useUserPointsQuery } from "~/config/api";
import { Header, Sidebar } from "~/layout/app/components";

function AppLayout() {
	const menu = useUserMenuQuery();
	const points = useUserPointsQuery();
	if (menu.isLoading || points.isLoading) return <Spinner />;
	return (
		<Fragment>
			<Sidebar menus={menu?.data?.Data || []} />
			<section className="flex-1 flex flex-col" style={{ width: "calc(100% - var(--main-sidebar-width))" }}>
				<Header {...points?.data?.Data} />
				<main className="flex-1 overflow-auto">
					<Outlet />
				</main>
			</section>
		</Fragment>
	);
}

export default AppLayout;
