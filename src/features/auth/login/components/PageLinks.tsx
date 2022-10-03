import React from "react";
import { Link } from "react-router-dom";
import { login } from "../constants";

export const SignUpPageLink = React.memo(() => (
	<p className="mt-5 tracking-wide text-[#00000099] text-sm pt-1 mb-0 space-x-2">
		<span>{login.createAccountText}</span>
		<Link to="/auth/signup" className="text-[#1869B3] underline">
			{login.createAccountBtnLink}
		</Link>
	</p>
));

export const SsoPageLink = React.memo(() => (
	<Link to="/auth/sso-login" className="text-[#1869B3] underline tracking-wide text-sm font-normal mb-7">
		{login.ssoLinkText}
	</Link>
));

export const ForgotPasswordPageLink = React.memo(() => (
	<Link to="/auth/forgot-password" className="text-sm text-[rgba(0,0,0,0.6)] no-underline">
		{login.forgotPasswordText}
	</Link>
));
