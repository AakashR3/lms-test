import React from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "~/components/spinner";
import { navigateLink } from "~/config/api/links";
import { getLoggedUser } from "~/helpers/auth";
import { useUserLogoutMutation } from "../login/store";

function AppLogout() {
	const navigate = useNavigate();
	const [logout] = useUserLogoutMutation();

	React.useEffect(() => {
		(async () => {
			const { SessionId } = getLoggedUser();
			await logout({ SessionId })
				.unwrap()
				.then(() => {
					localStorage.removeItem("sessionId");
					navigate(navigateLink.auth.login, { replace: true });
				})
				.catch(() => navigate(-1));
		})();
	}, []);

	return (
		<section className="h-screen w-full flex items-center justify-center">
			<Spinner />
		</section>
	);
}

export default AppLogout;
