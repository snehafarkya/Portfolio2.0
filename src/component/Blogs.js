import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";

const Blogs = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="bg-screen">
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
        <Card item={item} />
        <div class=" text-center py-4 lg:px-4 w-max m-auto mt-20">
          <div
            class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="pl-3 font-semibold mr-2 text-gray-400 text-left flex-auto">
              Read my work <a href="" className="moreWorkLink text-gray-100 text-underline font-bold">here</a>
            </span>
            <svg
              class="fill-current opacity-75 h-4 w-4 font-bold text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
