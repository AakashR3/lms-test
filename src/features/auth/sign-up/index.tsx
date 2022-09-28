import React, { Fragment } from "react";

import { signUp } from "~/features/auth/sign-up/constants";
import { BackToLogin, SignUpForm } from "~/features/auth/sign-up/components";
import SocialLogin from "~/features/auth/social-login";

function SignUpPage() {
	return (
		<Fragment>
			<section className="animate-opacity flex md:(mt-15 max-w-lg mx-auto) px-8 flex-col px-4 w-full h-full">
				<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">{signUp.title}</h1>
				<BackToLogin />
				<SignUpForm />
				<SocialLogin />
			</section>
		</Fragment>
	);
}

export default SignUpPage;
