import { Navigate, Outlet, useLocation } from '@tanstack/react-location';

import { AppHeader } from '~/layouts/app/Header';
import { AppFooter } from '~/layouts/app/Footer';
import { TopNavigation } from '~/layouts/app/TopNavigation';

function AppLayout() {
	const location = useLocation();
	const isAuthPage = location?.current?.pathname?.includes('auth');
	const isAuthenticated = localStorage.getItem('isLogged');

	if (isAuthPage) return <Outlet />;

	if (isAuthenticated !== 'true') return <Navigate to="/auth" />;

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
