import { AgCharts } from "ag-charts-react";
import type { AgLineSeriesOptions } from "ag-charts-types";
const data = [
  { month: "Jan", sales: 12000 },
  { month: "Feb", sales: 15000 },
  { month: "Mar", sales: 18000 },
  { month: "Apr", sales: 17000 },
  { month: "May", sales: 21000 },
  { month: "Jun", sales: 19000 },
  { month: "Jul", sales: 22000 },
  { month: "Aug", sales: 25000 },
  { month: "Sep", sales: 23000 },
  { month: "Oct", sales: 24000 },
  { month: "Nov", sales: 20000 },
  { month: "Dec", sales: 26000 },
];
const options = {
  title: {
    text: "Monthly Sales Data",
  },
  data: data,
  series: [
    {
      type: "line",
      xKey: "month",
      yKey: "sales",
      marker: {
        shape: "circle",
        size: 5,
      },
      strokeWidth: 3,
      stroke: "#1976d2",
    } as AgLineSeriesOptions,
  ],
};
const MonthlySalesChart = () => {
  return <AgCharts options={options} />;
};

export default MonthlySalesChart;
