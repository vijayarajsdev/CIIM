import { AgCharts } from "ag-charts-react";
import type {
  AgBarSeriesOptions,
  AgCartesianChartOptions,
} from "ag-charts-types";
import { topSellingProducts } from "../../Data";

const options: AgCartesianChartOptions = {
  title: {
    text: "Top Selling Products",
  },
  data: topSellingProducts,
  series: [
    {
      type: "bar",
      xKey: "product",
      yKey: "sales",
      fill: "#4CAF50",
    } as AgBarSeriesOptions,
  ],
};
const TopSellingProductsChart = () => {
  return <AgCharts options={options} />;
};

export default TopSellingProductsChart;
