import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";

const dataSlider = [
	{
		id: 1,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	},
	{
		id: 2,
		img: "/assets/images/Placeholder-2.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V7",
		desc: " The Advanced Assembly Design course continues where 103 - Assembly Design",
		duration: "26",
		unit: "hrs",
		rating: "4.1",
		role: "Beginner"
	},
	{
		id: 3,
		img: "/assets/images/Placeholder-3.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V0",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "06",
		unit: "mnt",
		rating: "4.7",
		role: "Advanced"
	},
	{
		id: 4,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	},
	{
		id: 5,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	},
	{
		id: 6,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	},
	{
		id: 7,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	},
	{
		id: 8,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	},
	{
		id: 9,
		img: "/assets/images/Placeholder-1.png",
		title: "Advanced Assemblies Design",
		tags: "CATIA V5",
		desc: "The Advanced Assembly Design course continues where 103 - Assembly Design with packs",
		duration: "16",
		unit: "hrs",
		rating: "4.5",
		role: "Advanced"
	}
];

export function NewCourseSlider({ prevTrigger, nextTrigger, disableSlideNavigation }: any) {
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
						<div className="flex flex-col w-82 h-95 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src={`${slide.img}`} alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
									<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">
										{slide.tags}
									</span>
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">{slide.title}</span>
									<div className="my-2 text-[#697179] text-[14px] font-normal leading-[17px] line-clamp-2">
										{slide.desc}
									</div>
								</div>
								<div className="flex">
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
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default NewCourseSlider;
