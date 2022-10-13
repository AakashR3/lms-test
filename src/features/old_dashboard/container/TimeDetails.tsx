import TimeSpentChart from "../components/TimeSpentChart";

const timeDetails = [
	{
		id: 1,
		img: "/assets/images/tiny-time-icon.png",

		desc: "Time spent",
		duration: "40h",
		minute: "10m",
		status: "pass",
		percentage: "3.84%"
	},
	{
		id: 2,
		img: "/assets/images/education.png",

		desc: "Courses completed",
		duration: "02",
		minute: "10m",
		status: "fail",
		percentage: "10.05%"
	},
	{
		id: 3,
		img: "/assets/images/book.png",

		desc: "Assessments completed",
		duration: "01",
		minute: "10m",
		status: "pass",
		percentage: "24%"
	}
];

const TimeDetails = () => {
	return (
		<div className="w-full rounded bg-white px-6 py-6  flex flex-col mb-6">
			<div className="flex justify-between mb-6">
				<span className="text-[#232D42] text-2xl font-bold leading-7">Time spent</span>
			</div>
			<div className="flex w-full h-60 ">
				<div className="w-full h-full">
					{" "}
					<TimeSpentChart />
				</div>
				<div className="flex flex-col justify-between mt-2">
					<div className="w-full h-auto flex space-x-6 mb-6">
						{timeDetails.map(item => (
							<>
								<div className="w-42.5 h-26 rounded border border-solid border-[#EEEEEE] pt-4 pb-6 pl-4 pr-2">
									<div className="flex items-center">
										{" "}
										<span>
											<img src={item.img} alt="icon" />
										</span>
										<span className="ml-1.75 font-semibold text-[#020a12] text-[14px] opacity-74">
											{item.duration}
										</span>
										{item.minute && (
											<span className="font-semibold text-[#020a12] text-[14px] ml-1 opacity-74">
												{item.minute}
											</span>
										)}
									</div>
									<div className="mt-2 mb-2 text-[12px] text-[#020a12] opacity-54">{item.desc}</div>
									<div className="h-6 w-20 flex-1 rounded-[4px] bg-[#E6F7E9] px-2 flex items-center justify-center">
										{item.status === "pass" ? (
											<>
												<div className="mr-2">
													<img src="/assets/images/pass.png" alt="tiny-time-icon" />
												</div>
												<span className="text-[12px] text-[#4FC666] font-normal">
													{item.percentage}
												</span>{" "}
											</>
										) : (
											<>
												<div className="mr-2">
													<img src="/assets/images/failure.png" alt="tiny-time-icon" />
												</div>
												<span className="text-[12px] text-[#D85C57] font-normal">
													{item.percentage}
												</span>
											</>
										)}
									</div>
								</div>
							</>
						))}
					</div>
					<div className="w-full h-16 rounded bg-[#e6f7e9] flex items-center bg-opacity-30">
						<div className="mx-4">
							<img src="/assets/images/learn-path.png" alt="learn-path" />
						</div>
						<span className="font-semibold text-[21px] text-[#4FC666] mr-4">60%</span>
						<span className="font-medium text-[14px]  text-[#020a12]   opacity-54">
							Your productivity is 60% higher compare to last week
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeDetails;
