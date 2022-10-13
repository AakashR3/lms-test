import { LinkedInCallback } from "react-linkedin-login-oauth2";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AppLayout, AuthLayout } from "~/layout";
import CartPage from "~/features/cart";
import ProtectedRoute from "~/router/ProtectedRoute";
import { DashboardContainer } from "~/features/dashboard";
import { LoginPage, SignUpPage, ForgotPasswordPage, SsoLoginPage, SsoLoginAuthorize } from "~/features/auth";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<DashboardContainer />} />
						<Route path="cart" element={<CartPage />} />
						<Route path="*" element="page not found" />
					</Route>
				</Route>
				<Route path="auth" element={<AuthLayout />}>
					<Route index element={<Navigate to="/auth/login" />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="forgot-password" element={<ForgotPasswordPage />} />
					<Route path="sso-login" element={<SsoLoginPage />} />
					<Route path="authorize" element={<SsoLoginAuthorize />} />
					<Route path="*" element="page not found" />
				</Route>
				<Route path="linkedin" element={<LinkedInCallback />} />
				<Route path="account">
					<Route path="reset-password" element={"<ResetPasswordContainer />"} />
				</Route>
				<Route path="*" element="page not found" />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
