import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from '@tanstack/react-location';
import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { SocialLogin } from '~/features/authentication/containers/SocialLogin';

export interface ILoginFormInput {
	email: String;
	password: String;
}

function LoginContainer() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<ILoginFormInput>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
		console.log('login form data', data);
		login(data);
		// navigate({ to: '/' });
	};

	return (
		<div className="animate-opacity flex justify-center px-8 flex-col max-w-md mx-auto w-full h-full">
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">Login</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">
				<span>Have Organization login? </span>
				<Link to="./sso-login" className="text-[#1869B3] underline">
					use single sign on
				</Link>
			</p>
			<div className="flex flex-col space-y-3">
				<FloatingLabelInput
					register={register('email', {
						required: true,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'invalid email address'
						}
					})}
				/>
				{errors.email?.type === 'required' && 'First name is required'}
				<FloatingLabelInput type="password" register={register('password', { required: true })} />
			</div>
			<div className="flex items-center justify-between mt-6">
				<div className="flex items-center select-none">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<label htmlFor="remember-me" className="text-[rgba(0,0,0,0.6)] cursor-pointer ml-2 block text-sm">
						Remember me
					</label>
				</div>

				<Link to="./forgot-password" className="text-sm text-[rgba(0,0,0,0.6)] no-underline">
					Forgot your password?
				</Link>
			</div>
			<button
				disabled={!isDirty || !isValid}
				onClick={handleSubmit(onSubmit)}
				className="disabled:(opacity-40 cursor-not-allowed) block w-full bg-[#1869B3] tracking-wide py-4 mt-6 rounded-md text-white font-bold mb-2"
			>
				Log in
			</button>

			<SocialLogin />

			<p className="mt-5 tracking-wide text-[#00000099] text-sm pt-1 mb-0 space-x-2">
				<span>Don't have an account?</span>
				<Link to="./sign-up" className="text-[#1869B3] underline">
					Signup
				</Link>
			</p>
		</div>
	);
}

export default LoginContainer;
