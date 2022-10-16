const leaderBoard = [
	{
		name: "Eleanor Pena",
		points: 100,
		position: 3,
		icon: "/assets/images/profile-1.svg"
	},
	{
		name: "Jane Cooper",
		points: 99,
		position: 2,
		icon: "/assets/images/profile-2.svg"
	},
	{
		name: "Robert Fox",
		points: 98,
		position: 1,
		icon: "/assets/images/profile-3.svg"
	},
	{
		name: "You",
		points: 5,
		position: 1,
		icon: "/assets/images/profile-4.svg"
	}
];
const LeaderboardSection = () => {
	return (
		<div className="col-span-12 lg:col-span-4">
			<div className="text-[18px] font-bold text-title mb-4">Leaderboard</div>
			<div className="col-span-12 bg-white rounded-lg">
				<table className="is-hoverable w-full text-left">
					<thead>
						<tr className="bg-[#E2E8F0] ">
							<th className="whitespace-nowrap rounded-tl-lg  px-4 py-3 font-semibold uppercase    lg:px-5">
								NAME
							</th>
							<th className="whitespace-nowrap   px-4 py-3 font-semibold uppercase   lg:px-5">JOB</th>
							<th className="whitespace-nowrap  rounded-tr-lg px-3 py-2 font-semibold uppercase   lg:px-5">
								POSITION
							</th>
						</tr>
					</thead>
					<tbody>
						{leaderBoard.map(item => (
							<tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
								<td className="whitespace-nowrap px-4 py-1  sm:px-5">
									<div className="flex items-center">
										<img src={item.icon} alt="icon" />
										<span
											className={`ml-3  font-bold leading-[18px] text-[14px] ${
												item.name === "You" ? "text-[#1268B3]" : "text-sub-title"
											}`}
										>
											{item.name}
										</span>
									</div>
								</td>
								<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
									<div className="flex items-center">
										<img src={"/assets/images/batch-coin.png"} alt="batch-coin" />
										<span className="ml-2 font-bold leading-[18px] text-[14px] text-[#6A7681]">
											{item.points}
										</span>
									</div>
								</td>
								<td className="whitespace-nowrap px-3 py-3 sm:px-5">
									<div className="flex items-center justify-end">
										<span className="mr-2 font-bold leading-[18px] text-[14px] text-[#6A7681]">
											{item.position}
										</span>
										{item.name === "You" ? (
											<img src={"/assets/images/down-arrow.svg"} alt="batch-coin" />
										) : (
											<img src={"/assets/images/up-arrow.svg"} alt="batch-coin" />
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LeaderboardSection;
