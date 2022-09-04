import { ReactLocation, Route } from '@tanstack/react-location';
import AuthenticationRoute from '~/router/authentication';

export const routes: Route[] = [
	{ path: '/', element: () => import('~/features/dashboard').then((Res) => <Res.DashboardContainer />) },
	AuthenticationRoute,
	{ element: `This would render as the fallback when URL were not matched` }
];

export const location = new ReactLocation();
