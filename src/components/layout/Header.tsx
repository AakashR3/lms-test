import { Box } from "~/components/UI";
import { Icon } from "@iconify/react";

export function AppHeader() {
	return(
		<Box as="header" tw="bg-white">
			<Box tw="container mx-auto flex justify-between py-2 w-full">
				<Box tw="flex items-center">
					<Box as="a" tw="cursor-pointer">
						<Box as="h3" tw="text-2xl font-medium text-blue-500">
							<Box as="img" tw="object-cover" src="/logo.png" alt="Store Logo" />
						</Box>
					</Box>
				</Box>
				<Box tw="flex items-center space-x-5">
					<Box>60 points</Box>
					<Icon width={20} icon="ion:help-circle-outline" />
					<Icon width={20} icon="ci:heart-outline" />
					<Icon width={20} icon="clarity:shopping-cart-solid" />
					<Icon width={20} icon="ic:sharp-notifications" />
				</Box>
			</Box>
		</Box>
	)
}
