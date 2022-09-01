import { Icon } from '@iconify/react';
import { Banner } from '~/features/dashboard/components/Banner';
import { StateWidget } from '~/features/dashboard/components';
import {
	BarChart,
	Bar,
	CartesianGrid,
	LineChart,
	Line,
	Legend,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer
} from 'recharts';

const lineData = [
	{
		name: 'Jan',
		uv: 30,
		pv: 60
	},
	{
		name: 'Feb',
		uv: 40,
		pv: 90
	},
	{
		name: 'Mar',
		uv: 30,
		pv: 45
	},
	{
		name: 'Apr',
		uv: 55,
		pv: 75
	},
	{
		name: 'Jun',
		uv: 90,
		pv: 100
	},
	{
		name: 'Jul',
		uv: 90,
		pv: 38
	},
	{
		name: 'Aug',
		uv: 30,
		pv: 43
	},
	{
		name: 'Sep',
		uv: 15,
		pv: 53
	},
	{
		name: 'Oct',
		uv: 73,
		pv: 34
	},
	{
		name: 'Nov',
		uv: 68,
		pv: 38
	},
	{
		name: 'Dec',
		uv: 88,
		pv: 78
	}
];
const data = [
	{
		name: 'Sun',
		hours: 30
	},
	{
		name: 'Mon',
		hours: 60
	},
	{
		name: 'Tue',
		hours: 49
	},
	{
		name: 'Wed',
		hours: 75
	},
	{
		name: 'Thu',
		hours: 45
	},
	{
		name: 'Fri',
		hours: 100
	},
	{
		name: 'Sat',
		hours: 48
	}
];

function DashboardContainer() {
	return (
		<section className="flex flex-col space-y-5">
			<Banner />
			<div className="flex flex-col container mx-auto">
				<section className="flex w-full bg-[#1469b2] relative -top-16 items-center space-between rounded-md text-white p-5">
					<div className="flex-1">
						<div className="flex flex-col flex-1">
							<span>Update your business information</span>
							<span>
								Complete your profile to access all the features, and preferences based recommendations
							</span>
						</div>
					</div>
					<button className="flex items-center space-x-2 bg-white text-blue-500 rounded-md px-4 py-2">
						<span>Go To Profile</span>
						<Icon width={20} icon="mingcute:arrow-right-line" />
					</button>
				</section>
			</div>
			<div className="flex flex-col container mx-auto relative -top-14">
				<section className="grid grid-cols-24 gap-5 w-full">
					{[...Array(4)].map((key) => (
						<StateWidget />
					))}
					<div className="col-span-16 flex flex-col bg-white bg-white border rounded p-5">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">popular roles</h6>
						</div>
						<div className="w-full flex space-x-3">
							<div className="w-3/4 h-[270px]">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart
										data={lineData}
										margin={{
											top: 20,
											right: 10,
											left: -20,
											bottom: 0
										}}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<YAxis type="number" domain={[0, 100]} />
										<XAxis dataKey="name" />
										<Tooltip />
										<Line dataKey="pv" stroke="#8884d8" />
										<Line dataKey="uv" stroke="#82ca9d" />
									</LineChart>
								</ResponsiveContainer>
							</div>
							<div className="flex flex-col justify-evenly h-full">
								{[...Array(3)].map((key) => (
									<div key={key} className="flex flex-col border-l pl-3">
										<div className="flex space-x-1 items-center">
											<Icon icon="carbon:user-multiple" />
											<span>98%</span>
											<span>(674)</span>
										</div>
										<h6 className="text-sm">Product Design Engineer</h6>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-span-8 flex flex-col bg-white bg-white border rounded p-5">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">popular roles</h6>
						</div>
					</div>
					<div className="col-span-full flex flex-col bg-white bg-white border rounded p-5">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Learning path curated for you</h6>
							<div className="justify-end gap-3 w-16">
								<span>View All</span>
							</div>
						</div>
					</div>
					<div className="col-span-12 flex flex-col bg-white bg-white border rounded p-5 w-full">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Last Accessed courses</h6>
						</div>
						<div className="block w-full divide-y divide-gray-200 mt-4">
							{[...Array(4)].map((key) => (
								<div key={key} className="flex items-center space-x-4 py-3">
									<div className="flex-shrink-0">
										<img className="w-12 h-12 rounded" src="/profile.jpeg" alt="Neil image" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-lg font-medium text-gray-900 truncate">
											Advanced Part Design
										</p>
										<div className="flex text-sm text-gray-500 items-center">
											<span>28/30 Lessons</span>
											<Icon width={20} icon="bi:dot" />
											<span>90%</span>
											<Icon width={20} icon="bi:dot" />
											<span>1hr ago</span>
										</div>
									</div>
									<button className="inline-flex items-center text-base font-semibold text-gray-900">
										<Icon width={25} icon="lucide:chevron-right" />
									</button>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-12 flex flex-col bg-white bg-white border rounded p-5 w-full">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Time Spend</h6>
							<div className="justify-end gap-3 w-16">
								<span>View All</span>
							</div>
						</div>
						<ResponsiveContainer width="100%" height="100%">
							<BarChart
								data={data}
								margin={{
									top: 30
								}}
							>
								<XAxis dataKey="name" />
								<YAxis />
								<Bar barSize={20} dataKey="hours" fill="#8884d8" />
							</BarChart>
						</ResponsiveContainer>
					</div>

					<div className="col-span-full flex-col bg-white bg-white border rounded p-5">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Recommended for you</h6>
							<div className="flex justify-end gap-3 w-16">
								<button>
									<Icon width={24} icon="akar-icons:circle-chevron-left-fill" />
								</button>
								<button>
									<Icon width={24} icon="akar-icons:circle-chevron-right-fill" />
								</button>
							</div>
						</div>
						<div className="flex pt-5 gap-5">
							{[...Array(3)].map((key) => (
								<div className="bg-white flex flex-col border rounded-md">
									<img className="rounded-t-md h-[250px]" src="/sample.png" alt="" />
									<div className="flex flex-col p-3">
										<div className="my-2 gap-2">
											<span
												className="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
											>
												CATIA V5
											</span>
											<span
												className="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
											>
												3D Experience
											</span>
										</div>
										<p className="font-bold text-xl tracking-tight mt-1">Advance assemble design</p>
										<p className="font-normal mb-3 text-gray-400">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit...
										</p>
										<div className="gap-2">
											<span
												className="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
											>
												15 hrs
											</span>
											<span
												className="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
											>
												4.5
											</span>
											<span
												className="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
											>
												Advanced
											</span>
										</div>
										<div className="flex mt-3 -space-x-4">
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<span
												className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-black rounded-md border-2 border-white"
											>
												+99
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-12 flex flex-col bg-white bg-white border rounded p-5 w-full">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Favorites</h6>
						</div>
						<div className="block w-full divide-y divide-gray-200 mt-4">
							{[...Array(3)].map((key) => (
								<div key={key} className="flex items-center space-x-4 py-3">
									<div className="flex-shrink-0">
										<img className="w-12 h-12 rounded" src="/profile.jpeg" alt="Neil image" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-lg font-medium text-gray-900 truncate">
											Advanced Part Design
										</p>
										<div className="flex text-sm text-gray-500 items-center">
											<span>Training</span>
											<Icon width={20} icon="bi:dot" />
											<span>1hr ago</span>
										</div>
									</div>
									<button className="inline-flex items-center text-base font-semibold text-gray-900">
										<Icon width={25} icon="lucide:chevron-right" />
									</button>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-12 flex flex-col bg-white bg-white border rounded p-5 w-full">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Bookmarked lessons</h6>
						</div>
						<div className="block w-full divide-y divide-gray-200 mt-4">
							{[...Array(3)].map((key) => (
								<div key={key} className="flex items-center space-x-4 py-3">
									<div className="flex-shrink-0">
										<img className="w-12 h-12 rounded" src="/profile.jpeg" alt="Neil image" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-lg font-medium text-gray-900 truncate">
											Beginner Assembly Part Design
										</p>
										<div className="flex text-sm text-gray-500 items-center">
											<span>44/80 Lessons</span>
											<Icon width={20} icon="bi:dot" />
											<span>1hr ago</span>
										</div>
									</div>
									<button className="inline-flex items-center text-base font-semibold text-gray-900">
										<Icon width={25} icon="lucide:chevron-right" />
									</button>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-12 flex-col bg-white bg-white border rounded p-5 w-full">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">Certificates Earned</h6>
							<div className="flex justify-end gap-3 w-16">
								<span>View All</span>
							</div>
						</div>
						<div className="grid grid-cols-2 pt-5 gap-5">
							{[...Array(4)].map((key) => (
								<div key={key} className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
									<img
										className="object-cover w-full h-48"
										src="/certificate.jpeg"
										alt="certificate"
									/>
									<span className="bg-gray-900 absolute inset-0 bg-opacity-50" />
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<h4 className="text-md text-white">
											Advanced Assambly Design
										</h4>
										<div className="leading-normal text-sm text-gray-100">
											<span>CAVITA-V5 .</span>
											<span>1d ago</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-12 flex-col bg-white bg-white border rounded p-5 w-full">
						<div className="flex items-center justify-between">
							<p className="text-2xl capitalize">Recent Activity</p>
							<div className="flex justify-end gap-3 w-16">
								<span>View All</span>
							</div>
						</div>
						<div className="py-5 px-0 mt-2">
							{[...Array(5).keys()].map((keys) => (
								<div className="w-full flex" key={keys}>
									<div className="mr-4 flex flex-col items-center">
										<div>
											<div className="flex h-10 w-10 items-center bg-gray-300 justify-center rounded-full border ring-4 ring-white">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 text-gray-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M17 13l-5 5m0 0l-5-5m5 5V6"
													/>
												</svg>
											</div>
										</div>
										{keys !== 4 && <hr className="h-full w-0.5 bg-gray-300 my-1.5" />}
									</div>
									<div className={`${keys === 4 ? 'pb-0' : 'pb-9'} flex-1 relative -top-1.5`}>
										<p className="text-lg text-gray-600">Advanced Assembles Design Course</p>
										<div className="text-gray-500 text-sm">
											<span>Integrated . 4 min ago</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-full flex-col bg-white bg-white border rounded p-5">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl capitalize">New courses</h6>
							<div className="flex justify-end gap-3 w-16">
								<button>
									<Icon width={24} icon="akar-icons:circle-chevron-left-fill" />
								</button>
								<button>
									<Icon width={24} icon="akar-icons:circle-chevron-right-fill" />
								</button>
							</div>
						</div>
						<div className="flex pt-5 gap-5">
							{[...Array(3)].map((key) => (
								<div className="bg-white flex flex-col border rounded-md">
									<img className="rounded-t-md h-[250px]" src="/sample.png" alt="" />
									<div className="flex flex-col p-3">
										<div className="my-2 gap-2">
											<span
												className="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
											>
												CATIA V5
											</span>
											<span
												className="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
											>
												3D Experience
											</span>
										</div>
										<p className="font-bold text-xl tracking-tight mt-1">Advance assemble design</p>
										<p className="font-normal mb-3 text-gray-400">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit...
										</p>
										<div className="gap-2">
											<span
												className="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
											>
												15 hrs
											</span>
											<span
												className="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
											>
												4.5
											</span>
											<span
												className="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
											>
												Advanced
											</span>
										</div>
										<div className="flex mt-3 -space-x-4">
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<img
												className="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
												src="/profile.jpeg"
												alt=""
											/>
											<span
												className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-black rounded-md border-2 border-white"
											>
												+99
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="col-span-full flex flex-col bg-white bg-white border rounded p-5">
						<div className="flex items-center justify-between">
							<h6 className="text-2xl">Trending Trainings lorem</h6>
							<div className="flex justify-end gap-3 w-16">
								<button>
									<Icon width={24} icon="akar-icons:circle-chevron-left-fill" />
								</button>
								<button>
									<Icon width={24} icon="akar-icons:circle-chevron-right-fill" />
								</button>
							</div>
						</div>
						<div className="flex pt-5 gap-5">
							{[...Array(4)].map((key) => (
								<div className="flex bg-white flex-col border rounded-md max-w-xs">
									<img className="rounded-t-md" src="/sample.png" alt="" />
									<div className="flex flex-col p-3">
										<p className="font-bold text-2xl tracking-tight">3D Experience Training</p>
										<p className="font-normal mb-3 text-gray-400">44 Courses</p>
										<span className='my-5 text-[#6A7681] tracking-wider text-sm'><b className="text-[#1868B3] text-lg">₹7150</b>/per user</span>
									</div>
								</div>
							))}
						</div>
					</div>

				</section>
			</div>
		</section>
	);
}

export default DashboardContainer;
