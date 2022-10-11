import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
const dataSlider = [
	{
		id: 0,
		img: "/assets/images/Sub-1.png",
		title: "3D Experience training",
		course: 44,
		price: 7150
	},
	{
		id: 1,
		img: "/assets/images/Sub-2.png",
		title: "Autodesk training",
		course: 44,
		price: 7150
	},
	{
		id: 2,
		img: "/assets/images/Sub-3.png",
		title: "Advanced Assemblies Design",
		course: 44,
		price: 7150
	},
	{
		id: 3,
		img: "/assets/images/Sub-1.png",
		title: "CATIA V5 training",
		course: 44,
		price: 7150
	},
	{
		id: 4,
		img: "/assets/images/Sub-2.png",
		title: "GD&T training",
		course: 44,
		price: 7150
	},
	{
		id: 5,
		img: "/assets/images/Sub-3.png",
		title: "3D Experience training",
		course: 44,
		price: 7150
	},
	{
		id: 6,
		img: "/assets/images/Sub-1.png",
		title: "Autodesk training",
		course: 44,
		price: 7150
	},
	{
		id: 7,
		img: "/assets/images/Sub-2.png",
		title: "CATIA V5 training",
		course: 44,
		price: 7150
	},
	{
		id: 8,
		img: "/assets/images/Sub-3.png",
		title: "GD&T training",
		course: 44,
		price: 7150
	}
];

export function TrendingSubscriptionsSlider({ prevTrigger, nextTrigger, disableSlideNavigation }: any) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		instanceRef?.current?.prev();
	}, [prevTrigger]);

	useEffect(() => {
		instanceRef?.current?.next();
	}, [nextTrigger]);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		loop: false,
		slides: {
			perView: 4,
			spacing: 10
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
			<div ref={sliderRef} className="keen-slider" style={{ width: "100%" }}>
				{dataSlider.map((slide, index) => (
					<div key={slide.id} className={`flex keen-slider__slide number-slide${index}`}>
						<div className="my-6 flex mx-6 ml-0 w-full">
							<div className="flex flex-col w-full rounded-lg border border-solid border-[#D7DBE0] ">
								<div className="mb-6">
									<img className="object-cover w-full " src={slide.img} alt="Placeholder" />
								</div>
								<div className="mx-6 mb-6">
									<div className="flex flex-col">
										<span className="font-bold text-[#25313D] text-base">{slide.title}</span>
										<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
											{slide.course} courses
										</div>
									</div>
									<div className="flex mt-9 mb-3">
										<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
											<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
												{slide.price}
											</span>{" "}
											/per user
										</div>
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

export default TrendingSubscriptionsSlider;
