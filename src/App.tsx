import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import Chart3 from "./components/Chart3";
import PieChart from "./components/PieChart";
import ChartB1 from "./components/ChartB1";
import ChartB2 from "./components/ChartB2";
import ChartC1 from "./components/ChartC1";

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

// Chart bên trái (bình thường)
const leftOptions = {
  ...baseOptions,
  scales: {
    x: { reverse: false, grid: { display: false } },
    y: { reverse: true, grid: { display: false } }, // để 2 chart đối xứng
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

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const leftData = {
  labels,
  datasets: [
    {
      data: labels.map(() => getRandomInt(0, 900)).sort((a, b) => a - b),
      backgroundColor: "darkblue",
    },
  ],
};

const rightData = {
  labels,
  datasets: [
    {
      data: labels.map(() => getRandomInt(0, 900)).sort((a, b) => a - b),
      backgroundColor: "blue",
    },
  ],
};

// ======================== APP ========================
const App: React.FC = () => {
  return (
    <div className="p-2 rounded-md">
      <h1 className="text-red-500">OPPT Mockup 2</h1>
      <div className="p-2 rounded-md bg-gray-200">
        <h1 className="text-green-800 font-bold">
          A. Attribute contribute to the prediction
        </h1>
        <div className="w-full rounded-md p-2 bg-white">
          <Chart1 />
        </div>
        <div className="flex items-center justify-between gap-2 py-2">
          <div
            className="w-1/2 rounded-md p-2 bg-white"
            style={{
              height: labels.length * 40,
            }}
          >
            <Bar data={rightData} options={rightOptions} />
          </div>

          <div
            className="w-1/2 rounded-md p-2 bg-white"
            style={{
              height: labels.length * 40,
            }}
          >
            <Bar data={leftData} options={leftOptions} />
          </div>
        </div>
      </div>
      <div className="p-2 rounded-md mt-5 bg-gray-200">
        <h1 className="text-green-800 font-bold">
          B. Quote details of this opportunity
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md flex flex-col">
            <div className="grid grid-cols-3 gap-2 mb-2 h-1/4">
              <div className="rounded-md p-2 bg-white">
                <label htmlFor="">test time point</label>
                <select className="border border-gray-200 rounded-sm p-1 w-full">
                  <option value="last_7_days">Last 7 days</option>
                  <option value="last_30_days">Last 30 days</option>
                  <option value="last_90_days">Last 90 days</option>
                </select>
              </div>
              <div className="rounded-md p-2 mb-2 h-full flex items-center justify-center text-center bg-white">
                <>
                  <p>713</p>
                  <p>Count of oppotunity</p>
                </>
              </div>
              <div className="rounded-md p-2 mb-2 h-full flex items-center justify-center text-center bg-white">
                <>
                  <p>713</p>
                  <p>Count of oppotunity</p>
                </>
              </div>
            </div>
            <div className="w-full rounded-md p-2 bg-white h-full">
              <ChartB1 />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md p-2 bg-white">
              <ChartB2 />
            </div>
            <div className="rounded-md p-2 bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="px-2">Column1</th>
                    <th>Column1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-2 rounded-md p-2 bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="px-2">Column1</th>
                    <th>Column1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-md mt-5 bg-gray-200">
        <h1 className="text-green-800 font-bold">
          C. Opportunity update history
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="rounded-md p-2 bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="px-2">Column1</th>
                    <th>Column1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-md p-2 bg-white">
              <ChartC1 />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-md p-2 bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="px-2">Column1</th>
                    <th>Column1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-md p-2 bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="px-2">Column1</th>
                    <th>Column1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-md p-2 bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="px-2">Column1</th>
                    <th>Column1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </h1>
      </div>

      <div className="p-2 rounded-md mt-5 bg-gray-200">
        <h1 className="text-red-500">OPPT Mockup 1</h1>
        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <div className="rounded-md flex flex-col">
            <div className="grid grid-cols-4 gap-2 pb-2 h-1/4">
              <div className="h-full bg-white rounded-md">
                <div className="rounded-md p-2">
                  <label htmlFor="">test time point</label>
                  <select className="border border-gray-200 rounded-sm p-1 w-full">
                    <option value="last_7_days">Last 7 days</option>
                    <option value="last_30_days">Last 30 days</option>
                    <option value="last_90_days">Last 90 days</option>
                  </select>
                </div>
                <div className="rounded-md p-2 bg-white">
                  <label htmlFor="">test time point</label>
                  <select className="border border-gray-200 rounded-sm p-1 w-full">
                    <option value="last_7_days">Last 7 days</option>
                    <option value="last_30_days">Last 30 days</option>
                    <option value="last_90_days">Last 90 days</option>
                  </select>
                </div>
              </div>
              <div className="rounded-md p-2 mb-2 h-full bg-white">
                <label htmlFor="">test time point</label>
                <input
                  type="text"
                  className="border border-gray-200 w-full rounded-sm mb-2"
                />
                <input
                  type="text"
                  className="border border-gray-200 w-full rounded-sm mb-2"
                />
              </div>
              <div className="rounded-md p-2 mb-2 h-full bg-white">
                <label htmlFor="">test time point</label>
                <input
                  type="text"
                  className="border border-gray-200 w-full rounded-sm mb-2"
                />
                <select className="border border-gray-200 rounded-sm p-1 w-full">
                  <option value="last_7_days">Last 7 days</option>
                  <option value="last_30_days">Last 30 days</option>
                  <option value="last_90_days">Last 90 days</option>
                </select>
              </div>
              <div className="rounded-md p-2 mb-2 h-full flex items-center justify-center text-center bg-white">
                <>
                  <p>713</p>
                  <p>Count of oppotunity</p>
                </>
              </div>
            </div>
            <div className="rounded-md p-2 flex-1 bg-white">
              <Chart2 />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md p-2 bg-white">
              <PieChart />
            </div>
            <div className="rounded-md p-2 bg-white">
              <Chart3 />
            </div>
            <div className="rounded-md p-2 bg-white">
              <PieChart />
            </div>
            <div className="rounded-md p-2 bg-white">
              <Chart3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
