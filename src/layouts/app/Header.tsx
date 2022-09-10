import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-location';

const safeText = (text: string): string => {
	if (text?.length <= 4) return text;
	return text?.slice(0, 2);
};

export function AppHeader() {
	return (
		<header className="bg-white">
			<section className="container mx-auto px-4 flex justify-between py-2 w-full">
				<div className="flex items-center">
					<Link to="#!">
						<img className="object-cover" src="/assets/images/logo.png" alt="Store Logo" />
					</Link>
				</div>
				<div className="flex space-x-5">
					<div className="flex items-center space-x-3">
						<span>60 points</span>
						<Icon width={20} icon="ion:help-circle-outline" />
						<Icon width={20} icon="ci:heart-outline" />
						<Icon width={20} icon="clarity:shopping-cart-solid" />
						<Icon width={20} icon="ic:sharp-notifications" />
					</div>
					<div className="flex items-center space-x-2">
						<div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-md">
							<span className="font-medium uppercase tracking-wider text-lg text-gray-600">
								{safeText(localStorage.getItem('user') || '')}
							</span>
						</div>
						<div className="font-medium leading-5">
							<div>{localStorage.getItem('user')}</div>
							<div className="text-sm text-gray-500">Joined in August 2014</div>
						</div>
					</div>
				</div>
			</section>
		</header>
	);
}
