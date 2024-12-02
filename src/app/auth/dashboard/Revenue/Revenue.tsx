"use client";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import { AgChartOptions } from "ag-charts-community";

export default function Revenue() {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Acme's Inc Income",
    },
    data: [
      { month: "Jan", income: 2.3 },
      { month: "Feb", income: 4.3 },
      { month: "Mar", income: 5.3 },
      { month: "Apr", income: 1.3 },
      { month: "May", income: 2.3 },
      { month: "Jun", income: 6.3 },
      { month: "Jul", income: 8.3 },
      { month: "Sep", income: 8.3 },
      { month: "Oct", income: 5.3 },
      { month: "Nov", income: 3.3 },
      { month: "Dec", income: 2.3 },
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "income",
        yName: "Income",
      },
    ],
  });

  return (
    <div className="h-[50%] w-full border-[1px] rounded-[10px] p-[10px]">
      <AgCharts className="h-full w-full" options={options} />
    </div>
  );
}
