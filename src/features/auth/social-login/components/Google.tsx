import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import { navigateLink } from "~/config/api/links";
import { useSocialLoginMutation } from "~/features/auth/social-login/store";

export const Google = React.memo(() => {
	const navigation = useNavigate();
	const [socialLogin, option] = useSocialLoginMutation();

	const login = useGoogleLogin({
		onSuccess: async tokenResponse => {
			const resp = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
				headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
			});
			const profile = await resp.json();
			const user = {
				FirstName: profile.given_name,
				LastName: profile.family_name,
				Email: profile.email,
				SocialID: profile.sub,
				SocialType: "GoogleId"
			};
			await socialLogin(user).unwrap();
			navigation(navigateLink.dashboard, { replace: true });
		}
	});
	return (
		<button
			disabled={option.isLoading}
			onClick={() => login()}
			className="btn p-0 w-12 h-12 rounded-md items-center justify-center border bg-white border-slate-300"
		>
			{option.isLoading && <Icon width={22} className="animate-spin" icon="bx:loader-alt" />}
			{!option.isLoading && <Icon width={22} icon="flat-color-icons:google" />}
		</button>
	);
});
