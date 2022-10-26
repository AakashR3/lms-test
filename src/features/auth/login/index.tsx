import { login } from "./constants";
import SocialLogin from "~/features/auth/social-login";
import { LoginForm, SignUpPageLink, SsoPageLink } from "./components";

function LoginPage() {
	return (
		<div className="flex w-full max-w-lg grow flex-col justify-center p-5 bg-white">
			<div className="text-center">
				<img className="mx-auto h-16 w-16 lg:hidden" src="/assets/images/logo.png" alt="logo" />
				<div className="mt-4">
					<h2 className="text-3xl font-semibold text-slate-600 dark:text-navy-100">{login.title}</h2>
					<SsoPageLink />
				</div>
			</div>
			<LoginForm />
			<SignUpPageLink />
			<SocialLogin />
		</div>
	);
}

export default LoginPage;
