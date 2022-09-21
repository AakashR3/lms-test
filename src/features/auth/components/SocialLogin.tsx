import { LinkedInLogin } from "./LinkedInLogin";
import { GoogleLogin } from "~/features/auth/components/GoogleLogin";
import { FBLogin } from "./FBLogin";

export function SocialLogin({ isLoginPage }: { isLoginPage?: boolean }) {
	return (
		<section className="flex-col mt-10 space-y-5">
			<div className="relative">
				<hr className="h-1 w-full" />
				<span className="text-sm font-semibold absolute -top-3 bg-[#fafafa] text-[#646464] pr-2">
					You can also continue with
				</span>
			</div>
			<div className="flex space-x-3">
				<GoogleLogin />
				<LinkedInLogin />
				<FBLogin />
			</div>
		</section>
	);
}
