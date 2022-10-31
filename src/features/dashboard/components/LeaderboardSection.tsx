import { Icon } from "@iconify/react";
import { useGetLeaderBoardQuery } from "~/features/dashboard/store";
import { useAppSelector } from "~/config/store";

const leaderBoardTest = [
	{
		FirstName: "Eleanor",
		LastName: "Pena",
		Points: 100,
		position: 3,
		icon: "/assets/images/profile-1.svg"
	},
	{
		FirstName: "Jane",
		LastName: "Cooper",
		Points: 99,
		position: 2,
		icon: "/assets/images/profile-2.svg"
	},
	{
		FirstName: "Robert",
		LastName: "Fox",
		Points: 98,
		position: 1,
		icon: "/assets/images/profile-3.svg"
	},
	{
		name: "You",
		FirstName: "You",
		LastName: "",
		Points: 5,
		position: 1,
		icon: "/assets/images/profile-4.svg"
	}
];

interface IProps {
	type?: string;
}
const LeaderboardSection = ({ type }: IProps) => {
	useGetLeaderBoardQuery("154067");
	const { leaderBoard } = useAppSelector((state: any) => state.dashboard);

	return (
		<div className="col-span-12 lg:col-span-4">
			<div className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 mb-4">
				Leaderboard
			</div>
			<div className="grid-cols-12 grid bg-white rounded-lg  h-5/6">
				{type === "basic" ? (
					<div className=" px-6 py-[26px] col-span-12 flex justify-center items-center flex-col">
						<img src="assets/images/leader-board.svg" alt="leader-board"></img>

						<div className="pt-6 text-center">
							Get the most out of igetit features like leaderboard by subscribing
						</div>
					</div>
				) : (
					<div className="col-span-12  ">
						<table className="is-hoverable w-full text-left">
							<thead>
								<tr>
									<th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5   lg:px-5">
										NAME
									</th>
									<th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
										POINTS
									</th>
								</tr>
							</thead>
							<tbody>
								{leaderBoardTest.map((item: any, index: number) => (
									<tr
										key={index}
										className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
									>
										<td className="whitespace-nowrap px-4 py-1  sm:px-5">
											<div className="flex items-center">
												<div className="avatar h-8 w-8">
													<div className="is-initial rounded-full bg-[#048BCE] text-lg uppercase text-white">
														{item.FirstName.charAt(0)} {item.LastName.charAt(0)}
													</div>
												</div>
												<span
													className={`ml-3  font-bold   text-xs+ ${
														item.FirstName === "You" ? "text-primary " : "text-slate-500"
													}`}
												>
													{item.FirstName} {item.LastName}
												</span>
											</div>
										</td>
										<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
											<div className="flex items-center">
												<Icon icon="mingcute:copper-coin-line" color="rgba(250, 164, 26, 1)" />
												<span className="ml-2 font-bold   text-xs+  ">{item.Points}</span>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default LeaderboardSection;
