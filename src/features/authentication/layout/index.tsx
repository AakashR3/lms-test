import { Outlet } from '@tanstack/react-location';
import { Slider } from '../components/Slider';

function AuthLayout() {
	return (
		<section className="h-full w-full flex">
			<Slider />
			<main className="animate-opacity w-1/2 overflow-auto h-full py-5">
				<Outlet />
			</main>
		</section>
	);
}

export default AuthLayout;
