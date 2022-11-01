import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetCourseListInProgressQuery } from "~/features/dashboard/store";

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
var widthRange: { [key: string]: string } = {
	"1-8": "w-1/12",
	"9-16": "w-2/12",
	"17-24": "w-3/12",
	"25-32": "w-4/12",
	"33-40": "w-5/12",
	"41-49": "w-6/12",
	"50-58": "w-7/12",
	"59-67": "w-8/12",
	"68-75": "w-9/12",
	"76-82": "w-10/12",
	"83-91": "w-11/12",
	"92-100": "w-12/12"
};
function calculateWidth(progress: any): string {
	for (var key in widthRange) {
		const range = key.split("-");
		if (range[0] <= progress && progress <= range[1]) {
			return widthRange[key];
		}
	}
	return "w-0";
}

const ContinueLearning = ({ userId }: IProps) => {
	useGetCourseListInProgressQuery(userId);
	const { courseListInProgress, courseListInProgressMessage } = useAppSelector((state: any) => state.dashboard);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			initial: 1,
			loop: false,
			breakpoints: {
				"(min-width: 400px)": {
					slides: { perView: 3, spacing: 24 }
				},
				"(min-width: 992px)": {
					slides: { perView: 4, spacing: 24 }
				}
			}
		},
		[ResizePlugin]
	);
	return (
		<div>
			<div className="mt-8 w-full">
				<div className="text-base mb-4 font-medium tracking-wide text-slate-700 line-clamp-1">
					Continue Learning
				</div>
				<div className="relative">
					<div className="flex keen-slider overflow-hidden w-full" ref={sliderRef}>
						{courseListInProgress.length > 0 ? (
							courseListInProgress.map((course: any, index: number) => (
								<div
									key={course.CourseID}
									className={`bg-white pt-4 px-4 rounded-lg keen-slider__slide number-slide${index}`}
								>
									<p className="text-sm text-[#020A12]/54 font-bold font-dmsans">
										{course.CourseName}
									</p>
									<p className="text-xs text-[#020A12]/54 font-normal font-dmsans">
										{course.CategoryName}
									</p>
									<div className="progress mt-10 h-1.5 bg-[#E9EEF5]">
										<div
											className={`relative h-1.5 ${calculateWidth(
												course.Progress
											)} overflow-hidden rounded-full bg-[#1268B3]`}
										></div>
									</div>
									<div className="flex justify-between">
										<div className=" text-xs text-[#020A12]/54 font-normal font-dmsans mt-4">
											<span>
												{course.LessonsCompleted} / {course.LessonsTotal} lessons
											</span>
											<span className="ml-4">{course.tTime}</span>
										</div>
										<button className="my-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="2"
												stroke="currentColor"
												className="w-4 h-4 text-[#1268B3]"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
												/>
											</svg>
										</button>
									</div>
								</div>
							))
						) : (
							<div className="flex text-center">
								<p className="my-4 text-sm font-dmsans text-[#020A12]/60">
									{courseListInProgressMessage}
								</p>
							</div>
						)}
					</div>
					{courseListInProgress.length > 4 && (
						<>
							<button
								className="lg:flex hidden  items-center justify-center cursor-pointer shadow-[0px_0px_7px] shadow-[#00000017] bg-white w-[52px] h-[52px] rounded-[50%] top-[50%] absolute translate-y-[-50%] left-[-2.25%]"
								onClick={() => instanceRef?.current?.prev()}
							>
								<Icon icon="majesticons:chevron-left-line" width="24px" height="24px" />
							</button>

							<button
								className="lg:flex hidden items-center justify-center cursor-pointer w-[52px] shadow-[0px_0px_7px] shadow-[#00000017] bg-white h-[52px] rounded-[50%] top-[50%] absolute   translate-y-[-50%] right-[-2.25%]"
								onClick={() => instanceRef?.current?.next()}
							>
								<Icon icon="majesticons:chevron-right-line" width="24px" height="24px" />
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContinueLearning;
