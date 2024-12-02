"use client";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import { AgChartOptions } from "ag-charts-community";

export default function Revenue() {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Revenue",
    },
    data: [
      { month: "Jan", income: 2.3, spending: 7 },
      { month: "Feb", income: 4.3, spending: 10 },
      { month: "Mar", income: 5.3, spending: 11 },
      { month: "Apr", income: 1.3, spending: 6 },
      { month: "May", income: 2.3, spending: 3 },
      { month: "Jun", income: 6.3, spending: 5 },
      { month: "Jul", income: 8.3, spending: 2 },
      { month: "Sep", income: 8.3, spending: 10 },
      { month: "Oct", income: 5.3, spending: 9 },
      { month: "Nov", income: 3.3, spending: 2 },
      { month: "Dec", income: 2.3, spending: 4 },
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "income",
        yName: "iPhone",
      },
      {
        type: "bar",
        xKey: "month",
        yKey: "spending",
        yName: "Mac",
      },
    ],
  });

  return (
    <div className="h-full w-1/2 border-[1px] rounded-[10px] p-[10px]">
      <AgCharts className="h-full w-full" options={options} />
    </div>
  );
}
