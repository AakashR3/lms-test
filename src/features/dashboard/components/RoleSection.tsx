import Chart from "react-apexcharts";
const roleStats = [
	{
		role: "Product Design Engineer",
		percentage: 98,
		count: 674,
		icon: "/assets/images/user-icon-1.svg"
	},
	{
		role: "CEA Analyst",
		percentage: 79,
		count: 546,
		icon: "/assets/images/user-icon-2.svg"
	},
	{
		role: "Manufacturing and Designer engineer",
		percentage: 98,
		count: 674,
		icon: "/assets/images/user-icon-3.svg"
	}
];
const data = {
	options: {
		stacked: false,

		chart: {
			id: "basic-bar",
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		markers: {
			size: 0
		}
	},
	stroke: {
		curve: "straight"
	},
	series: [
		{
			name: "series-1",
			data: [49, 55, 47, 63, 52, 40, 88, 45, 68, 42, 97, 48]
		},
		{
			name: "series-2",
			data: [22, 40, 12, 36, 12, 44, 38, 34, 31, 12, 39, 40]
		},
		{
			name: "series-3",
			data: [12, 22, 12, 16, 22, 14, 28, 14, 11, 12, 19, 20]
		}
	]
};

const RoleSection = () => {
	return (
		<div className="col-span-12 lg:col-span-8">
			<div className="text-[18px] font-bold text-title mb-4">Popular Roles</div>
			<div className="grid-cols-12 grid bg-white rounded-lg  px-6 py-[26px]">
				<div className="col-span-4">
					<div className="border border-[#EEEEEE] rounded-lg   px-4 py-4">
						{roleStats.map(item => (
							<div className="flex mb-4 last:mb-0">
								<img className="self-start mr-[5px] mt-[3px]" src={item.icon} alt="user-icon" />
								<div>
									<div className="font-bold text-[14px] leading-[18px] text-title">
										<span>{item.percentage}%</span>
										<span className="ml-1">({item.count})</span>
									</div>
									<div className="font-normal text-xs mt-[3px]">{item.role}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-span-8">
					<Chart options={data.options} series={data.series} type="area" height={"160px"} />
				</div>
			</div>
		</div>
	);
};

export default RoleSection;
