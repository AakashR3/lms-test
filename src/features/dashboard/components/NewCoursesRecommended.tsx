import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetRecommendedCourseListQuery, useGetPeersCourseListQuery } from "~/features/dashboard/store";

import { Icon } from "@iconify/react";
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
const NewCoursesRecommended = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const imageUrl = import.meta.env.VITE_APP_IMG_URL;
	const { data: recomData, isLoading: recomIsLoading } = useGetRecommendedCourseListQuery("595");
	const { recommendedCourseList } = useAppSelector((state: any) => state.dashboard);
	const { data: peersData, isLoading: peersIsLoading } = useGetPeersCourseListQuery("2191");
	const { peersCourseList } = useAppSelector((state: any) => state.dashboard);
	const [courseList, setCourseList] = useState<any>(recommendedCourseList);
	const [highlightRecommended, setHighlightRecommended] = useState<boolean>(true);
	const [highlightPeers, setHighlightPeers] = useState<boolean>(false);
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
			},
			slideChanged(s) {
				setCurrentSlide(s.track.details.rel);
			}
		},
		[ResizePlugin]
	);

	useEffect(() => {
		console.log(courseList);
	}, [courseList]);

	function onClickButton(eventPeriodStr: string): void {
		if (eventPeriodStr == "R") {
			setCourseList(recommendedCourseList);
			setHighlightRecommended(true);
			setHighlightPeers(false);
		} else if (eventPeriodStr == "P") {
			setCourseList(peersCourseList);
			setHighlightPeers(true);
			setHighlightRecommended(false);
		}
	}

	function showRecommendHighlighted(): string {
		if (highlightRecommended) {
			return " bg-[#E9EEF5] hover:bg-[#E9EEF5]/80";
		} else {
			return "";
		}
	}

	function showPeersHighlighted(): string {
		if (highlightPeers) {
			return " bg-[#E9EEF5] hover:bg-[#E9EEF5]/80";
		} else {
			return "";
		}
	}

	return (
		<div className="mt-8 w-full">
			<div className="flex bg-white rounded-lg py-1 px-2 w-96 my-12">
				<button
					className={` ${showRecommendHighlighted()} flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors  font-semibold text-sm font-dmsans`}
					onClick={() => onClickButton("R")}
				>
					Recommended for you
				</button>
				<button
					className={` ${showPeersHighlighted()} flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors  font-semibold text-sm font-dmsans`}
					onClick={() => onClickButton("P")}
				>
					What peers learning
				</button>
			</div>
			<div className="relative">
				<div className="flex keen-slider overflow-hidden w-full" ref={sliderRef}>
					{courseList.map((course: any, index: number) => (
						<div
							key={index}
							className={`bg-white px-5 py-6 border-primary  rounded-lg border-l-4  keen-slider__slide number-slide${index} `}
						>
							<img src={imageUrl + course.InitialGraphic} alt="profile" className="w-12 h-12" />
							<div className="mt-[14px] px-[6px] bg-info/10  dark:bg-info/15  inline-block rounded-sm">
								<span className="leading-4 text-xs text-primary font-bold">{course.CategoryName}</span>
							</div>
							<div className="mt-[6px] line-clamp-1 text-base font-medium text-slate-600 dark:text-navy-100">
								{course.CourseName}
							</div>
							<div className=" font-medium text-xs flex items-center leading-[17px]  ">
								<span>{course.TotalLessons} lessons</span>{" "}
								<div className="w-[8px] h-[8px] bg-slate-200 rounded-[50%] ml-1 mr-1"></div>
								<span>{course.OnlineHours} hrs</span>
								<div className="w-[8px] h-[8px] bg-slate-200 rounded-[50%] ml-1 mr-1"></div>
								<span>{course.Enrolled}+ enrolled</span>
							</div>
							<div className="mt-9 flex justify-between">
								<div className="flex items-center">
									{[...Array(course.Rating)].map((item, index) => (
										<Icon
											key={index}
											icon="mingcute:star-fill"
											fill="rgba(247, 192, 67, 1)"
											width="16"
											height="16"
											color="rgba(247, 192, 67, 1)"
										/>
									))}
								</div>
								<div className="w-[28px] h-[28px] bg-slate-200 flex items-center justify-center rounded-[50%] ml-1 mr-1">
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
				{currentSlide !== 0 && (
					<button
						className="lg:flex hidden  items-center justify-center cursor-pointer shadow-[0px_0px_7px] shadow-[#00000017] bg-white w-[52px] h-[52px] rounded-[50%] top-[50%] absolute translate-y-[-50%] left-[-2.25%]"
						onClick={() => instanceRef?.current?.prev()}
					>
						<Icon icon="majesticons:chevron-left-line" width="24px" height="24px" />
					</button>
				)}

				{instanceRef?.current?.track?.details &&
					currentSlide !== instanceRef.current?.track?.details?.slides?.length - 3 && (
						<button
							className="lg:flex hidden items-center justify-center cursor-pointer w-[52px] shadow-[0px_0px_7px] shadow-[#00000017] bg-white h-[52px] rounded-[50%] top-[50%] absolute   translate-y-[-50%] right-[-2.25%]"
							onClick={() => instanceRef?.current?.next()}
						>
							<Icon icon="majesticons:chevron-right-line" width="24px" height="24px" />
						</button>
					)}
			</div>
		</div>
	);
};

export default NewCoursesRecommended;
