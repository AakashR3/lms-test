import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useLinkedIn } from "react-linkedin-login-oauth2";

import { navigateLink } from "~/config/api/links";
import { useLinkedInMutation } from "~/features/auth/social-login/store";

const redirectUri = `${window.location.origin}/linkedin`;

export const LinkedIn = React.memo(() => {
	const navigate = useNavigate();
	const [linkedLogin, option] = useLinkedInMutation();
	const onSuccess = async (code: string) => {
		console.log(code);
		await linkedLogin({ code }).unwrap();
		navigate(navigateLink.dashboard);
	};
	const { linkedInLogin } = useLinkedIn({
		clientId: import.meta.env.VITE_L_CLIENT_ID,
		redirectUri,
		state: import.meta.env.VITE_L_STATE_KEY,
		onSuccess,
		scope: "r_emailaddress r_liteprofile",
		onError: error => {
			console.log("onError", error.errorMessage);
		}
	});

	return (
		<button
			disabled={option.isLoading}
			onClick={linkedInLogin}
			className="disabled:cursor-not-allowed inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
		>
			{option.isLoading && <Icon width={22} className="animate-spin" icon="bx:loader-alt" />}
			{!option.isLoading && <Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />}
		</button>
	);
});
