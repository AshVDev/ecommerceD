import React from "react";

import Item from "../item/Item";

const NewCollection = () => {
  return (
    <div className="new-collections flex flex-col items-center gap-[10px] height-[90vh]   ">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollection;
