import { AgCharts } from "ag-charts-react";
import type {
  AgBarSeriesOptions,
  AgCartesianChartOptions,
} from "ag-charts-types";
import { topSellingProducts } from "../../Data";

const options: AgCartesianChartOptions = {
  title: {
    text: "Top Selling Products",
    color: "#4A3AFF",
    fontFamily: "poppins",
    fontWeight: "normal",
  },
  data: topSellingProducts,
  series: [
    {
      type: "bar",
      xKey: "product",
      yKey: "sales",
      fill: "#4A3AFF",
    } as AgBarSeriesOptions,
  ],
};
const TopSellingProductsChart = () => {
  return <AgCharts options={options} />;
};

export default TopSellingProductsChart;
