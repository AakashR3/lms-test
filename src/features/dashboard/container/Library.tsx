import { useState } from "react";
const Library = () => {
	const [active, setActive] = useState<string>("Autodesk");

	const libraryAssests = [
		{
			name: "Additive manufacturing",
			img: "/assets/images/lib-1.png"
		},
		{
			name: "ISO GPS",
			img: "/assets/images/lib-2.png"
		},
		{
			name: "Product Lifecycle management",
			img: "/assets/images/lib-3.png"
		},
		{
			name: "Finite Element Analysis",
			img: "/assets/images/lib-4.png"
		},
		{
			name: "Project management",
			img: "/assets/images/lib-5.png"
		},
		{
			name: "Automotive",
			img: "/assets/images/lib-6.png"
		},
		{
			name: "GD&T",
			img: "/assets/images/lib-7.png"
		},
		{
			name: "Plastics",
			img: "/assets/images/lib-8.png"
		}
	];

	const actions = ["Dassault Systems", "Siemens PLM", "Engineering Topics", "Autodesk", "PTC Training"];
	return (
		<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mb-6 xl:col-span-2 xl:mx-auto">
			<span className="text-[#232D42] text-2xl font-bold leading-7">Catalog</span>
			<span className="font-medium text-base text-[#020A12] opacity-[.6] mt-2">
				Select a software or domain category to see the courses offered.
			</span>
			<section className="flex flex-col">
				<div className="my-6 flex">
					{actions.map(item => (
						<button
							onClick={() => setActive(item)}
							className={`flex px-3 cursor-pointer items-center mr-6 h-8 text-[rgba(0,0,0,0.6)] font-medium border rounded-[4px] border-color[rgba(0, 0, 0, 0.08)] ${
								active === item && "bg-[#1869B3] text-white"
							}`}
						>
							{item}
						</button>
					))}
				</div>
				<div className="grid grid-cols-4 gap-6">
					{libraryAssests.map(item => (
						<div
							className={`h-47.5 relative bg-no-repeat bg-cover rounded-lg`}
							style={{ backgroundImage: `url(${item.img})` }}
						>
							<div className="text-white ml-6 text-[14px] absolute bottom-10">{item.name}</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Library;
