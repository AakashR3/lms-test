import { useState } from "react";
import LearningPathSlider from "../components/LearningPathSlider";
const LearningPaths = () => {
	const [active, setActive] = useState("Assigned");
	const [prevTrigger, setPrevTrigger] = useState(0);
	const [nextTrigger, setNextTrigger] = useState(0);
	const [slideDetails, setSlideDetails] = useState<any>({});
	return (
		<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mb-6  xl:col-span-2 xl:mx-auto">
			<div className="flex justify-between mb-6">
				<span className="text-[#232D42] text-2xl font-bold leading-7">Learning paths</span>
				<button className="font-semibold text-[14px] text-[#1268B3]">View all</button>
			</div>
			<div className=" border-b-1 border-solid border-[#EEEEEE] flex justify-between">
				<div className="flex space-x-9">
					<button
						className={`${active === "Assigned" && "border-b-3 border-[#1268B3]"} font-semibold  pb-4`}
						onClick={() => setActive("Assigned")}
					>
						<span className="text-[#020a12] opacity-54">Assigned</span>
					</button>
					<button
						onClick={() => setActive("Recommended")}
						className={`${active === "Recommended" && "border-b-3 border-[#1268B3]"} font-semibold  pb-4`}
					>
						<span className="text-[#020a12] opacity-54">Recommended</span>
					</button>
				</div>
				<div>
					{" "}
					<button className="font-semibold  mb-5 text-[#020a12] opacity-54">Assigned</button>
				</div>
			</div>
			<LearningPathSlider
				prevTrigger={prevTrigger}
				nextTrigger={nextTrigger}
				disableSlideNavigation={(data: any) => setSlideDetails(data)}
			/>
			<div className="flex justify-between">
				<div className="flex">
					<button
						style={{ backgroundImage: `url(/assets/images/prev-btn.png)` }}
						onClick={() => setPrevTrigger(prevTrigger + 1)}
						className={`mx-2.3 w-8 h-8 cursor-pointer ${
							slideDetails.current === 0 ? "opacity-[.5] pointer-events-none" : ""
						}`}
					/>
					<button
						style={{ backgroundImage: `url(/assets/images/next-btn.png)` }}
						onClick={() => setNextTrigger(prevTrigger - 1)}
						className={`mx-2.3 w-8 h-8 cursor-pointer  ${
							slideDetails.current === slideDetails.total - 1 ? "opacity-[.5] pointer-events-none" : ""
						}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default LearningPaths;
