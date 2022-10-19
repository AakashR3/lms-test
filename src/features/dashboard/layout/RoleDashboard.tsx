import LearningPath from "../components/LearningPath";
import LeaderboardSection from "../components/LeaderboardSection";
import RoleSection from "../components/RoleSection";
import Stats from "../components/Stats";
import CurrentRoleSection from "../components/CurrentRoleSection";
import NewCourses from "../components/NewCourses";
import DashboardHelp from "../components/DashboardHelp";
import TimeSpent from "../components/TimeSpent";
import ContinueLearning from "../components/ContinueLearning";
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
				<TimeSpent />
				<NewCourses />
				<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
					<DashboardHelp />
				</div>
			</main>
		</>
	);
};

export default RoleDashboard;
