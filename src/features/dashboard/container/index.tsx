import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CircularProgress from "../components/CircleProgressBar";

const DashboardContainer = () => {
	const data = [
		{
			name: "Jan",
			uv: 23,
			pv: 55,
			amt: 24
		},
		{
			name: "Feb",
			uv: 45,
			pv: 67,
			amt: 13
		},
		{
			name: "Apr",
			uv: 12,
			pv: 14,
			amt: 10
		},
		{
			name: "May",
			uv: 62,
			pv: 54,
			amt: 19
		},
		{
			name: "Jun",
			uv: 56,
			pv: 63,
			amt: 45
		},
		{
			name: "Jul",
			uv: 42,
			pv: 14,
			amt: 22
		},
		{
			name: "Aug",
			uv: 22,
			pv: 34,
			amt: 22
		},
		{
			name: "Sep",
			uv: 12,
			pv: 98,
			amt: 80
		},
		{
			name: "Oct",
			uv: 22,
			pv: 34,
			amt: 22
		}
	];
	return (
		<section className="container mx-auto flex flex-col px-4 h-auto items-center ">
			<div className="w-full h-auto bg-[#EFF8FC]  mb-[75px] relative">
				<div className="flex flex-col bg-[#FFFFFF] rounded-lg w-3/4 h-2/4 mt-6 py-4  md:(flex flex-col justify-center w-2/4 h-auto bg-[#EFF8FC] mt-0 pt-0 ) lg:(w-full mt-[80px] mb-[140px] justify-start)">
					<span className="font-bold text-1xl text-[#020A12] opacity-74 pl-3 pr-4 md:(text-[28px] pl-0 pr-0) lg:(text-[32px] opacity-87 leading-8)">
						Welcome Steve!
					</span>
					<span className=" my-2 leading-5 pl-3 pr-4 text-xs text-[#020A12] opacity-60 font-weight-400 md:(text-[16px] pl-0 pr-0 text-[rgba(2, 10, 18)] opcity-60 font-medium leading-5) xl:(leading-5) ">
						We are on a mission to help engineers like you to upgrade your skills.
					</span>
				</div>
				<div className="absolute top-27 right-38 rounded-4xl z-index-1 bg-white py-4 px-5">
					<span className="text-[#020A12] opacity-[.6] leading-5 font-medium text-base">Hi, I’m baagy</span>
				</div>
				<div className="absolute top-25 right-0 z-index-1">
					<img className="object-cover pr-4" src="/assets/images/tiger.png" alt="tiger" />
				</div>
				<div className="h-[112px] absolute w-[98.5%] top-57 bg-[#1268B3] rounded-lg flex items-center px-6 justify-between">
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
				</div>
			</div>
			<div className="w-full h-full grid gap-4 xl:grid-cols-3 mb-[16px]">
				<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mx-[16px] xl:(col-span-2 mx-auto)">
					<span className="   leading-5 font-bold text-1xl   text-[#020A12BD]  ">Popular Rates</span>
					<div className="w-full h-full grid gap-16 xl:grid-cols-3 my-6">
						<div className="col-span-2">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart width={200} height={300} data={data}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis
										height={20}
										style={{
											fontSize: ".75rem",
											fontFamily: "inter",
											color: "#020A12",
											opacity: 0.54
										}}
										dataKey="name"
									/>
									<YAxis
										width={10}
										style={{
											fontSize: ".75rem",
											fontFamily: "inter",
											color: "#020A12",
											opacity: 0.54
										}}
									/>
									<Tooltip />

									<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
									<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
								</LineChart>
							</ResponsiveContainer>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-1 my-2">
								<div className="bg-[#12C6B3] w-[2px]"></div>
								<div className="flex mx-6 flex-col justify-center">
									<div className="flex mb-1">
										<div>
											<img
												className="object-cover pr-4"
												src="/assets/images/user-badge.png"
												alt="user badge"
											/>
										</div>
										<span className="text-[14px] font-semibold opacity-[.74]">98% (674)</span>
									</div>
									<span className="text-[12px] text-[#020A128A] opacity-[.54] font-normal font-semibold">
										Product Design Engineer
									</span>
								</div>
							</div>

							<div className="flex flex-1 my-2">
								<div className="bg-[#6318B3] w-[2px]"></div>
								<div className="flex mx-6 flex-col   justify-center">
									<div className="flex mb-1">
										<div>
											<img
												className="object-cover pr-4"
												src="/assets/images/user-badge.png"
												alt="user badge"
											/>
										</div>
										<span className="text-[14px] font-semibold opacity-[.74]">79% (454)</span>
									</div>
									<span className="text-[12px] text-[#020A128A] opacity-[.54] font-normal font-semibold">
										CEA Analyst
									</span>
								</div>
							</div>
							<div className="flex flex-1 my-2">
								<div className="bg-[#B31868] w-[2px]"></div>
								<div className="flex mx-6 flex-col   justify-center">
									<div className="flex mb-1">
										<div>
											<img
												className="object-cover pr-4"
												src="/assets/images/user-badge.png"
												alt="user badge"
											/>
										</div>
										<span className="text-[14px] font-semibold opacity-[.74]">52% (836)</span>
									</div>
									<span className="text-[12px] text-[#020A128A] opacity-[.54] font-normal font-semibold">
										Manufacturing and Designer engineer
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col px-[13px] py-4 border-solid border border-[#D7DBE0]  rounded-lg bg-[#FFFFFF] mx-[16px]  xl:(mx-auto)">
					<span className="leading-5  font-bold text-1xl text-[#020A12BD]  ">Leaderboard</span>
					<div className="flex justify-between flex-col ">
						<section className="flex justify-between my-5 mx-8">
							<div className="flex justify-between flex-col items-center mx-[20px] ml-0">
								<span className="profile-section">
									2<sup>nd</sup>
								</span>
								<span className="py-1">
									<img
										className="object-cover"
										src="/assets/images/profile-1.png"
										alt="Profile Logo"
									/>
								</span>
								<span className="profile-section">Robert</span>
								<span className="flex items-center">
									<img
										className="object-cover pr-1"
										src="/assets/images/batch-coin.png"
										alt="Profile Logo"
									/>{" "}
									<span className="profile-section px-[4px]">200</span>
								</span>
							</div>
							<div className="flex justify-between flex-col items-center mx-[20px] ml-0">
								<span className="profile-section">
									1<sup>st</sup>
								</span>
								<span className="py-1">
									<img
										className="object-cover"
										src="/assets/images/profile-2.png"
										alt="Profile Logo"
									/>
								</span>
								<span className="profile-section">Karthik</span>
								<span className="flex items-center">
									<img
										className="object-cover pr-1"
										src="/assets/images/batch-coin.png"
										alt="Profile Logo"
									/>{" "}
									<span className="profile-section px-[4px]">400</span>
								</span>
							</div>
							<div className="flex justify-between flex-col items-center  mx-[20px]">
								<span className="profile-section">
									3<sup>rd</sup>
								</span>
								<span className="py-1">
									<img
										className="object-cover"
										src="/assets/images/profile-3.png"
										alt="Profile Logo"
									/>
								</span>
								<span className="profile-section">Antony</span>
								<span className="flex items-center">
									<img
										className="object-cover pr-1"
										src="/assets/images/batch-coin.png"
										alt="Profile Logo"
									/>{" "}
									<span className="profile-section px-[4px]">80</span>
								</span>
							</div>
						</section>
						<section className="w-full h-[47px] bg-[#e6f7e9] rounded-[4px] flex items-center justify-between px-4">
							<span className="flex items-center">
								<img className="object-cover  " src="/assets/images/triange.png" alt="Profile Logo" />{" "}
								<span className="profile-section px-[4px] font-semibold text-[14px]">80</span>
							</span>
							<span className="flex items-center">
								<img
									className="object-cover "
									src="/assets/images/short-profile.png"
									alt="Profile Logo"
								/>{" "}
								<span className="profile-section px-[4px] font-semibold text-[14px]">You</span>
							</span>
							<span className="flex items-center">
								<img
									className="object-cover  "
									src="/assets/images/batch-coin.png"
									alt="Profile Logo"
								/>{" "}
								<span className="profile-section px-[4px] font-semibold text-[14px]">80</span>
							</span>
						</section>
					</div>
				</div>
			</div>
			<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mx-[16px] xl:col-span-2 xl:mx-auto">
				<span className="text-[#232D42] text-xl font-bold leading-7">New Courses</span>
				<section className="flex">
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-82 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img
									className="object-cover  "
									src="/assets/images/Placeholder-1.png"
									alt="Placeholder"
								/>
							</div>
							<div className="mx-6">
								<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
									<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">CATIA V5</span>
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">
										Advanced Assemblies Design
									</span>
									<div className="my-2 text-[#697179] text-[14px] font-normal leading-[17px]">
										The Advanced Assembly Design course continues where 103 - Assembly Design{" "}
									</div>
								</div>
								<div className="flex">
									<div className="my-2 mb-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											16
										</span>
										hrs
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											4.5
										</span>{" "}
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											Advanced
										</span>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6 flex mx-6 ">
						<div className="flex flex-col w-82 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img
									className="object-cover  "
									src="/assets/images/Placeholder-2.png"
									alt="Placeholder"
								/>
							</div>
							<div className="mx-6">
								<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
									<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">CATIA V5</span>
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">
										Advanced Assemblies Design
									</span>
									<div className="my-2 text-[#697179] text-[14px] font-normal leading-[17px]">
										The Advanced Assembly Design course continues where 103 - Assembly Design{" "}
									</div>
								</div>
								<div className="flex">
									<div className="my-2 mb-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											16
										</span>
										hrs
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											4.5
										</span>{" "}
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											Advanced
										</span>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6 flex mx-6 ">
						<div className="flex flex-col w-82 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img
									className="object-cover  "
									src="/assets/images/Placeholder-3.png"
									alt="Placeholder"
								/>
							</div>
							<div className="mx-6">
								<div className="py-2 px-2 bg-[#E2F5FF80]  inline-block rounded-sm mb-4">
									<span className="leading-4 text-[12px] text-[#1268B3] font-semibold">CATIA V5</span>
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">
										Advanced Assemblies Design
									</span>
									<div className="my-2 text-[#697179] text-[14px] font-normal leading-[17px]">
										The Advanced Assembly Design course continues where 103 - Assembly Design{" "}
									</div>
								</div>
								<div className="flex">
									<div className="my-2 mb-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											16
										</span>
										hrs
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											4.5
										</span>{" "}
									</div>
									<div className="my-2 mx-2 w-auto bg-[#F5F5F5] rounded-sm text-[#697179] text-[8px] px-2 flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#25313D] pr-1 font-semibold">
											Advanced
										</span>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mx-[16px] xl:col-span-2 xl:mx-auto">
				<span className="text-[#232D42] text-xl font-bold leading-7">Trending subscriptions</span>
				<section className="flex">
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src="/assets/images/Sub-1.png" alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">3D Experience training</span>
									<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
										44 courses
									</div>
								</div>
								<div className="flex mt-27 mb-7">
									<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
											₹7150
										</span>{" "}
										/per user
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src="/assets/images/Sub-2.png" alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">Autodesk training</span>
									<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
										44 courses
									</div>
								</div>
								<div className="flex mt-27 mb-7">
									<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
											₹7150
										</span>{" "}
										/per user
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src="/assets/images/Sub-3.png" alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">CATIA V5 training</span>
									<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
										44 courses
									</div>
								</div>
								<div className="flex mt-27 mb-7">
									<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
											₹7150
										</span>{" "}
										/per user
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mx-[16px] xl:col-span-2 xl:mx-auto">
				<span className="text-[#232D42] text-xl font-bold leading-7">Library</span>
				<span className="font-medium text-base text-[#020A12] opacity-[.6]">
					Select a software or domain category to see the courses offered.
				</span>
				<section className="flex">
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src="/assets/images/Sub-1.png" alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">3D Experience training</span>
									<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
										44 courses
									</div>
								</div>
								<div className="flex mt-27 mb-7">
									<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
											₹7150
										</span>{" "}
										/per user
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src="/assets/images/Sub-2.png" alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">Autodesk training</span>
									<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
										44 courses
									</div>
								</div>
								<div className="flex mt-27 mb-7">
									<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
											₹7150
										</span>{" "}
										/per user
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6 flex mx-6 ml-0">
						<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
							<div className="mb-6">
								<img className="object-cover  " src="/assets/images/Sub-3.png" alt="Placeholder" />
							</div>
							<div className="mx-6">
								<div className="flex flex-col">
									<span className="font-bold text-[#25313D] text-base">CATIA V5 training</span>
									<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
										44 courses
									</div>
								</div>
								<div className="flex mt-27 mb-7">
									<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
										<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">
											₹7150
										</span>{" "}
										/per user
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default DashboardContainer;
