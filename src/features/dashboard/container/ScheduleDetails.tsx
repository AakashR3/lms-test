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
					<span className="text-[#232D42] text-2xl font-bold leading-7">Event Calendar</span>
					<button className="font-semibold text-[14px] text-[#1268B3]">View all</button>
				</div>
				<div className="flex-1 items-center justify-center flex">
					<img src="/assets/images/empty-calendar.png" alt="calendar" />
				</div>
			</div>
		</div>
	);
};

export default ScheduleDetails;
