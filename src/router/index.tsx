import { ReactLocation, Route } from '@tanstack/react-location';
import AuthenticationRoute from '~/router/authentication';
import { DashboardContainer } from '~/features/dashboard';

export const routes: Route[] = [
	{ path: '/', element: <DashboardContainer /> },
	AuthenticationRoute,
	{ element: `This would render as the fallback when URL were not matched` }
];

export const location = new ReactLocation();
