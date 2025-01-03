import React from "react";
import { Data } from "../Data/DataList";

function CardList({ data }) {
  return (
    <ul className="space-y-8">
      {data.map((item, index) => (
        <li key={index} className="text-sm leading-6">
          <div className="bg-[#f7fafc] rounded-lg p-4 space-y-4 m-[4px]">
            <div className="flex flex-row items-start space-x-4">
              <img
                src={item.Image}
                alt="Image"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="text-left">
                <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
                <p className="font-semibold text-gray-400">{item.Designation}</p>
              </div>
            </div>
            <p className="text-black">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Card() {
  const getUniqueData = (data, startIndex, endIndex) => {
    return data.slice(startIndex, endIndex);
  };

  const firstUlData = getUniqueData(Data, 0, Math.ceil(Data.length / 3));
  const secondUlData = getUniqueData(Data, Math.ceil(Data.length / 3), Math.ceil((2 * Data.length) / 3));
  const thirdUlData = getUniqueData(Data, Math.ceil((2 * Data.length) / 3), Data.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-2xl text-black px-[2rem] md:px-[5rem] lg:px-[10rem] py-[3rem] gap-6 mx-auto ">
      <CardList data={firstUlData} />
      <CardList data={secondUlData} />
      <CardList data={thirdUlData} />
    </div>
  );
}

export default Card;
