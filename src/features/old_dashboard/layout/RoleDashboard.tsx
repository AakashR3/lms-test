import ProfileInfo from "../container/ProfileInfo";
import AreaChartComponent from "../components/AreaChart";
import RolesLeaderboad from "../container/RolesLeaderboard";
import NewCourses from "../container/NewCourses";
import TrendingSubscriptions from "../container/TrendingSubscriptions";
import ContinueLearning from "../container/ContinueLearning";
import LearningPaths from "../container/LearningPaths";
import ScheduleDetails from "../container/ScheduleDetails";
import TimeDetails from "../container/TimeDetails";
const RoleDashboard = () => {
	return (
		<>
			<div className="w-full h-auto bg-[#EFF8FC]  mb-[75px] relative">
				<div className="flex mt-16.5 mb-29.25">
					<div className="w-auto h-70 bg-white rounded-lg mr-6">
						<div className="flex mt-6 mx-6 mb-4 justify-between">
							<div className="flex">
								<img
									className="object-cover mr-4"
									src="/assets/images/role-badge.png"
									alt="role-badge"
								/>
								<div className="flex flex-col justify-center ">
									<span className="font-medium text-xs text-[#020a12] mb-[3px] opacity-54">
										Current Role
									</span>
									<span className="font-bold text-[14px] text-[#020a12] opacity-74">CAE Analyst</span>
								</div>
							</div>
							<div className="flex">
								<img
									className="object-cover   w-7.25 h-7.25"
									src="/assets/images/round-edit-icon.png"
									alt="round-edit-icon"
								/>
							</div>
						</div>
						<div className="flex flex-col mt-4 mx-6 mb-4 w-65.75 h-38.25 rounded-lg bg-[#fffcf7] items-center justify-center">
							<img
								className="object-cover   w-9.5 h-9.3 mb-1"
								src="/assets/images/yellow-badge.png"
								alt="role-badge"
							/>
							<div className="flex flex-col items-center">
								<span className="font-bold text-[14px] text-[#020a12]">Great!</span>
								<span className="font-medium text-[#020a12] my-1  text-xs opacity-54">
									You’re an Expert now.
								</span>
							</div>
						</div>
					</div>
					<div className="w-auto h-70 bg-white rounded-lg mr-6">
						<div className="flex flex-col mt-6 mx-6 mb-4 justify-between">
							<div className="flex">
								<img className="object-cover mr-4" src="/assets/images/role-icon.png" alt="role-icon" />
								<div className="flex flex-col justify-center ">
									<span className="font-medium text-xs text-[#020a12] mb-[3px] opacity-54">
										Current role insights
									</span>
									<span className="font-bold text-[14px] text-[#020a12] opacity-74">CAE Analyst</span>
								</div>
							</div>
							<div className="flex flex-col mt-4  mb-4 w-87.25 h-auto   ">
								<div className="h-26.25">
									<AreaChartComponent />
								</div>
								<div className="flex flex-col">
									<span className="font-medium text-[#020a12] mt-4   text-xs opacity-54">
										You are progressing 36% faster than other learners in your current role!
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-auto h-70 bg-white rounded-lg mr-6">
						<div className="flex flex-col mt-6 mx-6 mb-4 justify-between">
							<div className="flex">
								<img
									className="object-cover mr-4"
									src="/assets/images/career-icon-path.png"
									alt="career-icon-path"
								/>
								<div className="flex flex-col justify-center ">
									<span className="font-bold text-[14px] text-[#020a12] mb-[3px] opacity-74">
										Target career path
									</span>
									<span className="font-medium text-xs text-[#020a12]  opacity-54">
										What do you want to become?
									</span>
								</div>
							</div>
							<div className="flex flex-col mt-4  mb-4 w-87.25 h-auto items-start  ">
								<img
									className="object-cover mb-4"
									src="/assets/images/video-clip.png"
									alt="video-clip"
								/>
								<button className="font-semibold text-[#12c6b3] bg-[#ecfbf9] px-2.5 py-1.5 rounded-8xl text-xs">
									+ Create career path
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="h-[112px] absolute w-[98.5%] top-102.5 bg-[#1268B3] rounded-lg flex items-center px-6 justify-between">
					<ProfileInfo />
				</div>
			</div>
			<div className="w-auto mb-6 flex">
				<div className="rounded-lg bg-white px-6 pt-6 py-4 w-66.75 mr-6">
					<div className="flex flex-col ">
						<span className="font-semibold text-[14px] text-[#6A7681]">Course in progress</span>
						<div className="mt-4 flex justify-between">
							<span className="text-[#1869B3] text-2xl font-semibold">10</span>
							<img
								className="object-cover mb-4 opacity-10"
								src="/assets/images/progress.png"
								alt="progress.png"
							/>
						</div>
					</div>
				</div>
				<div className="rounded-lg bg-white px-6 pt-6 py-4 w-66.75  mr-6">
					<div className="flex flex-col ">
						<span className="font-semibold text-[14px] text-[#6A7681]">Courses completed</span>
						<div className="mt-4 flex justify-between">
							<span className="text-[#4FC666] text-2xl font-semibold">10</span>
							<img
								className="object-cover   opacity-10"
								src="/assets/images/course-completion.png"
								alt="course-completion"
							/>
						</div>
					</div>
				</div>
				<div className="rounded-lg bg-white px-6 pt-6 py-4 w-66.75  mr-6">
					<div className="flex flex-col ">
						<span className="font-semibold text-[14px] text-[#6A7681]">Assessments completed</span>
						<div className="mt-4 flex justify-between">
							<span className="text-[#FAA41A] text-2xl font-semibold">07</span>
							<img
								className="object-cover   opacity-10"
								src="/assets/images/assesment-completion.png"
								alt="assesment-completion"
							/>
						</div>
					</div>
				</div>
				<div className="rounded-lg bg-white px-6 pt-6 py-4 w-66.75  mr-6">
					<div className="flex flex-col ">
						<span className="font-semibold text-[14px] text-[#6A7681]">Learning hours</span>
						<div className="mt-4 flex justify-between">
							<span className="text-[#D85C57] text-2xl font-semibold">03h</span>
							<img
								className="object-cover   opacity-10"
								src="/assets/images/time-icon.png"
								alt="time-icon"
							/>
						</div>
					</div>
				</div>
			</div>
			<RolesLeaderboad />
			<ContinueLearning />
			<LearningPaths />
			<ScheduleDetails />
			<TimeDetails />
			<NewCourses />
			<TrendingSubscriptions />
		</>
	);
};

export default RoleDashboard;
