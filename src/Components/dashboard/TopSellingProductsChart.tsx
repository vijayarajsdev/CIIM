import { AgCharts } from "ag-charts-react";
import type {
    AgBarSeriesOptions,
  AgCartesianChartOptions,
} from "ag-charts-types";

const topSellingProducts = [
  { product: 'Hydraulic Hose 1/2"', sales: 320 },
  { product: "Elbow Fitting 90°", sales: 270 },
  { product: "Quick Coupler", sales: 210 },
  { product: "Hose Clamp SS", sales: 180 },
  { product: "Hydraulic Oil Seal", sales: 150 },
];
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
