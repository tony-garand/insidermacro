import React, { useRef, PureComponent } from 'react';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import useResizeObserver from "../functions/ResizeObserver";


const data = [
  {
    date: '2000-01', Expected: 4000, Actual: 2400, amt: 2400,
  },
  {
    date: '2000-02', Expected: 3000, Actual: 1398, amt: 2210,
  },
  {
    date: '2000-03', Expected: 2000, Actual: 9800, amt: 2290,
  },
  {
    date: '2000-04', Expected: 2780, Actual: 3908, amt: 2000,
  },
  {
    date: '2000-05', Expected: 1890, Actual: 4800, amt: 2181,
  },
  {
    date: '2000-06', Expected: 2390, Actual: 3800, amt: 2500,
  },
  {
    date: '2000-07', Expected: 3490, Actual: 4300, amt: 2100,
  },
  {
    date: '2000-08', Expected: 4000, Actual: 2400, amt: 2400,
  },
  {
    date: '2000-09', Expected: 3000, Actual: 1398, amt: 2210,
  },
  {
    date: '2000-10', Expected: 2000, Actual: 9800, amt: 2290,
  },
  {
    date: '2000-11', Expected: 2780, Actual: 3908, amt: 2000,
  },
  {
    date: '2000-12', Expected: 1890, Actual: 4800, amt: 2181,
  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return <text x={x + offset} y={y + 10} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

export default function MultiBarChart() {
    return (
        <div style={{ width: '100%', height: 800 }}>
            <ResponsiveContainer>
                <BarChart
                    width={800}
                    height={800}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
                    <Bar dataKey="Actual" fill="#8884d8" />
                    <Bar dataKey="Expected" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}