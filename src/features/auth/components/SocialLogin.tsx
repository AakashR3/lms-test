import { Icon } from "@iconify/react";
import { useCallback } from "react";
import { LoginSocialLinkedin } from "reactjs-social-login";
import { GoogleLogin } from "./GoogleLogin";
import { LinkedInLogin } from "./LinkedInLogin";

const REDIRECT_URI = "/auth/sl-callback";

export function SocialLogin({ isLoginPage }: { isLoginPage?: boolean }) {
	const onLoginStart = useCallback(() => {
		console.log("login start");
	}, []);

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

				{/* <LoginSocialFacebook
					appId={'431451242017946'}
					onLoginStart={onLoginStart}
					onResolve={({ provider, data }: any) => {
						console.log(data, 'data');
						console.log(provider, 'provider');
					}}
					onReject={(err: any) => {
						console.log(err);
					}}
				> */}
				<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />
				</button>
				{/* </LoginSocialFacebook> */}
			</div>
		</section>
	);
}
