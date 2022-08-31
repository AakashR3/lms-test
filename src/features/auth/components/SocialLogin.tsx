import { Box, FlexBox } from "~/components/UI";
import { Icon } from "@iconify/react";

export function SocialLogin() {
	return(
		<FlexBox tw="flex-col mt-10 space-y-5">
			<Box tw="relative">
				<Box as="hr" tw="h-1 w-full" />
				<Box tw="text-sm font-semibold absolute -top-3 bg-[#fafafa] text-[rgba(0, 0, 0, 0.6)] pr-2">
					You can also continue with
				</Box>
			</Box>
			<FlexBox tw="space-x-3">
				<FlexBox tw="w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="flat-color-icons:google" />
				</FlexBox>
				<FlexBox tw="w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
				</FlexBox>
				<FlexBox tw="w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />
				</FlexBox>
			</FlexBox>
		</FlexBox>
	)
}
