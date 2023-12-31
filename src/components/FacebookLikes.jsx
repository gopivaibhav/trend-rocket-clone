import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page D",
    uv: 2780,
  },

  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page A",
    uv: 4000,
  },
];

export default function FacebookLikes() {
  return (
    <div className="charts">
      <AreaChart
        width={200}
        height={126}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}
