import { Navigate, Outlet } from "react-router-dom";
import { navigateLink } from "~/config/api/links";

const useAuth = () => {
	const isLoggedIn = localStorage.getItem("sessionId");
	const user = localStorage.getItem("user");
	return {
		isLoggedIn: isLoggedIn !== "null" || !!isLoggedIn,
		auth: !!isLoggedIn,
		role: user ? JSON.parse(user) : null
	};
};

const ProtectedRoute = () => {
	const { isLoggedIn } = useAuth();
	return isLoggedIn ? <Outlet /> : <Navigate to={navigateLink.auth.login} />;
};

export default ProtectedRoute;
