import React from "react";
import Link from "next/link";

import { BsClipboardCheck, BsPersonPlus } from "react-icons/bs";
import { RxCube } from "react-icons/rx";
import { IoHomeOutline, IoPrint } from "react-icons/io5";

import { GiStairsGoal } from "react-icons/gi";

const navLinks = [
  {
    icon: <IoHomeOutline />,
    name: "dashboard",
    link: "/",
  },

  {
    icon: <BsClipboardCheck />,
    name: "tasks",
    link: "/tasks",
  },
  {
    icon: <IoPrint />,
    name: "projects",
    link: "/projects",
  },
  {
    icon: <BsPersonPlus />,
    name: "employees",
    link: "/employees",
  },
  {
    icon: <GiStairsGoal />,
    name: "milestones",
    link: "/milestones",
  },
  {
    icon: <RxCube />,
    name: "desk",
    link: "/desk",
  },
];

const SideBar = () => {
  return (
    <div className=" h-screen shadow-md py-3    ">
      <h1 className="font-bold text-orange-500 text-[3rem] ml-4 mx-auto ">
        logo
      </h1>
      <div>
        <ul className=" flex flex-col items-start justify-center gap-2  h-full w-full ">
          {navLinks.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                href={item.link}
                className={`hover:text-primary  hover:bg-orange-300 flex justify-start cursor-pointer  items-center gap-3 px-3 py-4 w-full  text-2xl`}
              >
                {item.icon}{" "}
                <span className=" font-medium capitalize text-[1rem]">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
