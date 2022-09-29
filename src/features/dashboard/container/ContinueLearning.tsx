import { useState } from "react";
import ContinueLearningSlider from "../components/ContinueLearningSlider";
const ContinueLearning = () => {
	const [prevTrigger, setPrevTrigger] = useState(0);
	const [nextTrigger, setNextTrigger] = useState(0);
	const [slideDetails, setSlideDetails] = useState<any>({});
	const updateSlideControl = (data: any) => {};
	return (
		<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mb-6  xl:col-span-2 xl:mx-auto">
			<div className="flex justify-between">
				<span className="text-[#232D42] text-2xl font-bold leading-7">Continue learning</span>
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
			<section className="flex">
				<ContinueLearningSlider
					prevTrigger={prevTrigger}
					nextTrigger={nextTrigger}
					disableSlideNavigation={(data: any) => setSlideDetails(data)}
				/>
			</section>
		</div>
	);
};

export default ContinueLearning;
