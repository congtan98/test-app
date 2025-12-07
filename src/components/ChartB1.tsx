import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const baseOptions = {
  indexAxis: "y" as const,
  elements: { bar: { borderWidth: 1 } },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
      align: "start" as const,
      
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const leftOptions = {
  ...baseOptions,
  scales: {
    x: { reverse: false, grid: { display: false } },
    y: { reverse: true, grid: { display: false } }, // để 2 chart đối xứng
  },
};

const leftData = {
  labels,
  datasets: [
    {
      data: labels.map(() => getRandomInt(0, 900)).sort((a, b) => a - b),
      backgroundColor: "blue",
    },
  ],
};

const ChartB1 = () => {
  return <Bar data={leftData} options={leftOptions} />;
};
export default ChartB1;
