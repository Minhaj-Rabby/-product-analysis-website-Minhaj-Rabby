import React, { useContext } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from "recharts";
import { DataContext } from "../../Global/DataContext";

const Dashboard = () => {
	const { data } = useContext(DataContext);
	return (
		<div className="my-5 pt-10 container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
			<div className="flex flex-col justify-center items-center border-4 py-5">
				<span className="text-green-600 uppercase text-lg font-bold mb-4">
					Monthly Sell
				</span>

				<LineChart width={300} height={200} data={data}>
					<Line
						type="monotone"
						dataKey={"sell"}
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					></Line>
					<XAxis dataKey={"month"} />
					<YAxis/>
					<Legend />
					<Tooltip></Tooltip>
				</LineChart>
			</div>
			
			<div className="flex flex-col justify-center items-center border-4 py-5">
				<span className="text-green-600 uppercase text-lg font-bold mb-4">
					Invesment vs Revenue
				</span>
				<BarChart width={300} height={200} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="data" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="investment" stackId="a" fill="#8884d8" />
					<Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
				</BarChart>
			</div>
			<div className="flex flex-col justify-center items-center border-4 py-5">
				<span className="text-green-600 uppercase text-lg font-bold mb-4">
					Invesment vs Revenue
				</span>

				<AreaChart width={300} height={200} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type="monotone"
						dataKey="investment"
						stroke="#8884d8"
						fill="#8884d8"
					/>
					<Area
						type="monotone"
						dataKey="revenue"
						stroke="#44bd32"
						fill="#44bd32"
					/>
				</AreaChart>
			</div>
		</div>
	);
};

export default Dashboard;