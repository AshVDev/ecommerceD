import React from "react";
import { useSelector } from "react-redux";
import { Item } from "../components";
import { dropdownIcon } from "../utils/constants/banner";

const ShopCategory = ({ category, banner }) => {
  const allProduct = useSelector((store) => store.shop);
  return (
    <div className="shop-category flex flex-col items-center">
      <img
        className="shopcategory-banner block my-4 w-[82%]"
        alt="banner"
        src={banner}
      />
      <div className="shopcategory-indexSort flex gap-80 items-center my-4 p-4">
        <p className="text-center">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex justify-center items-center gap-2 px-2.5 py-3 rounded-[40px] border border-solid border-[#8888]">
          Sort by
          <img className="w-2.5 h-2.5" src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products p-4 flex flex-wrap gap-4 md:gap-20 justify-center">
        {allProduct.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={item.id}
                itemName={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-4 w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-lg font-[500]">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
