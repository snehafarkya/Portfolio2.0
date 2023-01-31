import React from "react";
import Data from "./Data";
import { Button } from "@chakra-ui/react";

const Buttons = ({ filterItem, setItem, menuItems }) => {
 
  return (
    <>
      <div className="grid grid-cols-2 place-items-center md:grid-cols-4 ">
        {menuItems.map((Val, id) => {
          return (
            <Button
              background='#37126D'
              letterSpacing='1px'
              marginBottom='1.5em'
              className="filterBtn text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </Button>
          );
        })}
        <Button
        background='#37126D'
        letterSpacing='1px'
        marginBottom='1.5em'
          className="filterBtn text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All
        </Button> 
       </div>
    </>
    
  );
};
 
export default Buttons;