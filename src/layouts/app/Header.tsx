import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-location';

export function AppHeader() {
	return (
		<header className="bg-white">
			<section className="container mx-auto flex justify-between py-2 w-full">
				<div className="flex items-center">
					<Link to="#!">
						<img className="object-cover" src="/public/logo.png" alt="Store Logo" />
					</Link>
				</div>
				<div className="flex items-center space-x-5">
					<span>60 points</span>
					<Icon width={20} icon="ion:help-circle-outline" />
					<Icon width={20} icon="ci:heart-outline" />
					<Icon width={20} icon="clarity:shopping-cart-solid" />
					<Icon width={20} icon="ic:sharp-notifications" />
				</div>
			</section>
		</header>
	);
}
