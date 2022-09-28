import { login } from "./constants";
import SocialLogin from "~/features/auth/social-login";
import { LoginForm, SignUpPageLink, SsoPageLink } from "./components";

function LoginPage() {
	return (
		<div className="animate-opacity flex md:(mt-20 max-w-md mx-auto) lg:(justify-center) px-8 flex-col w-full h-full">
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">{login.title}</h1>
			<SsoPageLink />
			<LoginForm />
			<SocialLogin />
			<SignUpPageLink />
		</div>
	);
}

export default LoginPage;
