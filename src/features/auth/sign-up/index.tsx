import React, { Fragment } from "react";

import SocialLogin from "~/features/auth/social-login";
import { signUp } from "~/features/auth/sign-up/constants";
import { BackToLogin, SignUpForm } from "~/features/auth/sign-up/components";
import { useAppSelector } from "~/config/store";
import { VerifyOtp } from "~/features/auth/sign-up/components/VerifyOtp";

function SignUpPage() {
	const isVerified = useAppSelector((state: any) => state.authSignUp.isVerified);
	return (
		<Fragment>
			<section className="animate-opacity flex md:(mt-20 max-w-md mx-auto) lg:(justify-center) px-8 flex-col px-4 w-full h-full">
				<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">{signUp.title}</h1>
				<BackToLogin />
				<SignUpForm />
				<SocialLogin />
			</section>
			{isVerified && <VerifyOtp />}
		</Fragment>
	);
}

export default SignUpPage;
