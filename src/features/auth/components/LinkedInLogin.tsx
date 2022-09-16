import { Icon } from "@iconify/react";

import { LinkedIn } from "react-linkedin-login-oauth2";

export function LinkedInLogin() {
	const onSuccess = (response: any) => {
		console.log(response);
	};
	return (
		<LinkedIn
			clientId="86esdx1uodhehl"
			redirectUri={`${window.location.origin}/linkedin`}
			scope="r_liteprofile r_emailaddress"
			onSuccess={onSuccess}
			onError={onSuccess}
		>
			{({ linkedInLogin }) => (
				<button
					onClick={linkedInLogin}
					className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
				>
					<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
				</button>
			)}
		</LinkedIn>
	);
}
