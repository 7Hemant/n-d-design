import Card from "@/components/Card";
import Charts from "@/components/Charts";
import { tasks } from "@/data";
export default function Home() {
  return (
    <div className=" w-max mx-auto">
      <div className="flex flex-wrap ">
        {tasks.map((item, index) => {
          if (index < 3) {
            return (
              <Card
                status={item?.status}
                name={item?.name}
                discription={item?.discription}
                key={index}
              />
            );
          }
        })}
      </div>
      <Charts />
    </div>
  );
}
