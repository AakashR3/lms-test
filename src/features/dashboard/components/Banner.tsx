import { Icon } from '@iconify/react';

export function Banner() {
	return (
		<section className="bg-[#eef8fb] relative">
			<div className="container mx-auto h-[250px] w-full flex flex-col justify-center relative -top-4">
				<div className="flex items-center w-full space-x-3">
					<span className="w-12 h-12 flex bg-[#d9eaf5] rounded-full items-center justify-center">
						<Icon icon="icon-park-outline:degree-hat" color="#1769b3" fontSize={25} />
					</span>
					<div className="flex flex-col">
						<div className="flex w-full items-center space-x-2">
							<span>
								My Current Role <b>CAE Analyst</b>
							</span>
							<Icon icon="bx:pencil" />
						</div>
						<span>
							I want to learn <b>CAD Design, CAE Simulation, Mechanical Engineering</b>
						</span>
					</div>
				</div>
				<span className="ml-14 mt-3 pl-1">Change Career?</span>
			</div>
		</section>
	);
}
