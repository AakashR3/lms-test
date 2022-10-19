import { useState } from "react";

const trainingPath = [
	{
		index: "01",
		name: "CAE Learning Path",
		duration: "57hrs 35min",
		assignedBy: "Robert jr",
		noOfCourses: "03",
		icon: "/assets/images/profile-1.svg"
	},
	{
		index: "02",
		name: "CAE Learning Path",
		duration: "57hrs 35min",
		assignedBy: "Robert jr",
		noOfCourses: "03",
		icon: "/assets/images/profile-1.svg"
	},
	{
		index: "03",
		name: "CAE Learning Path",
		duration: "57hrs 35min",
		assignedBy: "Robert jr",
		noOfCourses: "03",
		icon: "/assets/images/profile-1.svg"
	},
	{
		index: "04",
		name: "CAE Learning Path",
		duration: "57hrs 35min",
		assignedBy: "Robert jr",
		noOfCourses: "03",
		icon: "/assets/images/profile-1.svg"
	}
];

const LearningPath = () => {
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const toggleDropDown = () => {
		setShowDropDown(!showDropDown);
	};
	const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
		if (event.currentTarget === event.target) {
			setShowDropDown(false);
		}
	};

	return (
		<>
			<div>
				<div className="flex items-center justify-between  mt-8">
					<div className="text-base mb-4 font-medium tracking-wide text-slate-700 line-clamp-1">
						Learning Path
					</div>
					<div className="flex">
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3.5 w-3.5 hover:bg-[#020A12]/75 rounded-full"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
						<div className="inline-flex ml-2">
							<button
								className="btn h-3.5 w-3.5 rounded-full p-0"
								onClick={(): void => toggleDropDown()}
								onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3.5 w-3.5 hover:bg-[#020A12]/75 rounded-full"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
								</svg>
							</button>
							{showDropDown && (
								<div className="absolute right-16 rounded-md border border-slate-150 bg-white py-1.5 font-inter">
									<ul>
										<li className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4.5 w-4.5 ml-2"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" />
												<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
												<polyline points="7 11 12 16 17 11" />
												<line x1="12" y1="4" x2="12" y2="16" />
											</svg>
											<button className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
												Download
											</button>
										</li>
										<li className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4.5 w-4.5 ml-2"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
											</svg>
											<button className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
												Share
											</button>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="col-span-12 bg-white rounded-lg">
					<table className="is-hoverable w-full text-left">
						<thead>
							<tr className="bg-[#E2E8F0] font-inter font-medium text-sm text-[#020A12]/60 rounded-tl-lg">
								<th className=" px-4 py-3 lg:px-5">#</th>
								<th className=" px-4 py-3 lg:px-5">Learning Path Name</th>
								<th className=" px-4 py-3 lg:px-5">Assigned By</th>
								<th className=" px-4 py-3 lg:px-5">Duration</th>
								<th className=" px-4 py-3 lg:px-5">No. of Courses</th>
							</tr>
						</thead>
						<tbody>
							{trainingPath.map(item => (
								<tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
									<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
										<div className="flex text-left">
											<p className="ml-2 text-sm font-dmsans text-[#020A12]/60">{item.index}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
										<div className="flex text-left">
											<p className="text-sm font-dmsans text-[#020A12]/60">{item.name}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-4 py-1  sm:px-5">
										<div className="flex text-left">
											<img src={item.icon} alt="icon" />
											<p className="ml-2 mt-2 text-sm font-dmsans text-[#020A12]/60">
												{item.assignedBy}
											</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
										<div className="flex text-left">
											<p className="text-sm font-dmsans text-[#020A12]/60">{item.duration}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-3 py-3 sm:px-5">
										<div className="flex text-left">
											<p className="text-sm font-dmsans text-[#020A12]/60">{item.noOfCourses}</p>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default LearningPath;
