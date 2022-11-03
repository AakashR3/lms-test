import { Fragment, useState, useEffect } from "react";
import { useGetLearningPathQuery } from "~/features/dashboard/store";
import { useAppSelector } from "~/config/store";
import _ from "lodash";

interface IProps {
	userId?: string;
}

const LearningPath = ({ userId }: IProps) => {
	useGetLearningPathQuery(userId);
	const { learningPath, learningPathMessage } = useAppSelector((state: any) => state.dashboard);
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [expanded, setCollapseExpanded] = useState<Map<string, boolean>>(new Map<string, boolean>());
	const [startIndex, setStartIndex] = useState<number>(0);
	const [endIndex, setEndIndex] = useState<number>(3);
	const [noOfPages, setPages] = useState<number>(0);

	useEffect(() => {
		if (learningPath && learningPath.length > 0) {
			if (learningPath.length % 3 === 0) {
				setPages(Math.floor(learningPath.length / 3));
			} else {
				setPages(Math.floor(learningPath.length / 3) + 1);
			}
		}
	}, [learningPath, noOfPages]);

	function loadContent(pageNumber: number): void {
		let newStartIndex = 0 + 3 * pageNumber;
		let newEndIndex = 3 + 3 * pageNumber;
		if (newStartIndex > learningPath.length) {
			newStartIndex = startIndex;
		}
		if (newEndIndex > learningPath.length) {
			newEndIndex = learningPath.length;
		}
		setStartIndex(newStartIndex);
		setEndIndex(newEndIndex);
	}

	const toggleDropDown = () => {
		setShowDropDown(!showDropDown);
	};
	const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
		if (event.currentTarget === event.target) {
			setShowDropDown(false);
		}
	};

	const toggleCollapse = (index: string) => {
		console.log(index);
		console.log(expanded);
		const localMap = new Map<string, boolean>();
		if (!expanded.has(index)) {
			localMap.set(index, true);
		}
		setCollapseExpanded(localMap);
	};

	function rotateCollapse180(index: string): string {
		if (expanded.has(index)) {
			return "-rotate-180";
		}
		return "";
	}

	function showTableRowBorder(index: string): string {
		if (expanded.has(index)) {
			return "";
		}
		return "border-y";
	}

	const clickHide = () => {
		const localMap = new Map<string, boolean>();
		setCollapseExpanded(localMap);
		console.log(expanded);
	};

	return (
		<>
			<div>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4 py-5 lg:py-6">
						<h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
							Learning Path
						</h2>
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
								<th className=" px-4 py-3 lg:px-5">Duration</th>
								<th className=" px-4 py-3 lg:px-5">No. of Courses</th>
								<th className=" px-1 lg:px-5"></th>
							</tr>
						</thead>
						<tbody>
							{noOfPages > 0 ? (
								learningPath.map((item: any, index: number) => (
									<Fragment key={item.SNo}>
										<tr
											className={` ${showTableRowBorder(
												item.SNo
											)} border-transparent border-b-slate-200`}
											key={item.SNo}
										>
											<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
												<div className="flex text-left">
													<p className="ml-2 text-sm font-dmsans text-[#020A12]/60">
														{item.SNo}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
												<div className="flex text-left">
													<p className="text-sm font-dmsans text-[#020A12]/60">
														{item.LearningPathName}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
												<div className="flex text-left">
													<p className="text-sm font-dmsans text-[#020A12]/60">
														{item.LPDuration}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap px-3 py-3 sm:px-5">
												<div className="flex text-left">
													<p className="text-sm font-dmsans text-[#020A12]/60">
														{item.CourseCount}
													</p>
												</div>
											</td>
											<td className="whitespace-nowrap">
												<button className="btn" onClick={(): void => toggleCollapse(item.SNo)}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className={`h-4.5 w-4.5 text-sm font-dmsans text-[#020A12]/60  ${rotateCollapse180(
															item.SNo
														)}`}
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
													</svg>
												</button>
											</td>
										</tr>
										{expanded.get(item.SNo) && (
											<CourseTable
												clickHide={clickHide}
												courseDetails={item.LearningPathCourseDetails}
											/>
										)}
									</Fragment>
								))
							) : (
								<Fragment>
									<tr className={"border border-slate-150"}>
										<td className="whitespace-nowrap px-3 py-3 sm:px-5">
											<div className="flex text-center">
												<p className="my-16 text-xs+ text-[#020A12]/60">
													{learningPathMessage}
												</p>
											</div>
										</td>
									</tr>
								</Fragment>
							)}
						</tbody>
					</table>
				</div>

				{noOfPages > 0 && (
					<div className="flex flex-col items-center bg-white justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
						<div className="text-sm">
							{startIndex + 1} - {endIndex} of {learningPath.length} entries
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
								<button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80">
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
		</>
	);
};

var widthRange: { [key: string]: string } = {
	"1-8": "w-1/12",
	"9-16": "w-2/12",
	"17-24": "w-3/12",
	"25-32": "w-4/12",
	"33-40": "w-5/12",
	"41-49": "w-6/12",
	"50-58": "w-7/12",
	"59-67": "w-8/12",
	"68-75": "w-9/12",
	"76-82": "w-10/12",
	"83-91": "w-11/12",
	"92-100": "w-12/12"
};
function calculateWidth(progress: any): string {
	for (var key in widthRange) {
		const range = key.split("-");
		if (range[0] <= progress && progress <= range[1]) {
			return widthRange[key];
		}
	}
	return "w-0";
}

const CourseTable = ({ clickHide, courseDetails }: { clickHide: Function; courseDetails: any }) => {
	return (
		<tr className="border-y border-transparent border-b-slate-200 text-[#020A12]/60">
			<td colSpan={6}>
				<div className="text-sm font-dmsans m-4 font-medium">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus
					repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate.
				</div>
				<div className="bg-white rounded-lg">
					<table className="is-hoverable w-full text-left">
						<thead>
							<tr className="text-sm font-dmsans m-4 font-medium">
								<th className=" px-4 py-3 lg:px-5">#</th>
								<th className=" px-4 py-3 lg:px-5">Course name</th>
								<th className=" px-4 py-3 lg:px-5">No. of lessons</th>
								<th className=" px-4 py-3 lg:px-5">Duration</th>
								<th className=" px-4 py-3 lg:px-5">Progress</th>
							</tr>
						</thead>
						<tbody>
							{courseDetails.map((course: any, index: number) => (
								<tr className="border-y border-transparent border-b-slate-200" key={course.CourseSNo}>
									<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
										<div className="flex text-left">
											<p className="ml-2 text-sm font-dmsans text-[#020A12]/60">
												{course.CourseSNo}
											</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
										<div className="flex text-left">
											<p className="text-sm font-dmsans text-[#020A12]/60">{course.CourseName}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-4 py-1  sm:px-5">
										<div className="flex text-left">
											<p className="ml-2 mt-2 text-sm font-dmsans text-[#020A12]/60">
												{course.LessonsCompleted} / {course.LessonsTotal}
											</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-4 py-4 last:py-4 sm:px-5">
										<div className="flex text-left">
											<p className="text-sm font-dmsans text-[#020A12]/60">{course.Duration}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-3 py-3 sm:px-5">
										<div className="progress h-2 bg-[#F8F8F8]">
											<div
												className={`relative h-2 ${calculateWidth(
													course.Progress
												)} overflow-hidden rounded-full bg-[#1268B3]`}
											></div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<button className="btn font-bold float-right m-6 text-xs text-[#1268B3]" onClick={() => clickHide()}>
					Hide
				</button>
			</td>
		</tr>
	);
};

export default LearningPath;
