import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetCourseListQuery } from "~/features/dashboard/store";

import { Icon } from "@iconify/react";

interface IProps {
	userId?: string;
}

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
const NewCourses = ({ userId }: IProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const imageUrl = import.meta.env.VITE_APP_IMG_URL;
	useGetCourseListQuery(userId);
	const { courseList } = useAppSelector((state: any) => state.dashboard);
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
			},
			slideChanged(s) {
				setCurrentSlide(s.track.details.rel);
			}
		},
		[ResizePlugin]
	);

	return (
		<div className="w-full">
			<div className="flex items-center space-x-4 py-5 lg:py-6">
				<h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">New Courses</h2>
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
							<div className=" font-medium text-xs+ flex items-center leading-[17px]  ">
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

export default NewCourses;
