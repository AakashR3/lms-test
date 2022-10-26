import { Fragment } from "react";

import SocialLogin from "~/features/auth/social-login";
import { signUp } from "~/features/auth/sign-up/constants";
import { BackToLogin, SignUpForm } from "~/features/auth/sign-up/components";
import { useAppSelector } from "~/config/store";
import { VerifyOtp } from "~/features/auth/sign-up/components/VerifyOtp";
import { SsoPageLink } from "../login/components";

function SignUpPage() {
	const isVerified = useAppSelector((state: any) => state.authSignUp.isVerified);
	return (
		<Fragment>
			<section className="flex w-full max-w-lg grow flex-col justify-center p-5 bg-white">
				<div className="text-center">
					<img className="mx-auto mb-5 lg:hidden" src="/assets/images/logo.png" alt="logo" />
					<div className="mt-4">
						<h2 className="text-3xl font-semibold text-slate-600 dark:text-navy-100">{signUp.title}</h2>
						<BackToLogin />
					</div>
				</div>
				<SocialLogin signup />
				<SignUpForm />
				<SsoPageLink />
			</section>
			{isVerified && <VerifyOtp />}
		</Fragment>
	);
}

export default SignUpPage;
