import { useState } from "react";
import Slider from "../components/Slider";
const NewCourses = () => {
	const [prevTrigger, setPrevTrigger] = useState(0);
	const [nextTrigger, setNextTrigger] = useState(0);
	const [slideDetails, setSlideDetails] = useState<any>({});
	const updateSlideControl = (data: any) => {};
	return (
		<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mb-6  xl:col-span-2 xl:mx-auto">
			<div className="flex justify-between">
				<span className="text-[#232D42] text-xl font-bold leading-7">New Courses</span>
				<div className="flex">
					<div className={`${slideDetails.current === 0 && "opacity-[.5] pointer-events-none"}`}>
						<img
							src="/assets/images/prev-btn.png"
							onClick={() => setPrevTrigger(prevTrigger + 1)}
							className="mx-2.3 cursor-pointer"
							alt="prev-btn"
						/>
					</div>
					<div
						className={`${
							slideDetails.current === slideDetails.total - 1 && "opacity-[.5] pointer-events-none"
						}`}
					>
						<img
							src="/assets/images/next-btn.png"
							onClick={() => setNextTrigger(prevTrigger - 1)}
							className="mx-2.3 cursor-pointer"
							alt="next-btn"
						/>
					</div>
				</div>
			</div>
			<section className="flex">
				<Slider
					prevTrigger={prevTrigger}
					nextTrigger={nextTrigger}
					disableSlideNavigation={(data: any) => setSlideDetails(data)}
				/>
			</section>
		</div>
	);
};

export default NewCourses;
