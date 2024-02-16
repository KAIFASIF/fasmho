import { memo } from "react";
import AddCard from "./AddCard";
import Card from "./Card";

const CardSection = ({ data }: any) => {
  return (
    <section className="mt-4 flex gap-x-4 overflow-x-auto my-10">
      {data.length > 0 &&
        data.map((ele: any) => (
          <div className="shrink-0" key={ele?.id}>
            <Card cardClass="bg-gray-100" {...ele} />
          </div>
        ))}

      <div className="shrink-0">
        <AddCard />
      </div>
    </section>
  );
};

export default memo(CardSection);
