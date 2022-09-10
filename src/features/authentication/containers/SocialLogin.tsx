import { Icon } from '@iconify/react';
import { useNavigate } from '@tanstack/react-location';
import { useCallback, useState } from 'react';
import { LoginSocialLinkedin, LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';
import { toast } from 'react-hot-toast';

const REDIRECT_URI = '/auth/sl-callback';

export function SocialLogin({ isLoginPage }: { isLoginPage?: boolean }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<string | undefined>(undefined);

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
				<>
					{isLoading !== 'google' && (
						<LoginSocialGoogle
							client_id="444327535067-lb92ki3mag7ec0umidovej6jvbjluja2.apps.googleusercontent.com"
							onLoginStart={() => setIsLoading('google')}
							scope="openid profile email"
							onResolve={({ provider, data }: IResolveParams) => {
								setIsLoading(undefined);
								if (isLoginPage) {
									localStorage.setItem('isLogged', 'true');
									localStorage.setItem('user', data?.name);
									navigate({ to: '/' });
								} else {
									if (!data?.email) {
										toast.error('something went wrong unable to find email');
									}
									console.log({
										Email: data?.email || '',
										Password: '',
										FirstName: data?.family_name,
										LastName: data?.given_name,
										PreferredSoftwareID: 0,
										FavouriteSoftware: 0
									});
								}
							}}
							onReject={(err: any) => {
								console.log('hbhbdhd', err);
							}}
						>
							<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
								<Icon width={22} icon="flat-color-icons:google" />
							</button>
						</LoginSocialGoogle>
					)}
					{isLoading === 'google' && (
						<span className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
							<Icon width={22} icon="tabler:loader-2" className="animate-spin" />
						</span>
					)}
				</>
				<LoginSocialLinkedin
					client_id={import.meta.env.REACT_APP_LINKEDIN_APP_ID || ''}
					client_secret={import.meta.env.REACT_APP_LINKEDIN_APP_SECRET || ''}
					redirect_uri={REDIRECT_URI}
					onLoginStart={onLoginStart}
					isOnlyGetToken
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
