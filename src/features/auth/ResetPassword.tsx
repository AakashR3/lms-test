import { Box, FlexBox } from "~/components/UI";
import { FloatingLabelInput } from "~/components/UI/FloatingLabelInput";
import { Icon } from '@iconify/react';
import { Link } from "@tanstack/react-location";

export function ResetPasswordPage() {
	return(
		<>
			<FlexBox as={Link} to='/auth' tw="space-x-2 cursor-pointer">
				<Icon width={20} icon="mingcute:arrow-left-line" />
				<Box tw="text-sm text-[rgba(2, 10, 18, 0.6)]">Login</Box>
			</FlexBox>
			<Box as="h1" tw="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">
				Reset password
			</Box>
			<Box as="p" tw="tracking-wide text-sm font-normal text-[rgba(0, 0, 0, 0.6)] mb-7">
				Enter your email and we'll send you instructions on how to reset your password.
			</Box>
			<FlexBox tw="flex-col space-y-3">
				<FloatingLabelInput name="username" label="Email" />
			</FlexBox>
			<Box
				as="button"
				type="submit"
				tw="block w-full bg-[#1869B3] py-4 font-bold mt-4 rounded-md text-white mb-2"
			>
				Send Instructions
			</Box>
			<FlexBox as="p" tw="space-x-1 tracking-wide text-sm font-normal text-[rgba(0, 0, 0, 0.6)] mt-7">
				<span>If you are still having trouble this</span>
				<Box tw='text-[#1869B3] underline cursor-pointer'>article</Box>
				<span>might help</span>
			</FlexBox>
		</>
	)
}
