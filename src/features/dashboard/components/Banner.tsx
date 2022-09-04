import { Icon } from '@iconify/react';

export function Banner() {
	return (
		<section className="bg-banner bg-no-repeat bg-left bg-cover relative">
			<div className="container mx-auto px-4 h-[250px] w-full flex flex-col justify-center relative -top-4">
				<div className="flex items-center w-full space-x-3">
					<span className="w-12 h-12 flex bg-[#d9eaf5] rounded-full items-center justify-center">
						<Icon icon="icon-park-outline:degree-hat" color="#1769b3" fontSize={25} />
					</span>
					<div className="flex flex-col text-[#020A1299] font-medium">
						<div className="flex w-full items-center space-x-2">
							<p>
								My Current Role <b className="text-[#020A12BD]">CAE Analyst</b>
							</p>
							<Icon icon="bx:pencil" />
						</div>
						<p className="font-medium">
							<span>I want to learn </span>
							<b className="text-[#020A12BD]">CAD Design, CAE Simulation, Mechanical Engineering</b>
						</p>
					</div>
				</div>
				<span className="ml-14 mt-3 pl-1 text-[#1868B3] text-sm font-semibold">Change Career?</span>
			</div>
		</section>
	);
}
