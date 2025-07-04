import { AgCharts } from "ag-charts-react";
import type { AgLineSeriesOptions } from "ag-charts-types";
  import { data } from "../../Data";
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
