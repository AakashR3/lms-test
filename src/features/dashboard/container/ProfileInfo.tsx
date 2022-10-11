import CircularProgress from "../components/CircleProgressBar";

const ProfileInfo = (props: any) => {
	return (
		<>
			<div className="flex">
				<div className="w-16 h-16">
					<CircularProgress />
				</div>
				<div className="flex flex-col mx-6 justify-center text-[#FFFFFF] ">
					<span className="text-1xl font-semibold leading-6">Update your business informations</span>
					<span className="text-[14px] my-1 font-normal leading-5">
						Complete your profile to access all the features, and preferences based recommendations
					</span>
				</div>
			</div>
			<button className="bg-white py-3 flex items-center  rounded-lg">
				<span className="px-4 text-[14px] text-[#1268B3] font-semibold leading-4">Go to profile</span>{" "}
				<img className="object-cover pr-4" src="/assets/images/left-arrow.png" alt="Left arrow" />
			</button>
		</>
	);
};

export default ProfileInfo;
