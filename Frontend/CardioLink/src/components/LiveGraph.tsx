// components/LiveGraph.tsx

"use client";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { tempReadings } from "@/lib/tempData";
import { useEffect, useState } from "react";

export default function LiveGraph() {
  const [liveData, setLiveData] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => {
        const nextPoint = tempReadings[index % tempReadings.length];
        const newData = [...prev, nextPoint].slice(-10); // keep last 10 points
        return newData;
      });

      setIndex(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">📈 Live Monitor</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={liveData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pulse"
            stroke="#8884d8"
            strokeWidth={3} // thicker line
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="oxygen"
            stroke="#82ca9d"
            strokeWidth={3} // thicker line
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
