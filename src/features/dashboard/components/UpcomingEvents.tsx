import { useGetUpcomingEventsListQuery } from "~/features/dashboard/store";
import { useAppSelector } from "~/config/store";

const eventsTestData = [
	{
		index: "01",
		EventName: "Advanced part design",
		CategoryName: "CATIA V5",
		EventDate: "28 Oct 2022",
		EventTime: "12:00:00"
	},
	{
		index: "02",
		EventName: "Advanced part design",
		CategoryName: "CATIA V5",
		EventDate: "28 Oct 2022",
		EventTime: "12:00:00"
	}
];

const UpcomingEvents = () => {
	const { data, isLoading } = useGetUpcomingEventsListQuery({ userID: "595", eventPeriod: "W" });
	const { upcomingEventsList } = useAppSelector((state: any) => state.dashboard);

	return (
		<>
			<div className="col-span-12 lg:col-span-8 row-span-full">
				<div className="text-base mb-4 font-medium tracking-wide text-slate-700 line-clamp-1">
					Upcoming Events
				</div>
				<div className="bg-white p-6">
					<div className="grid grid-cols-3 gap-6">
						<div className="border border-slate-150  rounded-lg bg-[#048BCE]">
							<div className="flex justify-between">
								<p className="m-3 text-xs text-[#FFFFFF] font-semibold font-inter lg:text-sm">TODAY</p>
							</div>
							<p className="m-3 mt-6">
								<span className="text-2xl text-[#FFFFFF] font-bold font-inter lg:text-2xl">
									{upcomingEventsList.length}
								</span>
								<span className="ml-2 text-xs text-[#FFFFFF] font-inter lg:text-sm">events</span>
							</p>
						</div>
						<div className="border border-slate-150  rounded-lg bg-white">
							<div className="flex justify-between">
								<p className="m-3 text-xs font-semibold font-inter lg:text-sm">WEEK</p>
							</div>
							<p className="m-3 mt-6">
								<span className="text-2xl font-bold font-inter lg:text-2xl">
									{upcomingEventsList.length}
								</span>
								<span className="ml-2 text-xs font-inter lg:text-sm">events</span>
							</p>
						</div>
						<div className="border border-slate-150  rounded-lg bg-white">
							<div className="flex justify-between">
								<p className="m-3 text-xs font-semibold font-inter lg:text-sm">MONTH</p>
							</div>
							<p className="m-3 mt-6">
								<span className="text-2xl font-bold font-inter lg:text-2xl">32</span>
								<span className="ml-2 text-xs font-inter lg:text-sm">events</span>
							</p>
						</div>
					</div>
					<div className="mt-6">
						<table className="mb-48 border border-slate-150 is-hoverable w-full text-left">
							<thead>
								<tr className="font-inter font-medium text-sm text-[#020A12]/60 rounded-tl-lg">
									<th className=" px-4 py-3 lg:px-5">EVENT NAME</th>
									<th className=" px-4 py-3 lg:px-5">CATEGORY</th>
									<th className=" px-4 py-3 lg:px-5">DATE</th>
									<th className=" px-4 py-3 lg:px-5">TIME</th>
									<th className=" px-4 py-3 lg:px-5">ACTION</th>
									<th className=" px-1 lg:px-5"></th>
								</tr>
							</thead>
							<tbody>
								{upcomingEventsList.map((item: any, index: number) => (
									<>
										<tr className={"border border-slate-150"} key={index}>
											<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
												<div className="flex text-left">
													<p className="ml-2 text-sm font-dmsans text-[#020A12]/60">
														{item.EventName}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
												<div className="flex text-left">
													<p className="text-sm font-dmsans text-[#020A12]/60">
														{item.CategoryName}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-1  sm:px-5">
												<div className="flex text-left">
													<p className="ml-2 mt-2 text-sm font-dmsans text-[#020A12]/60">
														{item.EventDate}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
												<div className="flex text-left">
													<p className="text-sm font-dmsans text-[#020A12]/60">
														{item.EventTime}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-3 py-3 sm:px-5">
												<div className="flex text-left">
													<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors bg-[#E9EEF5] text-[#1268B3] font-semibold hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
														Join
													</button>
												</div>
											</td>
										</tr>
									</>
								))}
							</tbody>
						</table>
					</div>

					<div className="flex flex-col items-center bg-white justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
						<div className="text-sm">
							1 - {upcomingEventsList.length} of {upcomingEventsList.length} events
						</div>

						<ul className="pagination inline-flex items-center -space-x-px">
							<li className="rounded-l-full bg-[#E9EEF5]">
								<button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
									</svg>
								</button>
							</li>
							<li className="bg-slate-150 ">
								<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 ">
									1
								</button>
							</li>
							<li className="bg-slate-150 ">
								<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-[#1268B3] px-3 leading-tight text-white transition-colors hover:bg-[#1268B3]-focus focus:bg-[#1268B3]-focus active:bg-[#1268B3]-focus/90">
									2
								</button>
							</li>
							<li className="bg-slate-150 ">
								<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
									3
								</button>
							</li>
							<li className="bg-slate-150 ">
								<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
									4
								</button>
							</li>
							<li className="bg-slate-150">
								<button className="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
									5
								</button>
							</li>
							<li className="rounded-r-full bg-slate-150">
								<button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
export default UpcomingEvents;
