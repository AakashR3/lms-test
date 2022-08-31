import { Box, FlexBox } from "~/components/UI";

export function TopNavigation() {
	return(
		<FlexBox as="nav" tw="bg-white py-3 border-t">
			<FlexBox tw="container mx-auto items-center justify-between">
				<Box tw="flex items-center space-x-8">
					<Box
						as="a"
						tw="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
					>
						Dashboard
					</Box>

					<Box
						as="a"
						tw="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600"
					>
						Library
					</Box>

					<Box
						as="a"
						tw="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
					>
						Account
					</Box>

					<Box
						as="a"
						tw="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
					>
						Objectives
					</Box>

					<Box
						as="a"
						tw="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
					>
						Reports
					</Box>

					<Box
						as="a"
						tw="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
					>
						More
					</Box>
				</Box>
				<FlexBox tw="relative">
					<Box tw="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<Box
							as="svg"
							tw="w-5 h-5 text-gray-500"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</Box>
					</Box>
					<Box
						as="input"
						type="text"
						id="search-navbar"
						tw="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:none"
						placeholder="Search..."
					/>
				</FlexBox>
			</FlexBox>
		</FlexBox>
	)
}
