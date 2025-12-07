import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin để căn center legend theo chiều dọc
// const centerLegendPlugin = {
//   id: "centerLegendPlugin",
//   afterLayout(chart: ChartJS) {
//     const legend = chart.legend;
//     if (!legend) return;

//     const chartHeight = chart.chartArea.height;
//     const legendHeight = legend.height;

//     const offset = (chartHeight - legendHeight) / 2;

//     // dịch legend xuống để nó nằm center chiều dọc
//     legend.top = chart.chartArea.top + offset;
//   },
// };

// ChartJS.register(centerLegendPlugin);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["orange", "purple", "darkblue", "blue", "lightblue"],
      borderWidth: 0,
    },
  ],
};

const PieChart = () => {
  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              padding: 10,
              // font: {
              //   size: 14,
              // },
            },
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
            align: "start",
            padding: -10,
          },
        },
        layout: {
          padding: 20,
        },
      }}
    />
  );
};
export default PieChart;
