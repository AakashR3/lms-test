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
							<button className="flex justify-center items-center bg-[#1268B3] text-white font-semibold leading-[18px] text-[14px] mt-6 w-full py-[13px] rounded-[5px]">
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.50032 14.6673C6.96056 14.6673 7.33366 15.0404 7.33366 15.5007C7.33366 15.9609 6.96056 16.334 6.50032 16.334C6.04009 16.334 5.66699 15.9609 5.66699 15.5007C5.66699 15.0404 6.04009 14.6673 6.50032 14.6673ZM12.3337 14.6673C12.7939 14.6673 13.167 15.0404 13.167 15.5007C13.167 15.9609 12.7939 16.334 12.3337 16.334C11.8734 16.334 11.5003 15.9609 11.5003 15.5007C11.5003 15.0404 11.8734 14.6673 12.3337 14.6673ZM1.91285 0.193176L2.00037 0.2507L3.4235 1.31804C3.66719 1.50081 3.85473 1.74575 3.96798 2.02498L4.01832 2.16732H14.723C15.6837 2.16732 16.4361 2.97426 16.3877 3.91702L16.3768 4.04071L15.996 7.0869C15.7595 8.979 14.2717 10.4604 12.3964 10.7024L12.2076 10.7224L6.1137 11.2302L6.32997 12.1674H13.5837C14.0439 12.1674 14.4171 12.5405 14.4171 13.0007C14.4171 13.428 14.0953 13.7803 13.6809 13.8285L13.5837 13.8341H6.32997C5.59953 13.8341 4.96007 13.3595 4.74188 12.6732L4.70598 12.5422L2.4235 2.65138L1.00037 1.58403C0.632183 1.30789 0.557566 0.785559 0.833708 0.417367C1.06737 0.10582 1.47729 0.00446615 1.82095 0.147948L1.91285 0.193176ZM14.723 3.83398H4.40688L5.73503 9.58932L12.0692 9.06148C13.2473 8.96332 14.1956 8.05332 14.3422 6.88023L14.723 3.83398Z"
										fill="white"
									/>
								</svg>
								<div className="ml-1">Add to cart</div>
							</button>
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
