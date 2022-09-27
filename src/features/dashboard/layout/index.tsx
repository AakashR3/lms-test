import WelcomeUser from "../container/WelcomeUser";
import RolesLeaderboad from "../container/RolesLeaderboard";
import NewCourses from "../container/NewCourses";
import TrendingSubscriptions from "../container/TrendingSubscriptions";
import Library from "../container/Library";

const DashboardContainer = () => {
	return (
		<section className="container mx-auto flex flex-col px-4 h-auto items-center ">
			<WelcomeUser />
			<RolesLeaderboad />
			<NewCourses />
			<TrendingSubscriptions />
			<Library />
			<div className="w-full flex  justify-between px-6 py-6 rounded-lg bg-[#FFFFFF]  mb-6 xl:col-span-2 xl:mx-auto">
				<div className="flex items-center">
					<img src="/assets/images/mobile-logo-banner.png" className="w-10" alt="mobile-logo-banner" />
					<span className="mx-5 font-semibold text-[#232D42]">
						Download our IGETIT mobile app, and continue learning anywhere, anytime
					</span>
				</div>
				<div className="flex ">
					<img src="/assets/images/google-play.png" className="cursor-pointer" alt="google-play-banner" />
					<img src="/assets/images/app-store.png" className="ml-4 cursor-pointer" alt="app-store-banner" />
				</div>
			</div>
		</section>
	);
};

export default DashboardContainer;
