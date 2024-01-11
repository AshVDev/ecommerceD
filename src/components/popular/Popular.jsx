import React from "react";

import Item from "../item/Item";

const Popular = ({ h1Heading, data }) => {
  return (
    <div className="popular flex flex-col items-center gap-[10px] mb-[100px] ">
      <h1 className="text-[#171717] text-[50px] font-[600] ">{h1Heading}</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] " />
      <div className="popular-item mt-[50px] flex flex-wrap gap-[30px] ">
        {data.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              itemName={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

// export const NewCollection = (Popular) => {

//     return ({h1Heading})=>{
//         return(
//             <Popular h1Heading={h1Heading} />
//         )
//     }

// }

export default Popular;
