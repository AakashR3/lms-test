import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";

const dataSlider = [
	{
		id: 1,
		img: "/assets/images/continue-learning.png",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	},
	{
		id: 2,
		img: "/assets/images/continue-learning.png",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	},
	{
		id: 3,
		img: "/assets/images/continue-learning.png",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	},
	{
		id: 4,
		img: "/assets/images/continue-learning.png",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	}
];

export function ContinueLearningSlider({ prevTrigger, nextTrigger, disableSlideNavigation }: any) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		instanceRef?.current?.prev();
	}, [prevTrigger]);

	useEffect(() => {
		instanceRef?.current?.next();
	}, [nextTrigger]);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 1,
		loop: false,
		slides: {
			perView: 3
		},
		slideChanged(slider) {
			disableSlideNavigation({
				current: slider.track.details.rel,
				total: instanceRef?.current?.track.details.slides.length
			});
		},
		created() {
			setLoaded(true);
		}
	});
	return (
		<>
			<div ref={sliderRef} className="keen-slider">
				{dataSlider.map((slide, index) => (
					<div key={slide.id} className={`my-6 mr-6 flex keen-slider__slide number-slide${index}`}>
						<div className="flex   w-121 h-39.5 rounded-lg   border-[0.5px] border-solid border-[#D7DBE0] ">
							<div>
								<img className="w-37.5 h-39.5" src={`${slide.img}`} alt="Placeholder" />
							</div>
							<div className="mx-6 my-6 flex-1">
								<span className="font-bold text-[#25313D] text-base ">{slide.title}</span>

								<div className="font-normal text-[#020a12] mt-2  text-xs opacity-54">
									<span>
										{slide.completed}/{slide.total} {slide.type}
									</span>
									<span className="ml-4">{slide.duration}</span>
								</div>

								<div className="mt-8 flex items-center justify-between">
									<div className="flex items-center">
										<span className="font-normal text-[#020a12] text-xs opacity-54">75%</span>
										<div className="w-30 mx-2.5 bg-[#EBEBEB] h-2.5 rounded-lg">
											<div className="w-22  bg-[#1268B3] h-2.5 rounded-[50px]"></div>
										</div>
									</div>
									<button className="font-semibold text-[#288AD7] bg-[#f1faff] px-2.5 py-1.5   text-xs">
										Continue
									</button>
								</div>
								{/* <div className="flex">
									<div className="my-2 mb-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											{slide.duration}
										</span>
										{slide.unit}
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											{slide.rating}
										</span>{" "}
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											{slide.role}
										</span>{" "}
									</div>
								</div> */}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default ContinueLearningSlider;
