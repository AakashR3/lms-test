import { ReactLocation, Route } from '@tanstack/react-location';

import DashboardPageContainer from '~/features/dashboard';
import AuthPageLayout from '~/features/auth/layout';
import { LoginPage } from '~/features/auth/Login';
import { ResetPasswordPage } from '~/features/auth/ResetPassword';
import { SsoLoginPage } from "~/features/auth/SsoLogin";
import { SingupPage } from "~/features/auth/Singup";

export const routes: Route[] = [
	{ path: '/', element: <DashboardPageContainer /> },
	{
		path: '/auth',
		element: <AuthPageLayout />,
		children: [
			{ path: '/', element: <LoginPage /> },
			{ path: 'reset-password', element: <ResetPasswordPage /> },
			{ path: 'sso-login', element: <SsoLoginPage /> },
			{ path: 'sign-up', element: <SingupPage /> },
			{ element: `This would render as the fallback when URL were not matched` }
		]
	},
	{ element: `This would render as the fallback when URL were not matched` }
];

export const location = new ReactLocation();
