import { sso } from "~/features/auth/sso-login/constants";
import { BackToLogin, DomainForm } from "~/features/auth/sso-login/components";

function SsoLoginPage() {
	return (
		<div className="animate-opacity flex md:(mt-20 max-w-md mx-auto) lg:(justify-center) flex-col px-8 w-full h-full">
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">{sso.title}</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">{sso.description}</p>
			<DomainForm />
			<BackToLogin />
		</div>
	);
}

export default SsoLoginPage;
