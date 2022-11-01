import { LinkedInCallback } from "react-linkedin-login-oauth2";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CartPage from "~/features/cart";
import { PageNotFound } from "~/components";
import { AppLayout, AuthLayout } from "~/layout";
import DashboardPage from "~/features/dashboard";
import { ResetPassword } from "~/features/account";
import ProtectedRoute from "~/router/ProtectedRoute";
import { LoginPage, SignUpPage, ForgotPasswordPage, SsoLoginPage, SsoLoginAuthorize, AppLogout } from "~/features/auth";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<DashboardPage />} />
						{/* <Route path="role" element={<RoleDashboard />} /> */}
						<Route path="learning" element={<PageNotFound isConstruction />} />
						<Route path="objectives" element={<PageNotFound isConstruction />} />
						<Route path="tech-tips" element={<PageNotFound isConstruction />} />
						<Route path="quick-start" element={<PageNotFound isConstruction />} />
						<Route path="reports" element={<PageNotFound isConstruction />} />
						<Route path="cart" element={<CartPage />} />
						<Route path="*" element={<PageNotFound />} />
					</Route>
					<Route path="auth">
						<Route path="logout" element={<AppLogout />} />
					</Route>
				</Route>
				<Route path="auth" element={<AuthLayout />}>
					<Route index element={<Navigate to="/auth/login" />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="forgot-password" element={<ForgotPasswordPage />} />
					<Route path="sso-login" element={<SsoLoginPage />} />
					<Route path="authorize" element={<SsoLoginAuthorize />} />
					<Route path="logout" element={<AppLogout />} />
				</Route>
				<Route path="linkedin" element={<LinkedInCallback />} />
				<Route path="account">
					<Route path="reset-password" element={<ResetPassword />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
