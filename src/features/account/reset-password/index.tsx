import { Header, ResetForm } from "~/features/account/reset-password/components";

function ResetPassword() {
	return (
		<section className="flex flex-col h-full w-full animate-opacity">
			<Header />
			<ResetForm />
		</section>
	);
}

export default ResetPassword;
