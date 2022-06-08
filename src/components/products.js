import React from "react";
import { selectoptions, products } from "./data";
import ProductCard from "./productcard";
const Products = () => {
  return (
    <div className=" mt-12">
      <div>
        {/* --header-- */}

        <div>
          <div className=" flex  justify-between ml-6 mr-12">
            {/* ---left- */}

            <div>
              <h1 className="  text-lg  font-semibold"> Nike Products</h1>
            </div>

            {/* -----right-- */}

            <div>
              <div>
                <select
                  className=" border-2 border-orange-400      outline-green-500"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                >
                  {selectoptions.map((option) => {
                    return <option value={option}>{option}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ---hesder under- */}

        <div className="  mt-6 mr-6">
          <div className="flex justify-between  border-2   bg-green-200 border-gray-400  p-4">
            {/* --left-- */}

            <div className="flex-1">
              <div className=" flex gap-6">
                <p>
                  <span>
                    <i className="i-fast-delivery-filled"></i>
                  </span>
                </p>

                <div>
                  <h1 className="  sm:text-[14px] lg:text-lg">
                    Hızlı Teslimat yapılan ürünleri göster
                  </h1>
                </div>
              </div>
            </div>

            {/* ---right-- */}

            <div className="   lg:block   sm:hidden w-[120px]  text-right mr-6">
              <div>
                <button className=" p-2   rounded-md w-[100px] bg-green-400 text-white  hover:text-green-700">
                  uygula
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- */}

        <div className=" mt-14">
          {/* ---all products--- */}

          <div className="  flex flex-wrap">
            {products.map((product) => {
              return (
                <div className="  mb-12 sm:w-1/2 lg:w-1/3">
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
