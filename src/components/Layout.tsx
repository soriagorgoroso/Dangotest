import React from "react";
import BackNextButton from "./BackNextButton";
import ProductCard from "./ProductCard";
import { products } from "../helpers/mocks/products";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-column justify-center items-center">
      <div className=" justify-center mt-6">
        <h3 className="text-center text-primary opacity-50 text-3xl font-bold leading-[40px] text-inter mb-8">
          Featured Collection
        </h3>
        <div className="grid grid-cols-2 gap-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imgUrl={product.imgUrl}
              price={product.price}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-40">
          <BackNextButton />
        </div>
      </div>
    </div>
  );
};

export default Layout;
