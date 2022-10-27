import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetCourseListQuery } from "~/features/dashboard/store";

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
	const imageUrl = import.meta.env.VITE_APP_IMG_URL;
	const { data, isLoading } = useGetCourseListQuery("a");
	const { courseList } = useAppSelector((state: any) => state.dashboard);
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
		<div className="mt-8 w-full">
			<div className="flex bg-white rounded-lg py-1 px-2 w-96 my-12">
				<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors bg-[#E9EEF5] font-semibold text-sm font-dmsans hover:bg-[#E9EEF5]/80">
					Recommended for you
				</button>
				<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 ml-2 leading-tight transition-colors font-semibold text-sm font-dmsans ">
					What peers learning
				</button>
			</div>
		</div>
	);
};

export default NewCoursesRecommended;
