import {
	useGetUpcomingEventsTodayListQuery,
	useGetUpcomingEventsWeekListQuery,
	useGetUpcomingEventsMonthListQuery
} from "~/features/dashboard/store";
import { useAppSelector } from "~/config/store";
import { useEffect, useState } from "react";
import _ from "lodash";

import { Fragment } from "react";

interface IProps {
	userId?: string;
}

const UpcomingEvents = ({ userId }: IProps) => {
	useGetUpcomingEventsTodayListQuery(userId);
	useGetUpcomingEventsWeekListQuery(userId);
	useGetUpcomingEventsMonthListQuery(userId);
	const { upcomingEventsTodayList, upcomingEventsTodayListMessage } = useAppSelector((state: any) => state.dashboard);
	const { upcomingEventsWeekList, upcomingEventsWeekListMessage } = useAppSelector((state: any) => state.dashboard);
	const { upcomingEventsMonthList, upcomingEventsMonthListMessage } = useAppSelector((state: any) => state.dashboard);
	const [upcomingEventsList, setUpcomingEventsList] = useState<any>(upcomingEventsTodayList);
	const [message, setMessage] = useState<any>(upcomingEventsTodayListMessage);
	const [startIndex, setStartIndex] = useState<number>(0);
	const [endIndex, setEndIndex] = useState<number>(4);
	const [noOfPages, setPages] = useState<number>(0);
	const [dayBG, setDayBG] = useState<string>("bg-[#048BCE] text-[#FFFFFF]");
	const [weekBG, setWeekBG] = useState<string>("bg-white");
	const [monthBG, setMonthBG] = useState<string>("bg-white");

	useEffect(() => {
		if (upcomingEventsList && upcomingEventsList.length > 0) {
			if (upcomingEventsList.length % 4 === 0) {
				setPages(Math.floor(upcomingEventsList.length / 4));
			} else {
				setPages(Math.floor(upcomingEventsList.length / 4) + 1);
			}
		}
	}, [upcomingEventsList, noOfPages]);

	function loadContent(pageNumber: number): void {
		let newStartIndex = 0 + 4 * pageNumber;
		let newEndIndex = 4 + 4 * pageNumber;
		if (newStartIndex > upcomingEventsList.length) {
			newStartIndex = startIndex;
		}
		if (newEndIndex > upcomingEventsList.length) {
			newEndIndex = upcomingEventsList.length;
		}
		setStartIndex(newStartIndex);
		setEndIndex(newEndIndex);
	}

	function onClickButton(eventPeriodStr: string): void {
		setPages(0);
		setStartIndex(0);
		setEndIndex(4);
		if (eventPeriodStr === "T") {
			setUpcomingEventsList(upcomingEventsTodayList);
			setMessage(upcomingEventsTodayListMessage);
			setDayBG("bg-[#048BCE] text-[#FFFFFF]");
			setWeekBG("bg-white");
			setMonthBG("bg-white");
		} else if (eventPeriodStr === "W") {
			setUpcomingEventsList(upcomingEventsWeekList);
			setMessage(upcomingEventsWeekListMessage);
			setDayBG("bg-white");
			setWeekBG("bg-[#048BCE] text-[#FFFFFF]");
			setMonthBG("bg-white");
		} else if (eventPeriodStr === "M") {
			setUpcomingEventsList(upcomingEventsMonthList);
			setMessage(upcomingEventsMonthListMessage);
			setDayBG("bg-white");
			setWeekBG("bg-white");
			setMonthBG("bg-[#048BCE] text-[#FFFFFF]");
		}
		console.log(upcomingEventsList);
	}

	return (
		<>
			<div className="col-span-12 lg:col-span-9 row-span-full">
				<div className="text-base mb-4 font-medium tracking-wide text-slate-700 line-clamp-1">
					Upcoming Events
				</div>
				<div className="bg-white p-6">
					<div className="grid grid-cols-3 gap-6">
						<div className={`border border-slate-150  rounded-lg ${dayBG}`}>
							<div className="flex justify-between">
								<button
									className="m-3 text-xs  font-semibold font-inter lg:text-sm"
									onClick={() => onClickButton("T")}
								>
									TODAY
								</button>
							</div>
							<p className="m-3 mt-6">
								<span className="text-2xl font-bold font-inter lg:text-2xl">
									{upcomingEventsTodayList.length}
								</span>
								<span className="ml-2 text-xs font-inter lg:text-sm">events</span>
							</p>
						</div>
						<div className={`border border-slate-150  rounded-lg ${weekBG}`}>
							<div className="flex justify-between">
								<button
									className="m-3 text-xs font-semibold font-inter lg:text-sm"
									onClick={() => onClickButton("W")}
								>
									WEEK
								</button>
							</div>
							<p className="m-3 mt-6">
								<span className="text-2xl font-bold font-inter lg:text-2xl">
									{upcomingEventsWeekList.length}
								</span>
								<span className="ml-2 text-xs font-inter lg:text-sm">events</span>
							</p>
						</div>
						<div className={`border border-slate-150  rounded-lg ${monthBG}`}>
							<div className="flex justify-between">
								<button
									className="m-3 text-xs font-semibold font-inter lg:text-sm"
									onClick={() => onClickButton("M")}
								>
									MONTH
								</button>
							</div>
							<p className="m-3 mt-6">
								<span className="text-2xl font-bold font-inter lg:text-2xl">
									{upcomingEventsMonthList.length}
								</span>
								<span className="ml-2 text-xs font-inter lg:text-sm">events</span>
							</p>
						</div>
					</div>
					<div className="mt-6 overflow-auto">
						<table className="mb-2 is-hoverable w-full text-left">
							<thead>
								<tr className="border border-slate-150 font-inter font-medium text-sm text-[#020A12]/60 rounded-tl-lg">
									<th className=" px-4 py-3 lg:px-5">EVENT NAME</th>
									<th className=" px-4 py-3 lg:px-5">CATEGORY</th>
									<th className=" px-4 py-3 lg:px-5">DATE</th>
									<th className=" px-4 py-3 lg:px-5">TIME</th>
									<th className=" px-4 py-3 lg:px-5">ACTION</th>
									<th className=" px-1 lg:px-5"></th>
								</tr>
							</thead>
							<tbody>
								{noOfPages > 0 ? (
									upcomingEventsList.slice(startIndex, endIndex).map((item: any, index: number) => (
										<Fragment key={item.index}>
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
										</Fragment>
									))
								) : (
									<Fragment>
										<tr className={"border border-slate-150"}>
											<td className="whitespace-nowrap px-3 py-3 sm:px-5">
												<div className="flex text-center">
													<p className="my-32 text-sm font-dmsans text-[#020A12]/60">
														{message}
													</p>
												</div>
											</td>
										</tr>
									</Fragment>
								)}
								{_.times(endIndex % 4, i => (
									<>
										<tr>
											<td className="whitespace-nowrap px-3 py-3 sm:px-5">
												<div className="flex text-left">
													<button className="disabled flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors bg-[#FFFFFF]" />
												</div>
											</td>
										</tr>
									</>
								))}
							</tbody>
						</table>
					</div>
					{noOfPages > 0 && (
						<div className="flex flex-col items-center bg-white justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
							<div className="text-sm">
								{startIndex + 1} - {endIndex} of {upcomingEventsList.length} events
							</div>

							<ul className="pagination inline-flex items-center -space-x-px">
								<li className="rounded-l-full bg-[#E9EEF5]">
									<button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
										</svg>
									</button>
								</li>
								{_.times(noOfPages, i => (
									<li key={i + 1} className="bg-[#E9EEF5] ">
										<button
											className="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-[slate-300] focus:bg-[#1268B3] focus:text-[#FFFFFF] active:bg-[#1268B3] active:text-[#FFFFFF]"
											onClick={() => loadContent(i)}
										>
											{i + 1}
										</button>
									</li>
								))}
								<li className="rounded-r-full bg-slate-150">
									<button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default UpcomingEvents;
