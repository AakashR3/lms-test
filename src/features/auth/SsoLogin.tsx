import { Box, FlexBox } from "~/components/UI";
import { FloatingLabelInput } from "~/components/UI/FloatingLabelInput";
import { Icon } from '@iconify/react';
import { Link } from "@tanstack/react-location";

export function SsoLoginPage() {
	return(
		<>
			<Box as="h1" tw="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">
				Single Sign On
			</Box>
			<Box as="p" tw="tracking-wide text-sm font-normal text-[rgba(0, 0, 0, 0.6)] mb-7">
				If your company has single sign-on set-up with i GET IT, enter your company's web address to access your unique login page. The format needs to be as such: "domainname.com".
			</Box>
			<FlexBox tw="flex-col space-y-3">
				<FloatingLabelInput name="domain" label="Domain Name" />
			</FlexBox>
			<Box
				as="button"
				type="submit"
				tw="block w-full bg-[#1869B3] py-4 font-bold mt-4 rounded-md text-white mb-2"
			>
				Proceed
			</Box>
			<FlexBox as={Link} to="/auth" tw="space-x-1 tracking-wide text-sm font-normal text-[rgba(0, 0, 0, 0.6)] mt-7">
				<span>Not an enterprise user?</span>
				<Box tw='text-[#1869B3] underline cursor-pointer'>Login</Box>
			</FlexBox>
		</>
	)
}
