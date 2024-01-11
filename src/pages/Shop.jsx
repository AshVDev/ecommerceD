import React from "react";
import { Offers, Hero, Popular, NewsLetter } from "../components";
import data_product from "../components/assets/data";
import new_collection from "../components/assets/new_collections";
// import NewCollection from "../components/newcollection/NewCollection";
const NewCollection = () => (
  <Popular h1Heading={"NEW COLLECTIONS"} data={new_collection} />
);

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular h1Heading={"POPULAR IN WOMEN"} data={data_product} />
      <Offers />
      <NewCollection />
      <NewsLetter />
      Shop
    </div>
  );
};

export default Shop;
