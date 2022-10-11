import { login } from "./constants";
import SocialLogin from "~/features/auth/social-login";
import { LoginForm, SignUpPageLink, SsoPageLink } from "./components";

function LoginPage() {
	return (
		<div className="flex w-full max-w-md grow flex-col justify-center p-5 bg-white">
			<div className="text-center mb-8">
				<img className="mx-auto lg:hidden " src="/assets/images/logo.png" alt="logo" />
			</div>
			<h1 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">{login.title}</h1>
			<SsoPageLink />
			<LoginForm />
			<SocialLogin />
			<SignUpPageLink />
		</div>
	);
}

export default LoginPage;
