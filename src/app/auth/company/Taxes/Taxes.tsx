"use client";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import { AgChartOptions } from "ag-charts-community";

export default function Taxes() {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Taxes paid in 2024",
    },
    data: [
      { month: "Jan", tax: 2.3 },
      { month: "Feb", tax: 4.3 },
      { month: "Mar", tax: 5.3 },
      { month: "Apr", tax: 1.3 },
      { month: "May", tax: 2.3 },
      { month: "Jun", tax: 6.3 },
      { month: "Jul", tax: 8.3 },
      { month: "Sep", tax: 8.3 },
      { month: "Oct", tax: 5.3 },
      { month: "Nov", tax: 3.3 },
      { month: "Dec", tax: 2.3 },
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "tax",
        yName: "iPhone",
      },
    ],
  });

  return (
    <div className="h-full w-1/2 border-[1px] rounded-[10px] p-[10px]">
      <AgCharts className="h-full w-full" options={options} />
    </div>
  );
}
