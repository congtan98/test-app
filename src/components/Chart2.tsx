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

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "January1",
  "February1",
  "March1",
  "April1",
  "May1",
  "June1",
  "July1",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "January1",
  "February1",
  "March1",
  "April1",
  "May1",
  "June1",
  "July1",
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => getRandomInt(0, 1000)),
      backgroundColor: "orange",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getRandomInt(0, 1000)),
      backgroundColor: "purple",
    },

    {
      label: "Dataset 3",
      data: labels.map(() => getRandomInt(0, 1000)),
      backgroundColor: "darkblue",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => getRandomInt(0, 1000)),
      backgroundColor: "blue",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => getRandomInt(0, 1000)),
      backgroundColor: "lightblue",
    },
  ],
};

const Chart2 = () => {
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
            position:"top"
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: {
              maxRotation: 90, // góc tối đa
              minRotation: 90, // góc tối thiểu
            },
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

export default Chart2;
