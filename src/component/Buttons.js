import React from "react";
import Data from "./Data";
import { Button } from "@chakra-ui/react";

const Buttons = ({ filterItem, setItem, menuItems }) => {
 console.log(menuItems)
  return (
    <>
      <div className="grid md:sticky mt-4 top-4 h-max grid-cols-2 pb-4 w-max place-items-center gap-x-4 justify-center mx-auto  md:flex md:flex-col md:justify-start md:items-start">
      <button
        background='#37126D'
        letterSpacing='1px'
        marginBottom='1.5em'
        className="btnshadow my-2 hover:no-underline px-4 text-left font-bold bg-white rounded-md hover:bg-gray-100 text-black w-full transition ease-in-out duration-700 py-2  btn fw-bold"

          onClick={() => setItem(Data)}
        >
          All Blogs
        </button> 
        {menuItems.map((Val, id) => {
          return (
            <>
            <button
              background='#37126D'
              letterSpacing='1px'
              marginBottom='1.5em'
              className="btnshadow hover:scale-[1.03] my-2 text-left min-w-max px-4 hover:no-underline font-bold bg-white rounded-md hover:bg-gray-100 text-black w-full transition ease-in-out duration-400 py-2  btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val} Blogs
            </button>
            </>
          );
        })}
            {/* {menuDesc.map(value=>)} */}

        
       </div>
    </>
    
  );
};
 
export default Buttons;