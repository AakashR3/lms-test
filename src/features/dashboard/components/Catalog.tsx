import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetCatalogListMutation } from "~/features/dashboard/store";
const items = [
	{
		name: "Dassault Systems"
	},
	{
		name: "Seimens PLM"
	},
	{
		name: "Engineering topics"
	},
	{
		name: "Autodesk"
	},
	{
		name: "PTC Training"
	}
];
const catalogItems = [
	{
		id: 1,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 2,
		name: "PLM (Product life cycle management)",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 3,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 4,
		name: "PLM (Product life cycle management)",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 5,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 6,
		name: "PLM (Product life cycle management)",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 7,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 8,
		name: "PLM (Product life cycle management)",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 9,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 10,
		name: "PLM (Product life cycle management)",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 11,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 12,
		name: "PLM (Product life cycle management)",
		course: 44,
		image: "assets/images/user-pic.svg"
	},
	{
		id: 13,
		name: "Additive manufacturing",
		course: 44,
		image: "assets/images/user-pic.svg"
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
const Catalog = () => {
	// const imageUrl = import.meta.env.VITE_APP_IMG_URL;
	const [getCatalogList, { isLoading }] = useGetCatalogListMutation();
	const [selectedCatalog, setSelectedCatalog] = useState();
	const { catalogList } = useAppSelector((state: any) => state.dashboard);
	const [distinctCatalog, setDistinctCatalog] = useState([]);
	const [catalogDetails, setCatalogDetails] = useState([]);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			initial: 1,
			loop: false,
			breakpoints: {
				"(min-width: 400px)": {
					slides: { perView: 2, spacing: 24 }
				},
				"(min-width: 992px)": {
					slides: { perView: 3, spacing: 24 }
				}
			}
		},
		[ResizePlugin]
	);
	useEffect(() => {
		getCatalogList(1);
	}, []);
	useEffect(() => {
		setDistinctCatalog(Array.from(new Set(catalogList.map(({ CatalogCategoryName }: any) => CatalogCategoryName))));
	}, [catalogList]);

	useEffect(() => {
		setSelectedCatalog(distinctCatalog[0]);
	}, [distinctCatalog]);

	useEffect(() => {
		setCatalogDetails(catalogList.filter((item: any) => item.CatalogCategoryName === selectedCatalog));
	}, [selectedCatalog]);

	return (
		<div className="mt-8 w-full">
			<div className="text-[18px] font-bold text-title mb-4">Catalog</div>
			<div className="mt-5 rounded-lg bg-white flex px-[6px] w-fit">
				{distinctCatalog.map((catalog: any) => (
					<button
						onClick={() => setSelectedCatalog(catalog)}
						className={`px-[10px] py-[7px] text-[#020a1299] rounded-lg text-[14px] font-bold my-1 ${
							selectedCatalog === catalog && "bg-[#F1F5F9]"
						}`}
					>
						{catalog}
					</button>
				))}
			</div>
			<div className="mt-6">
				<div className="relative">
					<div className="flex keen-slider overflow-hidden w-full" ref={sliderRef}>
						{catalogDetails.map((item: any, index: number) => (
							<div
								key={index}
								className={`bg-white px-5 py-5 flex rounded-lg    keen-slider__slide number-slide${index}`}
							>
								<img src={"assets/images/user-pic.svg"} alt="profile" className="w-18 h-18" />
								{/* <img src={imageUrl+item.CategoryImageFileName} alt="profile" className="w-18 h-18" /> */}
								<div className="flex flex-col justify-center ml-5 max-w-[180px]">
									<span className="font-bold text-[#25313D] text-sm">{item.CategoryName}</span>
									<span className="mt-1">{item.CourseCount} courses</span>
								</div>
							</div>
						))}
					</div>
					<button
						className="lg:flex hidden  items-center justify-center cursor-pointer shadow-[0px_0px_7px] shadow-[#00000017] bg-white w-[52px] h-[52px] rounded-[50%] top-[50%] absolute translate-y-[-50%] left-[-2.25%]"
						onClick={() => instanceRef?.current?.prev()}
					>
						<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.911067 6.58976C0.585634 6.26434 0.585634 5.73667 0.911067 5.41126L5.62513 0.697206C5.95055 0.371765 6.47822 0.371765 6.80363 0.697206C7.12905 1.02264 7.12905 1.55028 6.80363 1.87571L2.6788 6.00051L6.80363 10.1253C7.12905 10.4508 7.12905 10.9783 6.80363 11.3038C6.47822 11.6293 5.95055 11.6293 5.62513 11.3038L0.911067 6.58976Z"
								fill="#020A12"
								fill-opacity="0.6"
							/>
						</svg>
					</button>

					<button
						className="lg:flex hidden items-center justify-center cursor-pointer w-[52px] shadow-[0px_0px_7px] shadow-[#00000017] bg-white h-[52px] rounded-[50%] top-[50%] absolute   translate-y-[-50%] right-[-2.25%]"
						onClick={() => instanceRef?.current?.next()}
					>
						<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M7.08893 6.58976C7.41437 6.26434 7.41437 5.73667 7.08893 5.41126L2.37487 0.697206C2.04945 0.371765 1.52178 0.371765 1.19637 0.697206C0.870949 1.02264 0.870949 1.55028 1.19637 1.87571L5.3212 6.00051L1.19637 10.1253C0.870949 10.4508 0.870949 10.9783 1.19637 11.3038C1.52178 11.6293 2.04945 11.6293 2.37487 11.3038L7.08893 6.58976Z"
								fill="#020A12"
								fill-opacity="0.6"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
