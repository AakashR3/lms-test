import HeroSection from "../components/HeroSection";
import LeaderboardSection from "../components/LeaderboardSection";
import RoleSection from "../components/RoleSection";
import TrendingSubscriptions from "../components/TrendingSubscriptions";
import NewCourses from "../components/NewCourses";
import Catalog from "../components/Catalog";
import DashboardHelp from "../components/DashboardHelp";
const BasicDashboard = () => {
	return (
		<main className="main-content mail-app w-full  py-8">
			<HeroSection />
			<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
				<RoleSection />
				<LeaderboardSection />
			</div>
			<TrendingSubscriptions />
			<NewCourses />
			<Catalog />
			<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
				<DashboardHelp />
			</div>
		</main>
	);
};

export default BasicDashboard;
