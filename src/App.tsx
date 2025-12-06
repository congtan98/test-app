import React from "react";
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
import Chart2 from "./components/Chart2";
import PieChart from "./components/PieChart";
import Chart3 from "./components/Chart3";
import Chart1 from "./components/Chart1";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ======================== OPTIONS ========================
const baseOptions = {
  indexAxis: "y" as const,
  elements: { bar: { borderWidth: 1 } },
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

// Chart bên trái (bình thường)
const leftOptions = {
  ...baseOptions,
  scales: {
    x: { reverse: false, grid: { display: false } },
    y: { reverse: true , grid: { display: false }}, // để 2 chart đối xứng
  },
};

// Chart bên phải (lật ngược)
const rightOptions = {
  ...baseOptions,
  scales: {
    x: { reverse: true, grid: { display: false } }, // chạy từ phải → trái
    y: { reverse: true, grid: { display: false } }, // giữ cùng chiều để đối xứng
  },
};

// ======================== DATA ========================
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const leftData = {
  labels,
  datasets: [
    {
      data: labels
        .map(() => faker.datatype.number({ min: 0, max: 900 }))
        .sort((a, b) => a - b),
      backgroundColor: "rgba(53, 162, 235, 0.6)",
    },
  ],
};

const rightData = {
  labels,
  datasets: [
    {
      data: labels
        .map(() => faker.datatype.number({ min: 0, max: 900 }))
        .sort((a, b) => a - b),
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

const win = 80;

// ======================== APP ========================
const App: React.FC = () => {
  return (
    <div className="p-20">
      {/* <div className="h-28 w-full"> */}
      <Chart1 />
      {/* </div> */}
      <div className="flex items-center gap-10 p-10">
        {/* Biểu đồ phải */}
        <div className="w-1/2">
          <h2 className="text-center mb-2 font-semibold">Chart Right</h2>
          <Bar data={rightData} options={rightOptions} />
        </div>
        {/* Biểu đồ trái */}
        <div className="w-1/2">
          <h2 className="text-center mb-2 font-semibold">Chart Left</h2>
          <Bar data={leftData} options={leftOptions} />
        </div>
      </div>
      <div className="flex justtify-between gap-3">
        <div className="w-1/2">
          <Chart2 />
        </div>

        {/* <div className="grid grid-cols-2"> */}
        <div className="grid grid-cols-2">
          <div>
            <PieChart />
          </div>
          <div>
            <Chart3 />
          </div>
          <div>
            <PieChart />
          </div>
          <div>
            <Chart3 />
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
