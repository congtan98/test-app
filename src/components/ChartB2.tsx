import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [12],
      backgroundColor: ["Blue"],
      borderWidth: 0,
    },
  ],
};

const ChartB2 = () => {
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
            },
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
            align: "start",
            position: "top",
          },
        },
        layout: {
          padding: 20,
        },
      }}
    />
  );
};
export default ChartB2;
