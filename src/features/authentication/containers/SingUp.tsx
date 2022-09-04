import React, { useCallback, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-location';
import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { SocialLogin } from '~/features/authentication/containers/SocialLogin';
import { OtpModal } from '~/features/authentication/components/OtpModal';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ISingUpFormInput {
	firstName: String;
	lastName: String;
	email: String;
	password: String;
	agree: Boolean;
	optVerified: Boolean;
}

function SingUpContainer() {
	const [isVerified, setIsVerified] = React.useState<boolean>(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isDirty, isValid }
	} = useForm<ISingUpFormInput>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<ISingUpFormInput> = (data) => {
		console.log('login form data', data);
	};

	const handleOtp = useCallback((otp: string) => {
		console.log('login start', otp);
		if (otp) setValue('optVerified', true, { shouldValidate: true });
		setIsVerified(false);
	}, []);

	useEffect(() => {
		register('optVerified', { required: true });
	}, []);

	return (
		<>
			<section className="animate-opacity flex justify-center flex-col max-w-md mx-auto px-4 w-full h-full">
				<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">Sign Up</h1>
				<p className="tracking-wide text-sm font-normal text-[rgba(0,0,0,0.6)] mb-7">
					<span>Already a user? </span>
					<Link to="/auth" className="text-[#1869B3] underline">
						Login
					</Link>
				</p>
				<div className="flex flex-col space-y-5">
					<div className="flex space-x-5">
						<FloatingLabelInput
							register={register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })}
						/>
						<FloatingLabelInput
							register={register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
						/>
					</div>
					<FloatingLabelInput
						register={register('email', {
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address'
							}
						})}
						handleVerify={() => setIsVerified(true)}
					/>
					<FloatingLabelInput type="password" register={register('password', { required: true })} />
				</div>
				<div className="flex select-none mt-7 text-[#0000008A]">
					<input
						id="agree"
						type="checkbox"
						{...register('agree', { required: true })}
						className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<label htmlFor="agree" className="relative -top-[2px] cursor-pointer ml-1.5 block text-sm">
						Send me Marketing Emails about Tata Technologies Products and Services
					</label>
				</div>
				<button
					disabled={!isDirty || !isValid}
					onClick={handleSubmit(onSubmit)}
					className="disabled:(opacity-40 cursor-not-allowed) block w-full bg-[#1869B3] tracking-wide py-4 mt-6 rounded-md text-white font-bold mb-2"
				>
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
			{isVerified && <OtpModal handleVerify={handleOtp} />}
		</>
	);
}

export default SingUpContainer;
