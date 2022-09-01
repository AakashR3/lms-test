import { Outlet } from '@tanstack/react-location';
import { Slider } from '../components/Slider';

function AuthLayout() {
	return (
		<section className="h-full w-full flex">
			<Slider />
			<main className="animate-opacity w-1/2 flex justify-center flex-col max-w-md mx-auto">
				<Outlet />
			</main>
		</section>
	);
}

export default AuthLayout;
