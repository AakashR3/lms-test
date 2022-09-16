import { Icon } from "@iconify/react";

import { useLinkedIn } from "react-linkedin-login-oauth2";
import { useNavigate } from "react-router-dom";
import { navigateLink } from "~/config/api/links";

export function LinkedInLogin() {
	const navigate = useNavigate();
	const { linkedInLogin } = useLinkedIn({
		clientId: import.meta.env.VITE_L_CLIENT_ID,
		redirectUri: `${window.location.origin}/linkedin`,
		onSuccess: code => {
			console.log(code);
			localStorage.setItem("loginType", "linkedin");
			localStorage.setItem("user", JSON.stringify({}));
			navigate(navigateLink.dashboard, { replace: true });
		},
		scope: "r_emailaddress",
		onError: error => {
			console.log(error);
		}
	});
	return (
		<button
			onClick={linkedInLogin}
			className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
		>
			<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
		</button>
	);
}
