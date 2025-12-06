import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin để căn center legend theo chiều dọc
const centerLegendPlugin = {
  id: "centerLegendPlugin",
  afterLayout(chart: ChartJS) {
    const legend = chart.legend;
    if (!legend) return;

    const chartHeight = chart.chartArea.height;
    const legendHeight = legend.height;

    const offset = (chartHeight - legendHeight) / 2;

    // dịch legend xuống để nó nằm center chiều dọc
    legend.top = chart.chartArea.top + offset;
  },
};

ChartJS.register(centerLegendPlugin);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true, 
              pointStyle: "circle",
              padding: 20,
              font: {
                size: 14,
              },
            },
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
