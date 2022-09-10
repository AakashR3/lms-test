import { SubmitHandler, useForm } from 'react-hook-form';
import { useSendVerifyEmailMutation, useVerifyOtpMutation } from '~/services/auth';
import { toast } from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react';
import CountDownTimer from './CountDownTimer';

interface OtpValues {
	value_1: string;
	value_2: string;
	value_3: string;
	value_4: string;
}

type TOtpModal = {
	Email: String;
	handleVerify: (otp: string) => void;
};

export function OtpModal({ Email, handleVerify }: TOtpModal) {
	const [verifyOtp, options] = useVerifyOtpMutation();
	const [sendOtp] = useSendVerifyEmailMutation();
	const [timer, setTimer] = useState(10);
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<OtpValues>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<OtpValues> = (data) => {
		const Otp = `${data.value_1}${data.value_2}${data.value_3}${data.value_4}`;
		console.log('login form data', { Email, Otp });

		verifyOtp({ Email, Otp }).then((resp: any) => {
			if (resp.data.Status === 'F') {
				toast.error(resp.data.Message);
				return;
			}
			handleVerify(Otp);
			toast.success(resp.data.Message);
		});
	};

	const renderInput = (name: keyof OtpValues) => {
		return (
			<input
				key={name}
				id={name}
				type="tel"
				className="m-2 border h-12 w-12 text-center form-control rounded"
				{...register(name, {
					required: true
				})}
				maxLength={1}
			/>
		);
	};

	return (
		<div
			id="defaultModal"
			className="animate-opacity backdrop-filter backdrop-blur bg-white/30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
			aria-modal="true"
			role="dialog"
		>
			<div className="relative p-4 w-full max-w-sm h-full md:h-auto">
				<div className="relative bg-white rounded-lg shadow p-10">
					<h3 className="text-xl font-semibold text-gray-900 text-center">OTP Verification</h3>
					<div id="otp" className="flex flex-row justify-between mt-5">
						{['value_1', 'value_2', 'value_3', 'value_4'].map((val: any) => renderInput(val))}
					</div>
					<div className="flex items-center space-x-3 my-5 items-center justify-center text-xs">
						<CountDownTimer
							hours={0}
							minutes={0}
							seconds={timer}
							onTimeUp={() => {
								setTimer(0);
							}}
						/>
						<div
							className={`${
								timer === 0 ? 'cursor-pointer text-blue-500' : 'text-[#C7CFD761] pointer-events-none'
							}`}
							onClick={() => {
								sendOtp({ Email }).then((resp: any) => {
									if (resp.data) {
										setTimer(10);
										toast.success(resp.data.Message);
									}
								});
							}}
						>
							Resent OTP
						</div>
					</div>
					<button
						disabled={!isDirty || !isValid}
						onClick={handleSubmit(onSubmit)}
						className="disabled:(opacity-40 cursor-not-allowed) block w-full bg-[#1868B3] tracking-wide py-3 mt-6 rounded-md text-white mb-2"
					>
						Verify
					</button>
				</div>
			</div>
		</div>
	);
}
