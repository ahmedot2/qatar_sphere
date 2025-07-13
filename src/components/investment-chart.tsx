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
    color: "hsl(var(--chart-1))",
  },
  infra: {
    label: "District Infrastructure",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function InvestmentChart() {
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                <CartesianGrid horizontal={false} />
                <XAxis type="number" dataKey="investment" unit="B" />
                <YAxis dataKey="category" type="category" tickLine={false} axisLine={false} width={80}/>
                <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent />} />
                <Bar dataKey="investment" radius={5} />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
