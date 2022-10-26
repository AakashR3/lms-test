import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { forgotPassword } from "~/features/auth/forgot-password/constants";

export const BackToLogin = React.memo(() => (
	<Link to="/auth" className="no-underline space-x-2 absolute top-20 text-left flex cursor-pointer text-[#00000099]">
		<Icon width={20} icon="mingcute:arrow-left-line" className="fill-current" />
		<span>{forgotPassword.loginText}</span>
	</Link>
));
