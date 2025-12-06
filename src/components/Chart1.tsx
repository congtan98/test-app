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
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: { bar: { borderWidth: 1 } },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "start",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },

  scales: {
    x: {
      stacked: true,
      grid: { display: false },
    },
    y: {
      stacked: true,
      grid: { display: false },
    },
  },
};

const labels = ["January"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [25],
      backgroundColor: "rgb(255, 99, 132)",
      //   barThickness: 30
    },
    {
      label: "Dataset 2",
      data: [75],
      backgroundColor: "rgb(75, 192, 192)",
      //   barThickness: 30
    },
  ],
};

const Chart1 = () => {
  return (
    <div className="h-28 w-full">
      <Bar options={options} data={data} />{" "}
    </div>
  );
};

export default Chart1;
