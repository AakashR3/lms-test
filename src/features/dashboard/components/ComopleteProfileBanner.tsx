import { Icon } from '@iconify/react';
import { ProgressBar } from '~/components/ProgressBar';

export function CompleteProfileBanner() {
	return (
		<div className="container mx-auto px-4">
			<section className="flex w-full bg-blue items-center space-between relative -top-16 rounded-md text-white p-5 space-x-4">
				<div className="flex-1 flex items-center space-x-4">
					<div className="flex">
						<ProgressBar
							progress={65}
							size={64}
							strokeWidth={6}
							circleOneStroke="#93CBF1"
							circleTwoStroke="#fff"
						/>
					</div>
					<div className="flex flex-col flex-1 leading-8">
						<span className="font-semibold">Update your business information</span>
						<span className="text-sm">
							Complete your profile to access all the features, and preferences based recommendations
						</span>
					</div>
				</div>
				<button className="flex items-center space-x-2 bg-white text-[#1868B3] font-semibold rounded-md px-4 py-2">
					<span>Go To Profile</span>
					<Icon width={18} icon="mingcute:arrow-right-line" />
				</button>
				<div className="absolute -top-32 right-0">
					<span className="absolute -left-28 bg-white rounded-full p-5 text-[#020A1299] font-medium">
						Hi, Steave
					</span>
					<img src="/assets/images/tiger.png" alt="" />
				</div>
			</section>
		</div>
	);
}
