import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { LoginSocialLinkedin, LoginSocialGoogle } from 'reactjs-social-login';

const REDIRECT_URI = '/login/callback';

export function SocialLogin() {
	const onLoginStart = useCallback(() => {
		console.log('login start');
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
				<LoginSocialGoogle
					client_id="1024616921919.apps.googleusercontent.com"
					onLoginStart={onLoginStart}
					onResolve={({ provider, data }: any) => {
						console.log(data, 'data');
						console.log(provider, 'provider');
					}}
					onReject={(err: any) => {
						console.log('hbhbdhd', err);
					}}
				>
					<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
						<Icon width={22} icon="flat-color-icons:google" />
					</button>
				</LoginSocialGoogle>
				<LoginSocialLinkedin
					client_id={import.meta.env.REACT_APP_LINKEDIN_APP_ID || ''}
					client_secret={import.meta.env.REACT_APP_LINKEDIN_APP_SECRET || ''}
					redirect_uri={REDIRECT_URI}
					onLoginStart={onLoginStart}
					onResolve={({ provider, data }) => {
						console.log(data, 'data');
						console.log(provider, 'provider');
					}}
					onReject={(err: any) => {
						console.log(err);
					}}
				>
					<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
						<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
					</button>
				</LoginSocialLinkedin>

				<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />
				</button>
			</div>
		</section>
	);
}
