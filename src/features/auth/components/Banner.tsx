import { Box, FlexBox } from '~/components/UI';

export function Banner() {
	return (
		<FlexBox tw="w-1/2 justify-around bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/login.png)' }}>
			<FlexBox tw="flex-col max-w-lg mx-auto py-16 tracking-wide ">
				<Box as="img" tw="mb-10" width={87} height={31} src="/logo_w.png" />
				<Box as="h1" tw="text-white font-semibold text-2xl leading-7">
					Start learning now
				</Box>
				<Box as="p" tw="text-white mt-1 mt-3">
					We provide an easy to use interface with adaptive content and clear direction. You'll find bitesize
					practical information from experts who are industry leaders in their field.
				</Box>
				<FlexBox tw="space-x-2 my-6">
					<Box tw="w-6 h-2 inline-block bg-white rounded-full" />
					<Box tw="w-2 h-2 inline-block bg-[#93CBF1] rounded-full" />
					<Box tw="w-2 h-2 inline-block bg-[#93CBF1] rounded-full" />
				</FlexBox>
			</FlexBox>
		</FlexBox>
	);
}
