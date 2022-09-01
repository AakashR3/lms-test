import { Icon } from '@iconify/react';

export function StateWidget() {
	return (
		<div className="col-span-6 flex items-center justify-between border p-4 bg-white rounded-md">
			<div className="flex flex-col space-y-1">
				<h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
					Value
				</h6>
				<span className="text-xl font-semibold">$30,000</span>
			</div>
			<Icon className="w-12 h-12 text-gray-300" icon="mingcute:chart-line-line" />
		</div>
	);
}
