import { Card } from "antd";
import Item from "antd/lib/list/Item";
import React from "react";

import { useState } from "react";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  // make arrayfrom stars number

  const arrstars = [];
  for (let i = 0; i < product.stars; i++) {
    arrstars.push(i);
    console.log(arrstars)
  }


return (

  <Card
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src={product.image} />}
  >
    <div className=" container relative">
      {/* -----1- absolute colors */}

      <div>
        <div className=" absolute  top-[-50px]  right-[-20px]  bg-white  shadow-xl  w-[42px] h-[22px]">
          <div className="flex gap-2  place-items-center">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span>{product.colors}</span>
          </div>
        </div>
      </div>




{/* absolute heart and kargo */}


<div>

<div className=" absolute heart-parent">

<p className=" 
  relative top-[9px]

">

<img 
className=" w-8 h-8"
src="https://cdn0.iconfinder.com/data/icons/business-office-1-7/55/35-256.png" alt="" />
</p>


</div>





{/* ----kargo- */}


<div  className=" absolute  top-[-250px] kargo-teslim">


{product.kargobedava &&
<div>
<p className=" text-[12px] text-white     bg-green-700  rounded-md pl-2 pr-2 font-bold">
    kargobedava</p>


</div>
}


{ product.hizliteslim &&
<div>
    <p
    className="text-[12px] text-white    bg-gray-800 text-center rounded-md pl-2 pr-2 font-bold"
    
    >hizliteslim</p>

</div>
}
</div>


</div>

      {/* -data--- */}

      <div>
        <div>
          <h1 className="text-xl font-semibold">{product.category}</h1>

          <h2>{product.name}</h2>
        </div>

        {/* ---satars and puan--- */}

        <div   className =' flex gap-4'>
          <div className=" flex gap-2">
           {/* {stars} */}

           {arrstars.map((star) => {
return (
<div>
<i className="fa-solid fa-star  --fa-secondary-"></i>
</div>
)   })}

          </div>

          <div >

<p className="text-sm ">{product.puan}</p>
        </div>



        </div>

      
        <div>

<h1
className="  text-orange-700 ml-6 text-lg"
>{product.price}</h1>
</div>
      </div>
    </div>
  </Card>
)
};

export default ProductCard;
