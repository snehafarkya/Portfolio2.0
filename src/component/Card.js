import React from "react";
import { Button } from "@chakra-ui/react";
const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 m-auto gap-10 ">
          {item.map((Val) => {
            return (
              <div class="blogcard md:max-w-[340px] max-w-xs group rounded-xl  transition ease-in-out  overflow-hidden border-transparent shadow-lg bg-[#FAF9F6] m-auto h-full ">
                <img class="blogimg w-full h-48 rounded-t-xl group-hover:scale-[1.05] z-10 overflow-hidden transition ease-in-out duration-700 " src={Val.image} alt={Val.title}></img>
                <div class="px-6 py-4 z-50 overflow-hidden relative">
                  <div class="font-bold text-base mb-2 text-ellipsis line-clamp-2">{Val.title}</div>
                  <p class="text-gray-700 text-sm text-ellipsis line-clamp-3">
                    {Val.desc}
                  </p>
                </div>
              <button className="bg-transparent pb-4 text-[#670B8A] font-bold px-6 text-sm group-hover:underline underline-offset-2" margin='0em 1.3em 1em'><a href={Val.link} target="blank" className="text-sm">Read it here </a></button> 
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
