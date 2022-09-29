import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";

const dataSlider = [
	{
		id: 1,
		img: "/assets/images/learning.svg",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	},
	{
		id: 2,
		img: "/assets/images/learning.svg",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	},
	{
		id: 3,
		img: "/assets/images/learning.svg",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	},
	{
		id: 4,
		img: "/assets/images/learning.svg",
		title: "Advanced Assemblies Design",
		completed: 16,
		total: 30,
		type: "lessons",
		duration: "40 mins",
		percentage: "70%"
	}
];

export function LearningPathSlider({ prevTrigger, nextTrigger, disableSlideNavigation }: any) {
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
					<div key={slide.id} className={`my-6 flex keen-slider__slide number-slide${index}`}>
						<div className="w-62.25 h-82.75 border-solid border-[#D7DBE0]  border-[0.5px] rounded-lg">
							<div className="mb-4">
								<img className="object-cover w-62.5 h-33.5" src={`${slide.img}`} alt="Placeholder" />
							</div>

							<div className="mx-6 my-6 flex-1">
								<span className="font-bold text-[#25313D] text-base ">{slide.title}</span>

								<div className="font-normal text-[#020a12] mt-2  text-xs opacity-54">
									<span>
										{slide.completed}/{slide.total} {slide.type}
									</span>
									<span className="ml-4">{slide.duration}</span>
								</div>

								<div className="mt-4.5 flex items-center justify-between mb-2.5">
									<div className="flex items-center">
										<span className="font-normal text-[#020a12] text-xs opacity-54">75%</span>
										<div className="w-30 mx-2.5 bg-[#EBEBEB] h-2.5 rounded-lg">
											<div className="w-22  bg-[#1268B3] h-2.5 rounded-[50px]"></div>
										</div>
									</div>
								</div>
								<button className="font-semibold text-[#288AD7]  rounded  border border-solid w-full h-10.5  text-xs">
									View Certificate
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default LearningPathSlider;
