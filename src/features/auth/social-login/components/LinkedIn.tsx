import React from "react";
import { Icon } from "@iconify/react";
import { useLinkedIn } from "react-linkedin-login-oauth2";

import { useLinkedInMutation } from "~/features/auth/social-login/store";

const redirectUri = `${window.location.origin}/linkedin`;

export const LinkedIn = React.memo(() => {
	const [linkedLogin, option] = useLinkedInMutation();
	const onSuccess = async (code: string) => {
		console.log(code);
		await linkedLogin({ code }).unwrap();
		console.log("navigation");
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
			onClick={linkedInLogin}
			className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
		>
			<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
		</button>
	);
});
