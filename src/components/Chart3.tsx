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
      stacked: true,grid: { display: false },
    },
    y: {
      stacked: true,grid: { display: false },
    },
  },
};

const labels = ["January", "February", "March"];

const dataFake = labels.map(() => faker.datatype.number({ min: 0, max: 100 }));
const dataFake2 = dataFake.map((item) => 100 - item);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataFake,
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: dataFake2,
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const Chart3 = () => {
  return <Bar options={options} data={data} />;
};

export default Chart3;
