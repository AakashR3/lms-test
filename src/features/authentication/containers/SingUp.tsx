import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-location';
import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { SocialLogin } from '~/features/authentication/containers/SocialLogin';
import { OtpModal } from '~/features/authentication/components/OtpModal';

function SingUpContainer() {
	const [isVerified, setIsVerified] = React.useState<boolean>(false);
	return (
		<>
			<section className="flex flex-col animate-opacity">
				<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">Sign Up</h1>
				<p className="tracking-wide text-sm font-normal text-[rgba(0,0,0,0.6)] mb-7">
					<span>Already a user? </span>
					<Link to="/auth" className="text-[#1869B3] underline">
						Login
					</Link>
				</p>
				<div className="flex flex-col space-y-5">
					<div className="flex space-x-5">
						<FloatingLabelInput name="firstName" label="First Name" />
						<FloatingLabelInput name="lastName" label="Last Name" />
					</div>
					<FloatingLabelInput name="email" label="Email" handleVerify={() => setIsVerified(true)} />
					<FloatingLabelInput name="password" type="password" label="Password" />
				</div>
				<div className="flex select-none mt-7 text-[#0000008A]">
					<input
						id="agree"
						name="agree"
						type="checkbox"
						className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<label htmlFor="agree" className="relative -top-[2px] cursor-pointer ml-1.5 block text-sm">
						Send me Marketing Emails about Tata Technologies Products and Services
					</label>
				</div>
				<button className="block w-full bg-[#1869B3] tracking-wide py-4 mt-6 rounded-md text-white font-bold mb-2">
					Create account
				</button>

				<div className="flex select-none mt-4 text-[#0000008A]">
					<Icon icon="mingcute:information-line" width={25} className="fill-current" />
					<label htmlFor="agree" className="relative top-0.5 cursor-pointer ml-1.5 block text-sm">
						Send me Marketing Emails about Tata Technologies Products and Services
					</label>
				</div>
				<SocialLogin />
			</section>
			{isVerified && <OtpModal handleVerify={() => setIsVerified(false)} />}
		</>
	);
}

export default SingUpContainer;
