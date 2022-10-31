import { useState } from "react";
import CircularProgress from "./CircleProgressBar";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const chartOptions: ApexOptions = {
	chart: {
		id: "basic-bar",
		zoom: {
			enabled: false
		},
		toolbar: {
			show: false
		}
	},
	colors: ["#FFFFFF"],
	grid: {
		show: false
	},
	xaxis: {
		categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		labels: {
			show: false
		},
		axisTicks: {
			show: false
		},
		axisBorder: {
			show: false
		},
		crosshairs: {
			show: false
		}
	},
	yaxis: {
		min: 0,
		max: 100,
		tickAmount: 4,
		labels: {
			show: false
		},
		axisTicks: {
			show: false
		},
		axisBorder: {
			show: false
		},
		crosshairs: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
	},
	markers: {
		size: 0
	},
	stroke: {
		show: true,
		curve: "straight",
		width: 2
	},
	tooltip: {
		enabled: false
	}
};

const data = {
	options: chartOptions,
	series: [
		{
			name: "series-1",
			data: [0, 10, 50, 25, 75, 25, 50]
		}
	]
};

const CurrentRoleSection = () => {
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
		<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
			<div className="col-span-12 lg:col-span-8  rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#4F46E5]   shadow-soft print:border">
				<div className="flow-root">
					<div className="inline-flex float-right">
						<button
							onClick={(): void => toggleDropDown()}
							onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3.5 w-3.5 text-[#FFFFFF] rotate-90 mr-5.5 mt-5.5 rounded-full"
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
							<div className="absolute left-100 rounded-md border border-slate-150 bg-white py-1.5 font-inter">
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
										<button className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800">
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
				<div className="grid grid-cols-12 p-8 gap-4 sm:gap-5 lg:gap-6">
					<div className="col-span-12 lg:col-span-7">
						<p className="font-dmsans font-normal tracking-wide text-white lg:text-sm">Current role</p>
						<p className="font-dmsans font-bold tracking-wide text-white lg:text-xl">CAE Analyst</p>
						<div className="flex items-center tracking-wide space-x-2 mt-2 text-white lg:text-sm">
							<p className="font-dmsans font-normal text-sm lg:text-lg ">You are progressing </p>
							<p className="bg-[#FFFFFF]/20 text-sm lg:text-lg text-white font-bold mr-2 px-2 py-1 rounded-2xl">
								36%
							</p>
							<p className="font-dmsans font-normal text-sm lg:text-lg">faster than </p>
						</div>
						<p className="font-dmsans font-normal tracking-wide text-white text-sm lg:text-lg">
							other learners in your current role!
						</p>
					</div>
					<div className="col-span-12 lg:col-span-5 hidden lg:block">
						<Chart options={data.options} series={data.series} type="line" height={"100px"} />
					</div>
				</div>
			</div>
			<div className="col-span-12 lg:col-span-4 rounded-lg bg-gradient-to-r from-[#818CF8] to-[#F9A8D4]   shadow-soft print:border">
				<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
					<div className="col-span-12 lg:col-span-8 mt-7 ml-6">
						<div className="flex items-center tracking-wide space-x-2 text-white max-w-2xl">
							<p className="font-dmsans font-normal text-sm">
								Complete your profile to access all the features, and preferences based recommendations
							</p>
						</div>
						<div className="mt-6 mb-6 text-xs lg:text-sm">
							<button className="flex items-center justify-center font-inter font-semibold rounded-lg text-[#FFFFFF] bg-[#FFFFFF]/40 px-6 py-3">
								Go to profile
								<svg
									className="ml-2.5"
									width="12"
									height="10"
									viewBox="0 0 12 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.80473 0.757765L11.5759 4.52899C11.8363 4.78933 11.8363 5.21146 11.5759 5.47179L7.80473 9.24306C7.5444 9.50339 7.12227 9.50339 6.86193 9.24306C6.60153 8.98272 6.60153 8.56059 6.86193 8.30026L9.49507 5.66706H0.666667C0.29848 5.66706 0 5.36859 0 5.00039C0 4.63219 0.29848 4.33372 0.666667 4.33372H9.49507L6.86193 1.70057C6.60153 1.44022 6.60153 1.01811 6.86193 0.757765C7.12227 0.497412 7.5444 0.497412 7.80473 0.757765Z"
										fill="#FFFFFF"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-4">
						<div className="flex my-9 mr-8">
							<div className="w-26 h-26  hidden lg:block">
								<CircularProgress />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentRoleSection;
