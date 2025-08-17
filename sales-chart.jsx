"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Lun", "Sede norte": 12, "San Cristobal": 10, Oriente: 22 },
  { name: "Mar", "Sede norte": 19, "San Cristobal": 30, Oriente: 15 },
  { name: "Mie", "Sede norte": 32, "San Cristobal": 25, Oriente: 28 },
  { name: "Jue", "Sede norte": 28, "San Cristobal": 45, Oriente: 35 },
  { name: "Vie", "Sede norte": 51, "San Cristobal": 32, Oriente: 40 },
];

export function SalesChart() {
  return (
    <div className="h-[300px] -ml-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card) / 0.8)",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              backdropFilter: "blur(4px)",
            }}
          />
          <Legend
            iconType="circle"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ fontSize: "14px", paddingBottom: "20px" }}
          />
          <Line
            type="monotone"
            dataKey={"Sede norte"}
            stroke="hsl(var(--chart-1))"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey={"San Cristobal"}
            stroke="hsl(var(--chart-2))"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Oriente"
            stroke="hsl(var(--chart-3))"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
