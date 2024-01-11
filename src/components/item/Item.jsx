import React from "react";

const Item = ({ image, itemName, new_price, old_price }) => {
  return (
    <div className="item w-[350px] transform hover:scale-105 transition-all duration-600 ">
      <img src={image} alt="" />
      <p className="my-6 mx-0">{itemName}</p>
      <div className="item-prices flex gap-5 ">
        <div className="item-price-new text-[#374151] text-lg font-[600] ">
          ${new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-lg font-[500] line-through">
          ${old_price}
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Item;
