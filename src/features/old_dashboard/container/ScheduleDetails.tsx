const scheduleDetails = [
	{
		id: 1,
		img: "/assets/images/role-certificate.svg",
		title: "Advanced assembly design",
		tag: "CATIA V5",
		duration: "4hr ago"
	},
	{
		id: 2,
		img: "/assets/images/role-certificate.svg",
		title: "Advanced part design",
		tag: "CATIA V5",
		duration: "10hr ago"
	},
	{
		id: 3,
		img: "/assets/images/role-certificate.svg",
		title: "Assembly design",
		tag: "CATIA V5",
		duration: "14hr ago"
	},
	{
		id: 4,
		img: "/assets/images/role-certificate.svg",
		title: "CATIA V5 introduction",
		tag: "CATIA V5",
		duration: "14hr ago"
	}
];
const ScheduleDetails = () => {
	const curr = new Date();
	curr.setDate(curr.getDate() + 3);
	const date = curr.toISOString().substring(0, 10);
	return (
		<div className="flex w-full space-x-6 mb-6">
			<div className="w-full rounded bg-white px-6 py-6 flex flex-col">
				<div className="flex justify-between mb-6">
					<span className="text-[#232D42] text-2xl font-bold leading-7">Transcript</span>
					<button className="font-semibold text-[14px] text-[#1268B3]">View all</button>
				</div>
				<div className="grid grid-cols-2 gap-6">
					{scheduleDetails.map(item => (
						<div className="w-61 h-48.5 relative" style={{ backgroundImage: `url(${item.img})` }}>
							<div className="absolute bottom-8 ml-6 ">
								<span className="font-bold text-[14px] text-white">{item.title}</span>
								<div className="mt-1 text-[12px] font-normal text-white flex space-x-1.5">
									<span>{item.tag}</span>
									<span className="list-outside list-disc">.</span>
									<span>{item.duration}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full rounded bg-white px-6 py-6 flex flex-col">
				<div className="flex justify-between mb-6">
					<span className="text-[#232D42] text-2xl font-bold leading-7">Upcoming events</span>
					<input
						type="date"
						id="birthday"
						name="birthday"
						data-date-format="DD/MMMM/YYYY"
						defaultValue={date}
						className="datePicker"
					></input>
				</div>
				<div className="flex flex-col">
					<div className=" px-4 py-2 mx-2 mb-4 rounded border-l-4 border-l-[#1268B3]   w-full h-full bg-[#E2F5FF] bg-opacity-30 h-[127px] bg-red">
						<div className="flex justify-between">
							<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
								<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">CATIA V5</span>
							</div>
							<button className="bg-[#1268B3] text-white px-4 py-2 mx-2 my-2 rounded-lg">Join</button>
						</div>
						<div className="text-[#25313D] font-bold"> Advanced Assemblies Design</div>
						<div className="text-[#697179] font-normal text-[14px] pt-2  ">09:00 PM - 10:00 AM</div>
					</div>

					<div className=" px-4 py-2 mx-2 mb-4 rounded border-l-4 border-l-[#1268B3]   w-full h-full bg-[#E2F5FF] bg-opacity-30 h-[127px] bg-red">
						<div className="flex justify-between">
							<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
								<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">CATIA V5</span>
							</div>
							<button className="bg-[#1268B3] text-white px-4 py-2 mx-2 my-2 rounded-lg">Join</button>
						</div>
						<div className="text-[#25313D] font-bold"> Advanced Assemblies Design</div>
						<div className="text-[#697179] font-normal text-[14px] pt-2  ">09:00 PM - 10:00 AM</div>
					</div>
					<div className=" px-4 py-2 mx-2 mb-4 rounded border-l-4 border-l-[#1268B3]   w-full h-full bg-[#E2F5FF] bg-opacity-30 h-[127px] bg-red">
						<div className="flex justify-between">
							<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
								<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">CATIA V5</span>
							</div>
							<button className="bg-[#1268B3] text-white px-4 py-2 mx-2 my-2 rounded-lg">Join</button>
						</div>
						<div className="text-[#25313D] font-bold"> Advanced Assemblies Design</div>
						<div className="text-[#697179] font-normal text-[14px] pt-2  ">09:00 PM - 10:00 AM</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScheduleDetails;
