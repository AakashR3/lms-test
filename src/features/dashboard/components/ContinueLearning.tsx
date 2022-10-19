import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetCourseListInProgressQuery } from "~/features/dashboard/store";

import { Icon } from "@iconify/react";

const courseListInProgressTest = [
	{
		CategoryID: 10,
		CategoryName: "Legacy Courses",
		CourseID: 1916,
		CourseName: "UG V17 to NX V1 CAD Update",
		tTime: "002:24",
		Progress: 0,
		EventID: 10200,
		LessonsCompleted: 0,
		LessonsTotal: 168
	},
	{
		CategoryID: 10,
		CategoryName: "Legacy Courses",
		CourseID: 1969,
		CourseName: "UG V18 to NX V1 CAD Update",
		tTime: "000:00",
		Progress: 0,
		EventID: 1081,
		LessonsCompleted: 0,
		LessonsTotal: 98
	},
	{
		CategoryID: 10,
		CategoryName: "Legacy Courses",
		CourseID: 2026,
		CourseName: "UG NX V1 New User Express",
		tTime: "007:50",
		Progress: 0,
		EventID: 1038,
		LessonsCompleted: 0,
		LessonsTotal: 254
	},
	{
		CategoryID: 10,
		CategoryName: "Legacy Courses",
		CourseID: 2130,
		CourseName: "UG NX V1 Sketcher",
		tTime: "003:59",
		Progress: 0,
		EventID: 1082,
		LessonsCompleted: 0,
		LessonsTotal: 79
	},
	{
		CategoryID: 10,
		CategoryName: "Legacy Courses",
		CourseID: 2581,
		CourseName: "3M UG V17 to NX V1 CAD Update",
		tTime: "015:45",
		Progress: 0,
		EventID: 3721,
		LessonsCompleted: 0,
		LessonsTotal: 64
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

const ContinueLearning = () => {
	const { data, isLoading } = useGetCourseListInProgressQuery("2092");
	const { courseListInProgress } = useAppSelector((state: any) => state.dashboard);

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
						{courseListInProgressTest.map((course: any, index: number) => (
							<div
								key={course.CourseID}
								className={`bg-white pt-4 px-4 rounded-lg keen-slider__slide number-slide${index}`}
							>
								<p className="text-sm text-[#020A12]/54 font-bold font-dmsans">{course.CourseName}</p>
								<p className="text-xs text-[#020A12]/54 font-normal font-dmsans">
									{course.CategoryName}
								</p>
								<div className="progress mt-10 h-1.5 bg-[#E9EEF5]">
									<div
										className={`relative h-1.5 w-${course.Progress} overflow-hidden rounded-full bg-[#1268B3]`}
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
											stroke-width="2"
											stroke="currentColor"
											className="w-4 h-4 text-[#1268B3]"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
											/>
										</svg>
									</button>
								</div>
							</div>
						))}
					</div>
					{courseListInProgressTest.length > 4 && (
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
