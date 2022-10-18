import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useTrendingSubscriptionByCurrencyCodeMutation } from "~/features/dashboard/store";
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
const TrendingSubscriptions = () => {
	const [trendingSubscriptionByCurrencyCode, { isLoading }] = useTrendingSubscriptionByCurrencyCodeMutation();
	const { trendingSubscription } = useAppSelector((state: any) => state.dashboard);
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
				},
				"(min-width: 1200px)": {
					slides: { perView: 5, spacing: 24 }
				}
			}
		},
		[ResizePlugin]
	);
	useEffect(() => {
		trendingSubscriptionByCurrencyCode("INR");
	}, []);
	return (
		<div className="mt-8 w-full">
			<div className="text-[18px] font-bold text-title mb-4">Trending Subscriptions</div>
			<div className="relative">
				<div className="flex keen-slider overflow-hidden w-full" ref={sliderRef}>
					{trendingSubscription.map((item: any, index: number) => (
						<div
							key={item.id}
							className={`bg-white px-5 py-5   rounded-lg  keen-slider__slide number-slide${index}`}
						>
							<img src={"assets/images/user-pic.svg"} alt="icon" />
							<div className="mt-3 text-[14px] h-10 line-clamp-2 font-bold leading-5 text-[#25313D] max-w-[240px]">
								{item.SubscriptionName}
							</div>
							<div className="mt-4 font-medium text-[13px] leading-[17px] text-[#6A7681]">
								{item.CourseCount} courses
							</div>
							<div className="mt-18 after:content-[\u0BF9]">
								<span className="text-[18px] text-[#1268B3] font-bold leading-[23px] ">
									{"\u20B9"}
									{item.Price}
								</span>
								{/* <span className=" font-medium text-[#1268B3]   leading-[23px]">.{item.decimal}</span> */}
								/per user
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

export default TrendingSubscriptions;
