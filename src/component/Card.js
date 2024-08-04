import React from "react";
import { Button } from "@chakra-ui/react";
const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 md:m-auto  gap-10 ">
          {item.map((Val) => {
            return (
              <a href={Val.link} target="blank" >
              <div class="blogcard text-[#18244b] md:max-w-[340px] w-[340px]  group rounded-xl  transition ease-in-out  overflow-hidden border-transparent z-50 shadow-lg bg-[linear-gradient(40deg,#ffffff,#c8d2ee)] m-auto h-full ">
                <img class="blogimg w-full h-48 rounded-t-xl group-hover:scale-[1.05]  overflow-hidden transition ease-in-out duration-700 z-10" src={Val.image} alt={Val.title}></img>
                <div class="px-6 py-4 z-30 overflow-hidden relative">
                  <div class="font-bold text-[#18244b] text-base mb-2 text-ellipsis line-clamp-2">{Val.title}</div>
                  <p class="text-[#18244b] text-sm text-ellipsis line-clamp-3">
                    {Val.desc}
                  </p>
                </div>
              <button className="bg-transparent pb-4 text-[#670B8A] font-bold px-6 text-sm group-hover:underline underline-offset-2" margin='0em 1.3em 1em'><a href={Val.link} target="blank" className="text-sm">Read it here </a></button> 
              </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
