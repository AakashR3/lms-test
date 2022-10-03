import { LinkedInCallback } from "react-linkedin-login-oauth2";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthLayout, AppLayout } from "~/layouts";
import ProtectedRoutes from "~/router/ProtectedRoute";

import { DashboardContainer } from "~/features/dashboard";
import { LoginPage, SignUpPage, SsoLoginPage, ForgotPasswordPage } from "~/features/auth";
import ResetPasswordContainer from "~/features/account/reset-password/container";
import CartPage from "~/features/cart";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<DashboardContainer />} />
						<Route path="cart" element={<CartPage />} />
						<Route path="*" element="page not found" />
					</Route>
				</Route>
				{/** Public Routes */}
				<Route path="auth" element={<AuthLayout />}>
					<Route index element={<Navigate to="/auth/login" />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="forgot-password" element={<ForgotPasswordPage />} />
					<Route path="sso-login" element={<SsoLoginPage />} />
					<Route path="*" element="page not found" />
				</Route>
				<Route path="linkedin" element={<LinkedInCallback />} />
				<Route path="account">
					<Route path="reset-password" element={<ResetPasswordContainer />} />
				</Route>

				<Route path="*" element="page not found" />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
