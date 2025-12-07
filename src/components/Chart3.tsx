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

const labels = ["January", "February", "March"];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const dataFake = labels.map(() => getRandomInt(0, 100));
const dataFake2 = dataFake.map((item) => 100 - item);

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataFake,
      backgroundColor: "blue",
      barThickness: 30,
    },
    {
      label: "Dataset 2",
      data: dataFake2,
      backgroundColor: "darkblue",
      barThickness: 30,
    },
  ],
};

const Chart3 = () => {
  return (
    <Bar
      options={{
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
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
            align: "start",
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
      }}
      data={data}
    />
  );
};

export default Chart3;
