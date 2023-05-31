import React from "react";

const Card = (props: any) => {
  const { name, discription, status } = props;
  return (
    <div className="w-[300px] h-[200px] border rounded-md p-4 shadow-xl mx-2 my-4 ">
      <div className="mb-2">
        <h1 className="font-bold capitalize ">
          Task name:
          <span className="font-semibold text-[#35a2eb] ml-2 ">
            {name}
          </span>{" "}
        </h1>
      </div>
      <div className="h-[60%] overflow-hidden">
        <h1 className="font-bold">Description</h1>
        <p className="font-[500] capitalize">::{discription} </p>
      </div>

      <div className="mt-4">
        <h1>
          status : <span className="text-[#ff6384]">{status}</span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
