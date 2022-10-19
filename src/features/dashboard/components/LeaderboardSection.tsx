import { Icon } from "@iconify/react";
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
			<div className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 mb-4">
				Leaderboard
			</div>
			<div className="col-span-12 bg-white rounded-lg">
				<table className="is-hoverable w-full text-left">
					<thead>
						<tr>
							<th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5   lg:px-5">
								NAME
							</th>
							<th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
								JOB
							</th>
							<th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
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
											className={`ml-3  font-bold   text-xs+ ${
												item.name === "You" ? "text-primary " : "text-slate-500"
											}`}
										>
											{item.name}
										</span>
									</div>
								</td>
								<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
									<div className="flex items-center">
										<Icon icon="mingcute:copper-coin-line" color="rgba(250, 164, 26, 1)" />
										<span className="ml-2 font-bold   text-xs+  ">{item.points}</span>
									</div>
								</td>
								<td className="whitespace-nowrap px-3 py-3 sm:px-5">
									<div className="flex items-center justify-end">
										<span className="mr-2 font-bold   text-xs+  ">{item.position}</span>
										{item.name === "You" ? (
											<Icon icon="akar-icons:arrow-down" color="rgba(79, 198, 102, 1)" />
										) : (
											<Icon icon="akar-icons:arrow-up" color="rgba(216, 92, 87, 1)" />
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
