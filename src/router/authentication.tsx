import { Route } from '@tanstack/react-location';

const AuthenticationRoute: Route = {
	path: '/auth',
	element: () => import('~/features/authentication').then((Res) => <Res.AuthLayout />),
	children: [
		{ path: '/', element: () => import('~/features/authentication').then((Res) => <Res.LoginContainer />) },
		{
			path: 'forgot-password',
			element: () => import('~/features/authentication').then((Res) => <Res.ForgotPasswordContainer />)
		},
		{
			path: 'sso-login',
			element: () => import('~/features/authentication').then((Res) => <Res.SsoLoginContainer />)
		},
		{ path: 'sign-up', element: () => import('~/features/authentication').then((Res) => <Res.SingUpContainer />) },
		{ element: `This would render as the fallback when URL were not matched` }
	]
};

export default AuthenticationRoute;
