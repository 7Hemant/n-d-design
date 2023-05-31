"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { tasks } from "@/data";

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,

      title: {
        display: true,

        text: "Time (hours)",
      },
    },

    x: {
      title: {
        display: true,

        text: "Tasks",
      },
    },
  },
};

const Charts = () => {
  return (
    <>
      <div className="md:max-w-[950px] md:w-[600px] lg:w-[950px]  ">
        <Line
          options={options}
          data={{
            labels: tasks?.map((item) => item?.name),
            datasets: [
              {
                label: "Total Time Utilized",
                data: tasks?.map((task) => task?.totalTimeUtilized),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
              {
                label: "Estimate Time",
                data: tasks?.map((item) => item?.estimateTime),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Charts;
