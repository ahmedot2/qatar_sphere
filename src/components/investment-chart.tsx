
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { category: "Sphere Venue", investment: 2.8, fill: "var(--color-venue)" },
  { category: "District Infra", investment: 1.4, fill: "var(--color-infra)" },
]

const chartConfig = {
  investment: {
    label: "Investment (Billion USD)",
  },
  venue: {
    label: "Sphere Venue",
    color: "hsl(var(--accent))",
  },
  infra: {
    label: "District Infrastructure",
    color: "hsl(var(--accent) / 0.7)",
  },
} satisfies ChartConfig

export function InvestmentChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
            <CartesianGrid horizontal={false} stroke="hsl(var(--border) / 0.5)" />
            <XAxis type="number" dataKey="investment" unit="B" axisLine={false} tickLine={false} />
            <YAxis dataKey="category" type="category" tickLine={false} axisLine={false} width={80}/>
            <Tooltip cursor={{fill: 'hsl(var(--muted) / 0.5)'}} content={<ChartTooltipContent />} />
            <Bar dataKey="investment" radius={[0, 5, 5, 0]} />
        </BarChart>
    </ChartContainer>
  )
}
