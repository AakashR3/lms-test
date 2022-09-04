import { Icon } from '@iconify/react';
import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren & {
	className?: string;
};

export function Card(props: CardProps) {
	const { className, children } = props;
	return <div className={`bg-white rounded-lg border p-6 ${className}`}>{children}</div>;
}

const stats = [
	{ name: 'Course in progress', icon: 'mingcute:chart-line-line', count: '10' },
	{ name: 'Course completed', icon: 'mingcute:chart-line-line', count: '05' },
	{ name: 'Certificates earned', icon: 'mingcute:chart-line-line', count: '03' },
	{ name: 'Time spent', icon: 'mingcute:chart-line-line', count: '3h 20m' }
];

export function StateOverview() {
	return (
		<>
			{stats.map((stat) => (
				<Card key={stat.name} className="col-span-6 flex flex-col">
					<h6 className="font-semibold text-[#6A7681]">{stat.name}</h6>
					<div className="flex items-center justify-between pt-4 text-[#1869B3]">
						<h6 className="text-4xl font-semibold tracking-wider">{stat.count}</h6>
						<Icon className="w-12 h-12 opacity-40 fill-current" icon={stat.icon} />
					</div>
				</Card>
			))}
		</>
	);
}
