import { Box, FlexBox } from '~/components/UI';
import { Outlet, useLocation } from '@tanstack/react-location';
import { AppHeader } from '~/components/layout/Header';
import { AppFooter } from '~/components/layout/Footer';
import { TopNavigation } from '~/components/layout/TopNavigation';

function AppLayout() {
	const location = useLocation();
	const isAuthPage = location?.current?.pathname?.includes('auth');
	if (isAuthPage) return <Outlet />;
	return (
		<FlexBox tw="w-full h-full flex-col" className="animate-opacity">
			<AppHeader />
			<Box as="main" tw="flex-1 flex flex-col h-full overflow-auto">
				<TopNavigation />
				<Outlet />
				<AppFooter />
			</Box>
		</FlexBox>
	);
}

export default AppLayout;
