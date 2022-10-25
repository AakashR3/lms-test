import LearningPath from "../components/LearningPath";
import LeaderboardSection from "../components/LeaderboardSection";
import RoleSection from "../components/RoleSection";
import Stats from "../components/Stats";
import CurrentRoleSection from "../components/CurrentRoleSection";
import NewCourses from "../components/NewCourses";
import DashboardHelp from "../components/DashboardHelp";
import TimeSpent from "../components/TimeSpent";
import ContinueLearning from "../components/ContinueLearning";
import UpcomingEvents from "../components/UpcomingEvents";
import Transcript from "../components/Transcript";
import NewCoursesRecommended from "../components/NewCoursesRecommended";
const RoleDashboard = () => {
	return (
		<>
			<main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
				<CurrentRoleSection />
				<Stats />
				<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
					<RoleSection />
					<LeaderboardSection />
				</div>
				<ContinueLearning />
				<LearningPath />
				<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
					<UpcomingEvents />
					<Transcript />
				</div>
				<TimeSpent />
				<NewCourses />
				<NewCoursesRecommended />
				<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
					<DashboardHelp />
				</div>
			</main>
		</>
	);
};

export default RoleDashboard;
