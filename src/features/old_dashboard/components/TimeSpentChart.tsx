import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
	{
		name: "S",

		pv: 11,
		amt: 21
	},
	{
		name: "M",

		pv: 34,
		amt: 2
	},
	{
		name: "T",

		pv: 41,
		amt: 1
	},
	{
		name: "W",
		pv: 12,
		amt: 4
	},
	{
		name: "T",
		pv: 44,
		amt: 1
	},
	{
		name: "F",

		pv: 12,
		amt: 43
	},
	{
		name: "S",

		pv: 2,
		amt: 4
	}
];

const TimeSpentChart = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				width={200}
				height={200}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis axisLine={false} />
				<Tooltip />

				<Bar dataKey="pv" barSize={10} fill="#8884d8" radius={[10, 10, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default TimeSpentChart;
