import RolesLeaderboad from "../container/RolesLeaderboard";
import NewCourses from "../container/NewCourses";
import TrendingSubscriptions from "../container/TrendingSubscriptions";
import Library from "../container/Library";
import ProfileInfo from "../container/ProfileInfo";
const BasicDashboard = () => {
	return (
		<>
			<div className="w-full h-auto bg-[#EFF8FC]  mb-[75px] relative">
				<section className="container mx-auto flex flex-col px-4 h-auto   ">
					<div className="flex flex-col bg-[#FFFFFF] rounded-lg w-3/4 h-2/4 mt-6 py-4  md:(flex flex-col justify-center w-2/4 h-auto bg-[#EFF8FC] mt-0 pt-0 ) lg:(w-full mt-[80px] mb-[140px] justify-start)">
						<span className="font-bold text-1xl text-[#020A12] opacity-74 pl-3 pr-4 md:(text-[28px] pl-0 pr-0) lg:(text-[32px] opacity-87 leading-8)">
							Welcome Steve!
						</span>
						<span className=" my-2 leading-5 pl-3 pr-4 text-xs text-[#020A12] opacity-60 font-weight-400 md:(text-[16px] pl-0 pr-0 text-[rgba(2, 10, 18)] opacity-60 font-medium leading-5) xl:(leading-5) ">
							We are on a mission to help engineers like you to upgrade your skills.
						</span>
					</div>
					<div className="absolute top-27 right-38 rounded-4xl z-index-1 bg-white py-4 px-5">
						<span className="text-[#020A12] opacity-[.6] leading-5 font-medium text-base">
							Hi, I’m baagy
						</span>
					</div>
					<div className="absolute top-25 right-0 z-index-1">
						<img className="object-cover pr-4" src="/assets/images/tiger.png" alt="tiger" />
					</div>
					<div className="absolute w-[98%] p-6 top-57 bg-[#1268B3] rounded-lg flex items-center justify-between">
						<ProfileInfo />
					</div>
				</section>
			</div>
			<section className="container mx-auto flex flex-col px-4 h-auto   ">
				<RolesLeaderboad />
				<NewCourses />
				<TrendingSubscriptions />
				<Library />
			</section>
		</>
	);
};

export default BasicDashboard;
