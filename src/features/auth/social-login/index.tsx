import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Facebook, Google, LinkedIn } from "~/features/auth/social-login/components";

function SocialLogin() {
	return (
		<section className="flex-col mt-10 space-y-5">
			<div className="relative">
				<hr className="h-1 w-full" />
				<span className="text-sm absolute -top-3 bg-white pr-2">You can also continue with</span>
			</div>
			<div className="flex space-x-3">
				<GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>
					<Google />
				</GoogleOAuthProvider>
				<LinkedIn />
				<Facebook />
			</div>
		</section>
	);
}

export default SocialLogin;
