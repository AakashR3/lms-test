import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const RolesLeaderboad = () => {
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
		<div className="w-full h-full grid gap-4 xl:grid-cols-3 mb-6">
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
								<img className="object-cover" src="/assets/images/profile-1.png" alt="Profile Logo" />
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
								<img className="object-cover" src="/assets/images/profile-2.png" alt="Profile Logo" />
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
						<div className="flex justify-between flex-col items-center  mx-[20px] ml-0">
							<span className="profile-section">
								3<sup>rd</sup>
							</span>
							<span className="py-1">
								<img className="object-cover" src="/assets/images/profile-3.png" alt="Profile Logo" />
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
							<img className="object-cover  " src="/assets/images/pass.png" alt="Profile Logo" />{" "}
							<span className="profile-section px-[4px] font-semibold text-[14px]">80</span>
						</span>
						<span className="flex items-center">
							<img className="object-cover " src="/assets/images/short-profile.png" alt="Profile Logo" />{" "}
							<span className="profile-section px-[4px] font-semibold text-[14px]">You</span>
						</span>
						<span className="flex items-center">
							<img className="object-cover  " src="/assets/images/batch-coin.png" alt="Profile Logo" />{" "}
							<span className="profile-section px-[4px] font-semibold text-[14px]">80</span>
						</span>
					</section>
				</div>
			</div>
		</div>
	);
};

export default RolesLeaderboad;
