import { Box, FlexBox } from "~/components/UI";
import { Icon } from "@iconify/react";

export function AppFooter() {
	return(
		<Box tw="bg-white border-t text-sm text-[#676c70]">
			<FlexBox tw="items-center justify-between container mx-auto py-4">
				<FlexBox>&copy; Tata Technologies</FlexBox>
				<FlexBox tw="items-center text-sm text-gray-500 space-x-6">
					<Box as="a" href="#" tw="hover:underline">
						Help
					</Box>
					<Box as="a" href="#" tw="hover:underline">
						Privacy Policy
					</Box>
					<Box as="a" href="#" tw="hover:underline">
						Terms of Use
					</Box>
				</FlexBox>
			</FlexBox>
		</Box>
	)
}
