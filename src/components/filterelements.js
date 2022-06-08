import React from "react";
import { useState, useEffect } from "react";
import Accordion from "./accordion";
import { filtercat,jinsiyet } from "./data";
const Filterelements = () => {
  const [showmore, setShowmore] = useState((1, 6));
  const [showtext, setShowtext] = useState("show more");

  const showingcat = filtercat.slice(0, showmore);

  const handleShowmore = () => {
    if (showmore === 6) {
      console.log("showmore", showmore);

      setShowmore(showmore - 6 + filtercat.length);
      console.log(showmore);
      setShowtext("show less");
    }

    if (showmore === filtercat.length) {
      setShowmore(6);
      setShowtext("show more");
    }
  };

  return (
    <div className=" pb-12">
      {showmore}
      <div>
        <Accordion title={"categoris"}>
          <div className=" [text-[16px]">
            <ul>
              {showingcat.map((cat, index) => {
                return (
                  <li className=" text-[13px]">
                    <p>{cat}</p>
                  </li>
                );
              })}
            </ul>

            <div>
              <p
                className="  text-orange-500  text-[18px]  font-bold"
                onClick={handleShowmore}
              >
                {showtext}
              </p>
            </div>
          </div>
        </Accordion>

        {/* accordion 2--- */}


        <Accordion title={"jinsiyet"}>
          <div className=" [text-[16px]">
            <ul>
              {jinsiyet.map((item, index) => {
                return (
                  <li className=" text-[13px]">
                    <p className="flex">

<span><input type="checkbox" /> </span>
<h4 className="ml-4">{item}</h4>
                    </p>
                  </li>
                );
              })}
            </ul>

            <div>
              {/* <p
                className="  text-orange-500  text-[18px]  font-bold"
                onClick={handleShowmore}
              >
                {showtext}
              </p> */}
            </div>
          </div>
        </Accordion>





        {/* -3----- */}


        <Accordion title={"Size"}>
          <div className=" [text-[16px]">
            <ul>
              {jinsiyet.map((item, index) => {
                return (
                  <li className=" text-[13px]">
                    <p className="flex">

<span><input type="checkbox" /> </span>
<h4 className="ml-4">{item}</h4>
                    </p>
                  </li>
                );
              })}
            </ul>

            <div>
              {/* <p
                className="  text-orange-500  text-[18px]  font-bold"
                onClick={handleShowmore}
              >
                {showtext}
              </p> */}
            </div>
          </div>
        </Accordion>





{/* 4----- */}


<Accordion title={"colors"}>
          <div className=" [text-[16px]">
            <ul>
              {jinsiyet.map((item, index) => {
                return (
                  <li className=" text-[13px]">
                    <p className="flex">

<span><input type="checkbox" /> </span>
<h4 className="ml-4">{item}</h4>
                    </p>
                  </li>
                );
              })}
            </ul>

            <div>
              {/* <p
                className="  text-orange-500  text-[18px]  font-bold"
                onClick={handleShowmore}
              >
                {showtext}
              </p> */}
            </div>
          </div>
        </Accordion>




      </div>
    </div>
  );
};

export default Filterelements;
