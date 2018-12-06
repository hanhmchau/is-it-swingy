import React from 'react';
import {
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts';
import ComposedChart from 'recharts/lib/chart/ComposedChart';

const _transform = data => {
	const sum = data.reduce((curr, val) => curr + val, 0);
	return data.map((value, i) => ({
		name: i + 1,
		value: value,
		avg: sum / data.length
	}));
};
export const Graph = ({ data }) => (
	<ResponsiveContainer className="justify-center">
		<ComposedChart
			data={_transform(data)}
			margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
		>
			<XAxis dataKey="name" />
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Bar
				type="monotone"
				dataKey="value"
				stackId="value"
				fill=" hsl(0, 0%, 71%) "
			/>
			<Line type="monotone" dataKey="avg" stroke=" hsl(171, 100%, 41%) " />
		</ComposedChart>
	</ResponsiveContainer>
);
