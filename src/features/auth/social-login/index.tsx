import { Icon } from "@iconify/react";
import React from "react";
import { Facebook, Google, LinkedIn } from "~/features/auth/social-login/components";

function SocialLogin() {
	return (
		<section className="flex-col mt-10 space-y-5">
			<div className="relative">
				<hr className="h-1 w-full" />
				<span className="text-sm font-semibold absolute -top-3 bg-[#fafafa] text-[#646464] pr-2">
					You can also continue with
				</span>
			</div>
			<div className="flex space-x-3">
				<Google />
				<LinkedIn />
				<Facebook />
			</div>
		</section>
	);
}

export default SocialLogin;
