import { Box, FlexBox } from '~/components/UI';
import { FloatingLabelInput } from '~/components/UI/FloatingLabelInput';
import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-location';
import { SocialLogin } from "~/features/auth/components";

export function SingupPage() {
	return (
		<>
			<Box as="h1" tw="tracking-wide font-bold text-2xl leading-7 mb-2">
				Sign Up
			</Box>
			<Box as="p" tw="tracking-wide text-sm font-normal text-[rgba(0, 0, 0, 0.6)] mb-7">
				<span>Already a user? </span>
				<Box as={Link} to="/auth" tw="text-[#1869B3] underline">
					Login
				</Box>
			</Box>
			<FlexBox tw="flex-col space-y-5">
				<FlexBox tw='space-x-5'>
					<FloatingLabelInput name="firstName" label="First Name" />
					<FloatingLabelInput name="lastName" label="Last Name" />
				</FlexBox>
				<FloatingLabelInput name="email" label="Email" />
				<FloatingLabelInput name="password" type="password" label="Password" />
			</FlexBox>
			<FlexBox tw="flex select-none mt-7 text-[rgba(0, 0, 0, 0.54)]">
				<Box
					as="input"
					id="agree"
					name="agree"
					type="checkbox"
					tw="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
				/>
				<Box as="label" htmlFor="agree" tw="relative -top-[2px] cursor-pointer ml-1.5 block text-sm">
					Send me Marketing Emails about Tata Technologies Products and Services
				</Box>
			</FlexBox>
			<Box
				as="button"
				type="submit"
				tw="block w-full bg-[#1869B3] tracking-wide py-4 mt-6 rounded-md text-white font-bold mb-2"
			>
				Create account
			</Box>

			<FlexBox tw="flex select-none mt-4 text-[rgba(2, 10, 18, 0.6)]">
				<Icon icon='mingcute:information-line' width={25} color='rgba(55, 65, 81, 1)'/>
				<Box as="label" htmlFor="agree" tw="relative top-0.5 cursor-pointer ml-1.5 block text-sm">
					Send me Marketing Emails about Tata Technologies Products and Services
				</Box>
			</FlexBox>

			<SocialLogin />

		</>
	);
}
