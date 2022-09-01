import { Outlet, useLocation } from '@tanstack/react-location';

import { AppHeader } from '~/layouts/app/Header';
import { AppFooter } from '~/layouts/app/Footer';
import { TopNavigation } from '~/layouts/app/TopNavigation';

function AppLayout() {
	const location = useLocation();
	const isAuthPage = location?.current?.pathname?.includes('auth');
	if (isAuthPage) return <Outlet />;
	return (
		<section className="animate-opacity w-full h-full flex-col">
			<AppHeader />
			<main className="flex-1 flex flex-col h-full overflow-auto">
				<TopNavigation />
				<Outlet />
				<AppFooter />
			</main>
		</section>
	);
}

export default AppLayout;
