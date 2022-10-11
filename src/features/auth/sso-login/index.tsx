import { sso } from "~/features/auth/sso-login/constants";
import { BackToLogin, DomainForm } from "~/features/auth/sso-login/components";

function SsoLoginPage() {
	return (
		<div className="flex w-full max-w-md grow flex-col justify-center p-5 bg-white">
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">{sso.title}</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">{sso.description}</p>
			<DomainForm />
			<BackToLogin />
		</div>
	);
}

export default SsoLoginPage;
