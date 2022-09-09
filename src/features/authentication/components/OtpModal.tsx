import { SubmitHandler, useForm } from 'react-hook-form';

interface OtpValues {
	value_1: string;
	value_2: string;
	value_3: string;
	value_4: string;
}

type TOtpModal = {
	handleVerify: (otp: string) => void;
};
export function OtpModal({ handleVerify }: TOtpModal) {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<OtpValues>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<OtpValues> = (data) => {
		console.log('login form data', data);
		const otp = `${data.value_1}${data.value_2}${data.value_3}${data.value_4}`;
		handleVerify(otp);
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
					<div className="flex space-x-3 my-5 items-center justify-center text-xs">
						<span className="text-[#00000099]">00:28</span>
						<span className="text-[#C7CFD761]">Resent OTP</span>
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
