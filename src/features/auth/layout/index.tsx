import { Box, FlexBox } from '~/components/UI';
import { Banner } from "~/features/auth/components/Banner";
import { Outlet } from "@tanstack/react-location";

function AuthPageLayout() {
	return (
		<Box tw="h-full w-full flex">
			<Banner />
			<FlexBox className='animate-opacity' tw="w-1/2 justify-center flex-col max-w-md mx-auto">
				<Outlet />
			</FlexBox>
		</Box>
	);
}

export default AuthPageLayout;
