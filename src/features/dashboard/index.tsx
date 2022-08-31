import { Box, Container, FlexBox } from '~/components/UI';
import { Icon } from '@iconify/react';
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

function DashboardPageContainer() {
	return (
		<>
			<Box tw="bg-[#eef8fb] relative">
				<Container tw="h-[250px] w-full flex flex-col justify-center relative -top-4">
					<FlexBox tw="items-center w-full space-x-3">
						<FlexBox tw="w-12 h-12 bg-[#d9eaf5] rounded-full items-center justify-center">
							<Icon icon="icon-park-outline:degree-hat" color="#1769b3" fontSize={25} />
						</FlexBox>
						<FlexBox tw="flex-col">
							<FlexBox tw="w-full items-center space-x-2">
								<span>
									My Current Role <b>CAE Analyst</b>{' '}
								</span>
								<Icon icon="bx:pencil" />
							</FlexBox>
							<span>
								I want to learn <b>CAD Design, CAE Simulation, Mechanical Engineering</b>
							</span>
						</FlexBox>
					</FlexBox>
					<Box tw="ml-14 mt-3 pl-1">Change Career?</Box>
				</Container>
			</Box>
			<FlexBox tw="flex-col container mx-auto mb-5 gap-5">
				<FlexBox tw="w-full bg-[#1469b2] relative -top-10 items-center space-between rounded-md text-white p-5">
					<FlexBox tw="flex-1">
						<FlexBox tw="flex-col flex-1">
							<span>Update your business information</span>
							<span>
								Complete your profile to access all the features, and preferences based recommendations
							</span>
						</FlexBox>
					</FlexBox>
					<FlexBox as="button" tw="items-center space-x- bg-white text-blue-500 rounded-md px-4 py-2">
						<span>Go To Profile</span>
						<Icon width={20} icon="charm:arrow-right" />
					</FlexBox>
				</FlexBox>

				<Box tw="grid grid-cols-4 gap-5 w-auto">
					{[...Array(4)].map((key) => (
						<Box key={key} tw="flex items-center justify-between border p-4 bg-white rounded-md">
							<FlexBox tw="flex-col gap-2">
								<Box
									as="h6"
									tw="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
								>
									Value
								</Box>
								<Box tw="text-xl font-semibold">$30,000</Box>
							</FlexBox>
							<Box tw="">
								<span>
									<Box
										as="svg"
										tw="w-12 h-12 text-gray-300 dark:text-primary-dark"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</Box>
								</span>
							</Box>
						</Box>
					))}
				</Box>

				<FlexBox tw="gap-5">
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-[70%]">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">popular roles</FlexBox>
						</FlexBox>
						<FlexBox tw="h-[250px]">
							<Box tw="w-3/4">
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
							</Box>
							<FlexBox tw="flex-col px-4 justify-evenly h-full">
								<FlexBox tw="flex-col border-l pl-3">
									<FlexBox tw="space-x-1 items-center">
										<Icon icon="carbon:user-multiple" />
										<Box>98%</Box>
										<Box>(674)</Box>
									</FlexBox>
									<Box tw="text-sm">Product Design Engineer</Box>
								</FlexBox>
								<FlexBox tw="flex-col border-l pl-3">
									<FlexBox tw="space-x-1 items-center">
										<Icon icon="carbon:user-multiple" />
										<Box>98%</Box>
										<Box>(674)</Box>
									</FlexBox>
									<Box tw="text-sm">Product Design Engineer</Box>
								</FlexBox>
								<FlexBox tw="flex-col border-l pl-3">
									<FlexBox tw="space-x-1 items-center">
										<Icon icon="carbon:user-multiple" />
										<Box>98%</Box>
										<Box>(674)</Box>
									</FlexBox>
									<Box tw="text-sm">Product Design Engineer</Box>
								</FlexBox>
							</FlexBox>
						</FlexBox>
					</FlexBox>
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 flex-initial w-[30%]">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">leaderboard</FlexBox>
						</FlexBox>
						<FlexBox>

						</FlexBox>
					</FlexBox>
				</FlexBox>

				<FlexBox tw="flex-col bg-white bg-white border rounded p-5">
					<FlexBox tw="items-center justify-between">
						<FlexBox tw="text-2xl capitalize">Learning path curated for you</FlexBox>
						<FlexBox tw="justify-end gap-3 w-16">
							<Box>View All</Box>
						</FlexBox>
					</FlexBox>
				</FlexBox>

				<FlexBox tw="gap-5">
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-full">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">Last Accessed courses</FlexBox>
						</FlexBox>
						<Box tw="block w-full divide-y divide-gray-200 mt-4">
							{[...Array(4)].map((key) => (
								<FlexBox key={key} tw="items-center space-x-4 py-3">
									<Box tw="flex-shrink-0">
										<Box as="img" tw="w-12 h-12 rounded" src="/profile.jpeg" alt="Neil image" />
									</Box>
									<Box tw="flex-1 min-w-0">
										<Box as="p" tw="text-lg font-medium text-gray-900 truncate">
											Advanced Part Design
										</Box>
										<FlexBox tw="text-sm text-gray-500 items-center">
											<span>28/30 Lessons</span>
											<Icon width={20} icon="bi:dot" />
											<span>90%</span>
											<Icon width={20} icon="bi:dot" />
											<span>1hr ago</span>
										</FlexBox>
									</Box>
									<Box tw="inline-flex items-center text-base font-semibold text-gray-900">
										<Icon width={25} icon="lucide:chevron-right" />
									</Box>
								</FlexBox>
							))}
						</Box>
					</FlexBox>
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-full">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">Time Spend</FlexBox>
							<FlexBox tw="justify-end gap-3 w-16">
								<Box>View All</Box>
							</FlexBox>
						</FlexBox>
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
					</FlexBox>
				</FlexBox>

				<FlexBox tw="flex-col bg-white bg-white border rounded p-5">
					<FlexBox tw="items-center justify-between">
						<FlexBox tw="text-2xl capitalize">Recommended for you</FlexBox>
						<FlexBox tw="justify-end gap-3 w-16">
							<button>
								<Icon width={24} icon="akar-icons:circle-chevron-left-fill" />
							</button>
							<button>
								<Icon width={24} icon="akar-icons:circle-chevron-right-fill" />
							</button>
						</FlexBox>
					</FlexBox>
					<FlexBox tw="pt-5 gap-5">
						{[...Array(4)].map((key) => (
							<FlexBox tw="bg-white flex-col border rounded-md max-w-xs">
								<Box as="img" tw="rounded-t-md" src="/sample.png" alt="" />
								<FlexBox tw="flex-col p-3">
									<FlexBox tw="my-2 gap-2">
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
										>
											CATIA V5
										</Box>
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
										>
											3D Experience
										</Box>
									</FlexBox>
									<Box tw="font-bold text-xl tracking-tight mt-1">Advance assemble design</Box>
									<Box tw="font-normal mb-3 text-gray-400">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit...
									</Box>
									<FlexBox tw="gap-2">
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
										>
											15 hrs
										</Box>
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
										>
											4.5
										</Box>
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
										>
											Advanced
										</Box>
									</FlexBox>
									<FlexBox tw="mt-3 -space-x-4">
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border-2 border-white object-cover object-center"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="span"
											tw="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-black rounded-md border-2 border-white"
										>
											+99
										</Box>
									</FlexBox>
								</FlexBox>
							</FlexBox>
						))}
					</FlexBox>
				</FlexBox>

				<FlexBox tw="gap-5">
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-full">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">favorites</FlexBox>
							<FlexBox tw="justify-end gap-3 w-16">
								<Box>View All</Box>
							</FlexBox>
						</FlexBox>
						<Box tw="block w-full divide-y divide-gray-200">
							{[...Array(4)].map((key) => (
								<FlexBox key={key} tw="items-center space-x-4 py-3">
									<Box tw="flex-shrink-0">
										<Box as="img" tw="w-14 h-14 rounded" src="/profile.jpeg" alt="Neil image" />
									</Box>
									<Box tw="flex-1 min-w-0">
										<Box as="p" tw="text-lg font-medium text-gray-900 truncate">
											Advanced Part Design
										</Box>
										<FlexBox tw="text-sm text-gray-500 items-center">
											<span>Training</span>
											<Icon width={20} icon="bi:dot" />
											<span>1hr ago</span>
										</FlexBox>
									</Box>
									<Box tw="inline-flex items-center text-base font-semibold text-gray-900">
										<Icon width={25} icon="lucide:chevron-right" />
									</Box>
								</FlexBox>
							))}
						</Box>
					</FlexBox>
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-full">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">Bookmarked Lessons</FlexBox>
							<FlexBox tw="justify-end gap-3 w-16">
								<Box>View All</Box>
							</FlexBox>
						</FlexBox>
						<Box tw="block w-full divide-y divide-gray-200">
							{[...Array(4)].map((key) => (
								<FlexBox key={key} tw="items-center space-x-4 py-3">
									<Box tw="flex-shrink-0">
										<Box as="img" tw="w-14 h-14 rounded" src="/profile.jpeg" alt="Neil image" />
									</Box>
									<Box tw="flex-1 min-w-0">
										<Box as="p" tw="text-lg font-medium text-gray-900 truncate">
											Beginner Assembly Part Design
										</Box>
										<FlexBox tw="text-sm text-gray-500 items-center">
											<span>44/80 Lessons</span>
											<Icon width={20} icon="bi:dot" />
											<span>1hr ago</span>
										</FlexBox>
									</Box>
									<Box tw="inline-flex items-center text-base font-semibold text-gray-900">
										<Icon width={25} icon="lucide:chevron-right" />
									</Box>
								</FlexBox>
							))}
						</Box>
					</FlexBox>
				</FlexBox>

				<FlexBox tw="gap-5">
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-full">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">Certificates Earned</FlexBox>
							<FlexBox tw="justify-end gap-3 w-16">
								<Box>View All</Box>
							</FlexBox>
						</FlexBox>
						<FlexBox tw="grid grid-cols-2 pt-5 gap-5">
							{[...Array(4)].map((key) => (
								<Box key={key} tw="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
									<Box
										as="img"
										tw="object-cover w-full h-48"
										src="/certificate.jpeg"
										alt="certificate"
									/>
									<Box tw="bg-gray-900 absolute inset-0 bg-opacity-50" />
									<Box tw="absolute bottom-0 left-0 right-0 p-4">
										<Box as="h4" tw="text-md text-white">
											Advanced Assambly Design
										</Box>
										<Box as="span" tw="leading-normal text-sm text-gray-100">
											<span>CAVITA-V5 .</span>
											<span>1d ago</span>
										</Box>
									</Box>
								</Box>
							))}
						</FlexBox>
					</FlexBox>
					<FlexBox tw="flex-col bg-white bg-white border rounded p-5 w-full">
						<FlexBox tw="items-center justify-between">
							<FlexBox tw="text-2xl capitalize">Recent Activity</FlexBox>
							<FlexBox tw="justify-end gap-3 w-16">
								<Box>View All</Box>
							</FlexBox>
						</FlexBox>
						<Box tw="py-5 px-0 mt-2">
							{[...Array(5).keys()].map((keys) => (
								<FlexBox tw="w-full" key={keys}>
									<Box tw="mr-4 flex flex-col items-center">
										<Box>
											<Box tw="flex h-10 w-10 items-center bg-gray-300 justify-center rounded-full border ring-4 ring-white">
												<Box
													as="svg"
													xmlns="http://www.w3.org/2000/svg"
													tw="h-6 w-6 text-gray-500"
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
												</Box>
											</Box>
										</Box>
										{keys !== 4 && <Box as="hr" tw="h-full w-0.5 bg-gray-300 my-1.5" />}
									</Box>
									<Box tw={`${keys === 4 ? 'pb-0' : 'pb-9'} flex-1 relative -top-1.5`}>
										<Box tw="text-lg text-gray-600">Advanced Assembles Design Course</Box>
										<Box tw="text-gray-500 text-sm">
											<span>Integrated . 4 min ago</span>
										</Box>
									</Box>
								</FlexBox>
							))}
						</Box>
					</FlexBox>
				</FlexBox>

				<FlexBox tw="flex-col bg-white bg-white border rounded p-5">
					<FlexBox tw="items-center justify-between">
						<FlexBox tw="text-2xl capitalize">new courses</FlexBox>
						<FlexBox tw="justify-end gap-3 w-16">
							<button>
								<Icon width={24} icon="akar-icons:circle-chevron-left-fill" />
							</button>
							<button>
								<Icon width={24} icon="akar-icons:circle-chevron-right-fill" />
							</button>
						</FlexBox>
					</FlexBox>
					<FlexBox tw="pt-5 gap-5">
						{[...Array(4)].map((key) => (
							<FlexBox tw="bg-white flex-col border rounded-md max-w-xs">
								<Box as="img" tw="rounded-t-md" src="/sample.png" alt="" />
								<FlexBox tw="flex-col p-3">
									<FlexBox tw="my-2 gap-2">
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
										>
											CATIA V5
										</Box>
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-blue-700 bg-blue-200 rounded-md bg-opacity-40"
										>
											3D Experience
										</Box>
									</FlexBox>
									<Box tw="font-bold text-xl tracking-tight mt-1">Advance assemble design</Box>
									<Box tw="font-normal mb-3 text-gray-400">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit...
									</Box>
									<FlexBox tw="gap-2">
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
										>
											15 hrs
										</Box>
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
										>
											4.5
										</Box>
										<Box
											as="span"
											tw="px-2 py-1 text-xs font-normal text-gray-700 bg-gray-200 rounded-md bg-opacity-40"
										>
											Advanced
										</Box>
									</FlexBox>
									<FlexBox tw="my-3 -space-x-4">
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border border-white"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border border-white"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border border-white"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border border-white"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="img"
											tw="w-10 h-10 rounded-md border border-white"
											src="/profile.jpeg"
											alt=""
										/>
										<Box
											as="span"
											tw="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-black rounded-md border border-white"
										>
											+99
										</Box>
									</FlexBox>
								</FlexBox>
							</FlexBox>
						))}
					</FlexBox>
				</FlexBox>

				<FlexBox tw="flex-col bg-white bg-white border rounded p-5">
					<FlexBox tw="items-center justify-between">
						<FlexBox tw="text-2xl">Trending Trainings lorem</FlexBox>
						<FlexBox tw="justify-end gap-3 w-16">
							<button>
								<Icon width={24} icon="akar-icons:circle-chevron-left-fill" />
							</button>
							<button>
								<Icon width={24} icon="akar-icons:circle-chevron-right-fill" />
							</button>
						</FlexBox>
					</FlexBox>
					<FlexBox tw="pt-5 gap-5">
						{[...Array(4)].map((key) => (
							<FlexBox tw="bg-white flex-col border rounded-md max-w-xs">
								<Box as="img" tw="rounded-t-md" src="/sample.png" alt="" />
								<FlexBox tw="flex-col p-3">
									<Box tw="font-bold text-2xl tracking-tight">3D Experience Training</Box>
									<Box tw="font-normal mb-3 text-gray-400">44 Courses</Box>
								</FlexBox>
							</FlexBox>
						))}
					</FlexBox>
				</FlexBox>
			</FlexBox>
		</>
	);
}

export default DashboardPageContainer;
