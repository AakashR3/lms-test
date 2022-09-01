import { Route } from '@tanstack/react-location';
import {
	AuthLayout,
	LoginContainer,
	ResetPasswordContainer,
	SingUpContainer,
	SsoLoginContainer
} from '~/features/authentication';

const AuthenticationRoute: Route = {
	path: '/auth',
	element: <AuthLayout />,
	children: [
		{ path: '/', element: <LoginContainer /> },
		{ path: 'reset-password', element: <ResetPasswordContainer /> },
		{ path: 'sso-login', element: <SsoLoginContainer /> },
		{ path: 'sign-up', element: <SingUpContainer /> },
		{ element: `This would render as the fallback when URL were not matched` }
	]
};

export default AuthenticationRoute;
