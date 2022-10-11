import React from "react";
import { Link } from "react-router-dom";
import { login } from "../constants";

export const SignUpPageLink = React.memo(() => (
	<p className="mt-5 tracking-wide text-sm pt-1 mb-0 space-x-1">
		<span>{login.createAccountText}</span>
		<Link
			to="/auth/signup"
			className="inline-block text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent underline"
		>
			{login.createAccountBtnLink}
		</Link>
	</p>
));

export const SsoPageLink = React.memo(() => (
	<Link
		to="/auth/sso-login"
		className="inline-block text-primary text-sm transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent underline mb-7 mt-1"
	>
		{login.ssoLinkText}
	</Link>
));

export const ForgotPasswordPageLink = React.memo(() => (
	<Link
		to="/auth/forgot-password"
		className="inline-block text-xs+ text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
	>
		{login.forgotPasswordText}
	</Link>
));
