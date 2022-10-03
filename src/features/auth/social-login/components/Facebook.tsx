import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "@greatsumini/react-facebook-login";

import { navigateLink } from "~/config/api/links";
import { useSocialLoginMutation } from "~/features/auth/social-login/store";

export const Facebook = React.memo(() => {
	const navigation = useNavigate();
	const [socialLogin, option] = useSocialLoginMutation();
	const onLoginSuccess = async (profile: any) => {
		const SocialType = "FacebookID";
		const user = {
			FirstName: profile.first_name,
			LastName: profile.last_name,
			Email: profile.email,
			SocialID: profile.id,
			SocialType
		};
		await socialLogin(user).unwrap();
		navigation(navigateLink.dashboard);
	};
	return (
		<FacebookLogin
			fields="email,first_name,last_name"
			appId={import.meta.env.VITE_FB_APP_ID}
			// onSuccess={response => {
			// 	console.log("Login Success!", response);
			// }}
			onFail={error => {
				console.log("Login Failed!", error);
			}}
			onProfileSuccess={onLoginSuccess}
			render={({ onClick }) => (
				<button
					disabled={option.isLoading}
					onClick={onClick}
					className="disabled:cursor-not-allowed inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
				>
					{option.isLoading && <Icon width={22} className="animate-spin" icon="bx:loader-alt" />}
					{!option.isLoading && <Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />}
				</button>
			)}
		/>
	);
});
