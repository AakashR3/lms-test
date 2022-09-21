import React from "react";
import { Icon } from "@iconify/react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { useNavigate } from "react-router-dom";
import { navigateLink } from "~/config/api/links";
import { useLinkedInLoginMutation } from "~/services/auth";

const redirect_uri = `${window.location.origin}/linkedin`;

export function LinkedInLogin() {
	const navigate = useNavigate();
	const [code, setCode] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");
	const [doLinkedInLogin, option] = useLinkedInLoginMutation();
	const { linkedInLogin } = useLinkedIn({
		clientId: "86vbqap7bbg5ak",
		redirectUri: redirect_uri,
		state: "iget2OlinkidenState",
		onSuccess: code => {
			setCode(code);
			setErrorMessage("");

			// localStorage.setItem("loginType", "linkedin");
			// localStorage.setItem("user", JSON.stringify({}));
			// navigate(navigateLink.dashboard, { replace: true });
		},
		scope: "r_emailaddress r_liteprofile",
		onError: error => {
			setCode("");
			setErrorMessage(error.errorMessage);
		}
	});

	React.useEffect(() => {
		if (code) {
			doLinkedInLogin({ code }).then((res: any) => {
				if (!res.error) {
					console.log(res.data.Data);
					localStorage.setItem("isLogged", "true");
					localStorage.setItem("loginType", "LinkedinID");
					localStorage.setItem("user", JSON.stringify(res.data.Data));
					localStorage.setItem("tokenId", res.data.Data.TokenId);
					navigate(navigateLink.dashboard, { replace: true });
				}
			});
		}
	}, [code]);
	return (
		<button
			onClick={linkedInLogin}
			className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
		>
			<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
		</button>
	);
}
