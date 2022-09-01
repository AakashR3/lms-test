import { Link, useNavigate } from '@tanstack/react-location';
import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { SocialLogin } from '~/features/authentication/containers/SocialLogin';

function LoginContainer() {
	const navigate = useNavigate();
	return (
		<div className="animate-opacity">
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2">Login</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">
				<span>Have Organization login? </span>
				<Link to="./sso-login" className="text-[#1869B3] underline">
					use single sign on
				</Link>
			</p>
			<div className="flex flex-col space-y-3">
				<FloatingLabelInput name="username" label="Email" />
				<FloatingLabelInput name="password" type="password" label="Password" />
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

				<Link to="./reset-password" className="text-sm text-[rgba(0,0,0,0.6)] no-underline">
					Forgot your password?
				</Link>
			</div>
			<button
				onClick={() => navigate({ to: '/' })}
				className="block w-full bg-[#1869B3] tracking-wide py-4 mt-6 rounded-md text-white font-bold mb-2"
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
