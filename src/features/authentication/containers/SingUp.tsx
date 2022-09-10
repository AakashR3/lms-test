import React, { useCallback, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from '@tanstack/react-location';
import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { SocialLogin } from '~/features/authentication/containers/SocialLogin';
import { OtpModal } from '~/features/authentication/components/OtpModal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDoSignUpMutation, useSendVerifyEmailMutation } from '~/services/auth';
import { toast } from 'react-hot-toast';

interface ISingUpFormInput {
	FirstName: String;
	LastName: String;
	Email: String;
	Password: String;
	MarketingEmail: Boolean;
	optVerified?: Boolean;
}

function SingUpContainer() {
	const [isVerified, setIsVerified] = React.useState<boolean>(false);
	const [doLogin, option] = useDoSignUpMutation();
	const [verifyEmail, verifyEmailOption] = useSendVerifyEmailMutation();

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors, isDirty, isValid }
	} = useForm<ISingUpFormInput>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<ISingUpFormInput> = async (user) => {
		delete user.optVerified;
		const MarketingEmail = user.MarketingEmail ? 'Yes' : 'No';
		const resp: any = await doLogin({ ...user, MarketingEmail });
		if (!resp.error) navigate({ to: '/auth' });
	};

	const handleOtp = useCallback((otp: string) => {
		console.log('login start', otp);
		if (otp) setValue('optVerified', true, { shouldValidate: true });
		setIsVerified(false);
	}, []);

	useEffect(() => {
		register('optVerified', { required: true });
	}, []);

	const handleVerifyEmail = () => {
		const { Email } = getValues();
		if (!Email) {
			toast.error('Invalid Email Address');
			return;
		}
		verifyEmail({ Email }).then((resp: any) => {
			console.log(resp);
			if (resp.data) {
				setIsVerified(true);
				toast.success(resp.data.Message);
			}
		});
	};
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
						<div>
							<FloatingLabelInput
								register={register('FirstName', {
									required: 'First Name is Required',
									pattern: /^[A-Za-z]+$/i
								})}
							/>
							{errors.FirstName && (
								<span className="text-red-500 text-xs ml-2">{errors.FirstName?.message}</span>
							)}
						</div>
						<div>
							<FloatingLabelInput
								register={register('LastName', {
									required: 'Last Name is Required',
									pattern: /^[A-Za-z]+$/i
								})}
							/>
							{errors.LastName && (
								<span className="text-red-500 text-xs ml-2">{errors.LastName?.message}</span>
							)}
						</div>
					</div>
					<div className="relative">
						<FloatingLabelInput
							register={register('Email', {
								required: 'Email Address is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'invalid email address'
								}
							})}
							handleVerify={() => {
								handleVerifyEmail();
							}}
						/>
						{verifyEmailOption.isLoading && (
							<span className="bg-white inline-flex w-24 h-10 items-center justify-end absolute top-1 right-3">
								<Icon width={22} icon="tabler:loader-2" color="#666" className="animate-spin" />
							</span>
						)}

						{getValues('optVerified') && (
							<span className="bg-white inline-flex w-24 h-10 items-center justify-end absolute top-1 right-3">
								<Icon width={24} icon="mdi:email-check-outline" className="text-green-500" />
							</span>
						)}

						{errors.Email && <span className="text-red-500 text-xs ml-2">{errors.Email?.message}</span>}
					</div>
					<div>
						<FloatingLabelInput
							type="password"
							register={register('Password', {
								required: 'Passeord is required',
								pattern: {
									value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
									message: 'Use 8 or more characters with a mix of letters, numbers & symbols'
								}
							})}
						/>
						{errors.Password && (
							<span className="text-red-500 text-xs pl-2">{errors.Password?.message}</span>
						)}
					</div>
				</div>
				<div className="flex select-none mt-7 text-[#0000008A]">
					<input
						id="marketing"
						type="checkbox"
						{...register('MarketingEmail')}
						className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<label htmlFor="marketing" className="relative -top-[2px] cursor-pointer ml-1.5 block text-sm">
						Send me Marketing Emails about Tata Technologies Products and Services
					</label>
				</div>
				<button
					disabled={!isDirty || !isValid || option.isLoading}
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
			{isVerified && <OtpModal Email={getValues('Email')} handleVerify={handleOtp} />}
		</>
	);
}

export default SingUpContainer;
