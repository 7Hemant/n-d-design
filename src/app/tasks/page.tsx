"use client";
import React, { useState, useEffect } from "react";
import { tasks } from "@/data";

const Tasks = () => {
  const [filterData, setFilterData] = useState<any>(tasks);
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mx-auto ">
      <div className="mx-auto w-[90%] relative">
        <div className="mx-auto shadow-md p-4 rounded-md fixed   bg-white">
          {[
            "All",
            "Open ",
            "Document Analysis",
            "In Progress",
            "Code Review",
          ].map((item: any, index: number) => (
            <button
              onClick={() => {
                if (item == "All") {
                  setFilterData(tasks);
                } else {
                  setFilterData(tasks.filter((task) => task?.status == item));
                }
              }}
              key={index}
              className="mx-4 mt-4 py-2 px-4 bg-orange-500 rounded-md hover:bg-orange-300"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="pt-20 mx-auto capitalize">
          <div className="mt-3 ">
            {filterData.length == 0 && <h1>NO TASK</h1>}
          </div>
          {filterData.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="shadow rounded-md m-4 p-4  hover:bg-orange-300"
              >
                <h1 className="font-bold">{item?.name}</h1>
                <p className=" my-2 text-[#8f8f8f]">{item?.discription}</p>
                <p className="">
                  <span className="text-semibold">status :</span>{" "}
                  <span className="text-[#ff6384]">{item?.status}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
