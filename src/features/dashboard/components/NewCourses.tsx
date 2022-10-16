import { useKeenSlider } from "keen-slider/react";
const trendingCourse = [
	{
		id: 1,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 2,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 3,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 4,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 5,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 6,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 7,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 8,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 9,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 10,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 11,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 12,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	},
	{
		id: 13,
		image: "assets/images/user-pic.svg",
		tags: "CATIA V5",
		name: "Plastics and injection mold training",
		course: 44,
		time: 16,
		total: 400
	}
];
const ResizePlugin = (slider: any) => {
	const observer = new ResizeObserver(function () {
		slider.update();
	});

	slider.on("created", () => {
		observer.observe(slider.container);
	});
	slider.on("destroyed", () => {
		observer.unobserve(slider.container);
	});
};
const NewCourses = () => {
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			initial: 1,
			loop: false,
			breakpoints: {
				"(min-width: 400px)": {
					slides: { perView: 2, spacing: 24 }
				},
				"(min-width: 992px)": {
					slides: { perView: 3, spacing: 24 }
				}
			}
		},
		[ResizePlugin]
	);
	return (
		<div className="mt-8 w-full">
			<div className="text-[18px] font-bold text-title mb-4">New Courses</div>
			<div className="relative">
				<div className="flex keen-slider overflow-hidden w-full" ref={sliderRef}>
					{trendingCourse.map((item, index) => (
						<div
							key={item.id}
							className={`bg-white px-5 py-6 border-[#1268B3]  rounded-lg border-l-4  keen-slider__slide number-slide${index}`}
						>
							<img src={item.image} alt="profile" />
							<div className="mt-[14px] px-[6px] bg-[#E2F5FF80]  inline-block rounded-sm">
								<span className="leading-4 text-xs text-[#1268B3] font-bold">{item.tags}</span>
							</div>
							<div className="mt-[6px] text-[14px] font-bold leading-[26px] text-[#25313D]">
								{item.name} {item.id}
							</div>
							<div className=" font-medium text-[13px] flex items-center leading-[17px] text-[#6A7681]">
								<span>{item.course} lessons</span>{" "}
								<div className="w-[8px] h-[8px] bg-[#c7cfd761] rounded-[50%] ml-1 mr-1"></div>
								<span>{item.time} hrs</span>
								<div className="w-[8px] h-[8px] bg-[#c7cfd761] rounded-[50%] ml-1 mr-1"></div>
								<span>{item.total}+ enrolled</span>
							</div>
							<div className="mt-9 flex justify-between">
								<div className="flex items-center">
									{[...Array(5)].map(item => (
										<svg
											width="14"
											height="12"
											viewBox="0 0 14 12"
											fill="none"
											className="mr-1"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6.36995 0.434441C6.65124 -0.0484596 7.3489 -0.0484596 7.63013 0.434441L9.26054 3.2337L12.4266 3.9193C12.9728 4.03757 13.1884 4.70106 12.8161 5.11779L10.6576 7.53343L10.9839 10.7564C11.0402 11.3124 10.4759 11.7225 9.96445 11.4971L7.00007 10.1908L4.03566 11.4971C3.52427 11.7225 2.95987 11.3124 3.01617 10.7564L3.34249 7.53343L1.18407 5.11779C0.81172 4.70106 1.0273 4.03757 1.57348 3.9193L4.73956 3.2337L6.36995 0.434441Z"
												fill="#F7C043"
											/>
										</svg>
									))}
								</div>
								<div className="w-[28px] h-[28px] bg-[#c7cfd761] flex items-center justify-center rounded-[50%] ml-1 mr-1">
									<svg
										width="10"
										height="9"
										viewBox="0 0 10 9"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.82465 0.897447L8.47353 1.30419C8.79449 1.33223 9.03192 1.61518 9.00379 1.93614L8.59711 6.58504C8.56903 6.90596 8.28608 7.14339 7.96516 7.11531C7.6442 7.08727 7.40677 6.80432 7.43489 6.48336L7.71884 3.23738L1.80126 8.20282C1.55447 8.4099 1.18653 8.37772 0.979442 8.13092C0.772352 7.88412 0.804551 7.51618 1.05134 7.3091L6.96892 2.34366L3.72297 2.05967C3.402 2.03161 3.16459 1.74868 3.1927 1.42771C3.22077 1.10678 3.50372 0.869357 3.82465 0.897447Z"
											fill="#1E293B"
										/>
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>
				<button
					className="lg:flex hidden  items-center justify-center cursor-pointer shadow-[0px_0px_7px] shadow-[#00000017] bg-white w-[52px] h-[52px] rounded-[50%] top-[50%] absolute translate-y-[-50%] left-[-2.25%]"
					onClick={() => instanceRef?.current?.prev()}
				>
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.911067 6.58976C0.585634 6.26434 0.585634 5.73667 0.911067 5.41126L5.62513 0.697206C5.95055 0.371765 6.47822 0.371765 6.80363 0.697206C7.12905 1.02264 7.12905 1.55028 6.80363 1.87571L2.6788 6.00051L6.80363 10.1253C7.12905 10.4508 7.12905 10.9783 6.80363 11.3038C6.47822 11.6293 5.95055 11.6293 5.62513 11.3038L0.911067 6.58976Z"
							fill="#020A12"
							fill-opacity="0.6"
						/>
					</svg>
				</button>

				<button
					className="lg:flex hidden items-center justify-center cursor-pointer w-[52px] shadow-[0px_0px_7px] shadow-[#00000017] bg-white h-[52px] rounded-[50%] top-[50%] absolute   translate-y-[-50%] right-[-2.25%]"
					onClick={() => instanceRef?.current?.next()}
				>
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.08893 6.58976C7.41437 6.26434 7.41437 5.73667 7.08893 5.41126L2.37487 0.697206C2.04945 0.371765 1.52178 0.371765 1.19637 0.697206C0.870949 1.02264 0.870949 1.55028 1.19637 1.87571L5.3212 6.00051L1.19637 10.1253C0.870949 10.4508 0.870949 10.9783 1.19637 11.3038C1.52178 11.6293 2.04945 11.6293 2.37487 11.3038L7.08893 6.58976Z"
							fill="#020A12"
							fill-opacity="0.6"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default NewCourses;
