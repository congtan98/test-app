import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 3",
      data: [1245],
      backgroundColor: "blue",
      barThickness: 50,
    },
  ],
};

const ChartC1 = () => {
  return (
    <Bar
      options={{
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20, // 👈 tăng khoảng cách giữa label Y và bar
          },
        },
        plugins: {
          legend: {
            position: "top",
            align: "start",

            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
            align: "start",
            position: "top",
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
      data={data}
    />
  );
};

export default ChartC1;
