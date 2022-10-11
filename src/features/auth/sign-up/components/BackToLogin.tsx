import React from "react";
import { Link } from "react-router-dom";

import { navigateLink } from "~/config/api/links";
import { signUp } from "~/features/auth/sign-up/constants";

export const BackToLogin = React.memo(() => (
	<div className="tracking-wide text-sm font-normal text-[rgba(0,0,0,0.6)] mb-7">
		<span>{signUp.loginText} </span>
		<Link to={navigateLink.auth.login} className="text-[#1869B3] underline">
			{signUp.loginLinkText}
		</Link>
	</div>
));
