
import React from "react";
import {
 AreaChart,
 Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer

} from "recharts";

const data = [
    {
      "name": "Page A",
      "uv": 40,
      "pv": 20,
      "amt": 20
    },
    {
      "name": "Page B",
      "uv": 30,
      "pv": 19,
      "amt": 21
    },
    {
      "name": "Page C",
      "uv": 20,
      "pv": 98,
      "amt": 22
    },
    {
      "name": "Page D",
      "uv": 28,
      "pv": 39,
      "amt": 20
    },
    {
      "name": "Page E",
      "uv": 18,
      "pv": 48,
      "amt": 21
    },
    {
      "name": "Page F",
      "uv": 23,
      "pv": 38,
      "amt": 25
    },
    {
      "name": "Page G",
      "uv": 34,
      "pv": 43,
      "amt": 21
    }
  ]

export default function Graph() {
  return (
    
      <ResponsiveContainer width={"100%"} height={250}    > 
        <AreaChart data={data} margin={{ top: 0, right: 20, left: 0, bottom: 20 }}
        >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </ResponsiveContainer>
                                  
      
  );
}
