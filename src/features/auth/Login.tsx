import { Box, FlexBox } from '~/components/UI';
import { FloatingLabelInput } from '~/components/UI/FloatingLabelInput';
import { SocialLogin } from '~/features/auth/components';
import { Link, useNavigate } from '@tanstack/react-location';

export function LoginPage() {
	const navigate = useNavigate();
	return (
		<>
			<Box as="h1" tw="tracking-wide font-bold text-2xl leading-7 mb-2">
				Login
			</Box>
			<Box as="p" tw="tracking-wide text-sm font-normal text-[rgba(0, 0, 0, 0.6)] mb-7">
				<span>Have Organization login? </span>
				<Box as={Link} to="./sso-login" tw="text-[#1869B3] underline">
					use single sign on
				</Box>
			</Box>
			<FlexBox tw="flex-col space-y-3">
				<FloatingLabelInput name="username" label="Email" />
				<FloatingLabelInput name="password" type="password" label="Password" />
			</FlexBox>
			<FlexBox tw="items-center justify-between mt-6 text-[rgba(0, 0, 0, 0.6)]">
				<FlexBox tw="flex items-center select-none">
					<Box
						as="input"
						id="remember-me"
						name="remember-me"
						type="checkbox"
						tw="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<Box as="label" htmlFor="remember-me" tw="cursor-pointer ml-2 block text-sm">
						Remember me
					</Box>
				</FlexBox>

				<Box tw="text-sm">
					<Box as={Link} to="./reset-password">
						Forgot your password?
					</Box>
				</Box>
			</FlexBox>
			<Box
				onClick={() => navigate({ to: '/' })}
				as="button"
				type="submit"
				tw="block w-full bg-[#1869B3] tracking-wide py-4 mt-6 rounded-md text-white font-bold mb-2"
			>
				Log in
			</Box>

			<SocialLogin />

			<Box as="p" tw="mt-5 tracking-wide text-[rgba(0, 0, 0, 0.6)] text-sm pt-1 mb-0 space-x-2">
				<span>Don't have an account?</span>
				<Box as={Link} to="./sign-up" tw="text-[#1869B3] underline">
					Signup
				</Box>
			</Box>
		</>
	);
}
