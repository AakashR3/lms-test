import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-location';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IForgotPasswordFormInput {
	email: String;
}

function ForgotPasswordContainer() {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<IForgotPasswordFormInput>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<IForgotPasswordFormInput> = (data) => {
		console.log('login form data', data);
	};

	return (
		<div className="animate-opacity flex justify-center flex-col max-w-md mx-auto w-full h-full">
			<Link to="/auth" className="no-underline space-x-2 flex cursor-pointer text-[#00000099]">
				<Icon width={20} icon="mingcute:arrow-left-line" className="fill-current" />
				<span className="text-sm">Login</span>
			</Link>
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">Reset password</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">
				Enter your email and we'll send you instructions on how to reset your password.
			</p>

			<FloatingLabelInput
				register={register('email', {
					required: true,
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'invalid email address'
					}
				})}
			/>

			<button
				disabled={!isDirty || !isValid}
				onClick={handleSubmit(onSubmit)}
				className="disabled:(opacity-40 cursor-not-allowed) block w-full bg-[#1869B3] py-4 font-bold mt-4 rounded-md text-white mb-2"
			>
				Send Instructions
			</button>

			<p className="space-x-1 tracking-wide text-sm font-normal text-[#00000099] mt-7">
				<span>If you are still having trouble this</span>
				<span className="text-[#1869B3] underline cursor-pointer">article</span>
				<span>might help</span>
			</p>
		</div>
	);
}
export default ForgotPasswordContainer;
