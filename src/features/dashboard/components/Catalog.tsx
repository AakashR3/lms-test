import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "~/config/store";
import { useGetCatalogListQuery } from "~/features/dashboard/store";
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
const Catalog = () => {
	// const imageUrl = import.meta.env.VITE_APP_IMG_URL;
	const { data, isLoading } = useGetCatalogListQuery("a");
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
			<div className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 mb-4">
				Catalog
			</div>
			<div className="mt-5 rounded-lg bg-white flex px-[6px] w-fit">
				{distinctCatalog.map((catalog: any) => (
					<button
						key={catalog}
						onClick={() => {
							setCatalogDetails([]);
							setTimeout(() => setSelectedCatalog(catalog), 0);
						}}
						className={`px-[10px] py-[7px] text-slate-500 rounded-lg text-[14px] font-bold my-1 ${
							selectedCatalog === catalog && "bg-slate-150 p-4 dark:bg-navy-700"
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
								className={`bg-white px-5 py-5 flex rounded-lg   keen-slider__slide number-slide${index}  `}
							>
								<img src={"assets/images/user-pic.svg"} alt="profile" className="w-18 h-18" />
								{/* <img src={imageUrl+item.CategoryImageFileName} alt="profile" className="w-18 h-18" /> */}
								<div className="flex flex-col justify-center ml-5 max-w-[180px]">
									<span className="mt-[6px] line-clamp-1 text-base font-medium text-slate-600 dark:text-navy-100">
										{item.CategoryName}
									</span>
									<span className=" mt-1 text-xs text-slate-400 dark:text-navy-300">
										{item.CourseCount} courses
									</span>
								</div>
							</div>
						))}
					</div>
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
				</div>
			</div>
		</div>
	);
};

export default Catalog;
