import React from "react";
import { Button } from "@chakra-ui/react";
const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3  gap-10">
          {item.map((Val) => {
            return (
              <div class="blogcard max-w-sm rounded overflow-hidden shadow-lg bg-purple-400 m-auto h-full ">
                <img class="w-full h-56" src={Val.image} alt="Sunset in the mountains"></img>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{Val.title}</div>
                  <p class="text-gray-700 text-base">
                    {Val.desc}
                  </p>
                </div>
                <Button className="filterBtn px-6" margin='0em 1.3em 1em'><a href={Val.link}>Read it here</a></Button> 
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
