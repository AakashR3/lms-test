import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { IResolveParams, LoginSocialLinkedin, LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';

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
					client_id={'tesdfsdfds'}
					onLoginStart={onLoginStart}
					redirect_uri="/social-login/callback"
					scope="openid profile email"
					discoveryDocs="claims_supported"
					access_type="offline"
					onResolve={({ provider, data }: IResolveParams) => {
						console.log(provider);
						console.log(data);
					}}
					onReject={(err) => {
						console.log(err);
					}}
				>
					<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
						<Icon width={22} icon="flat-color-icons:google" />
					</button>
				</LoginSocialGoogle>
				<LoginSocialLinkedin
					client_id="client_id"
					client_secret="client_secret"
					redirect_uri="/social-login/callback"
					onLoginStart={onLoginStart}
					onResolve={({ provider, data }: IResolveParams) => {
						console.log(provider);
						console.log(data);
					}}
					onReject={(err) => {
						console.log(err);
					}}
				>
					<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
						<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
					</button>
				</LoginSocialLinkedin>
				<LoginSocialFacebook
					appId="32434123"
					fieldsProfile={
						'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
					}
					onLoginStart={onLoginStart}
					redirect_uri="/social-login/callback"
					onResolve={({ provider, data }: IResolveParams) => {
						console.log(provider);
						console.log(data);
					}}
					onReject={(err) => {
						console.log(err);
					}}
				>
					<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
						<Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />
					</button>
				</LoginSocialFacebook>
			</div>
		</section>
	);
}
