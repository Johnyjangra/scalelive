import React, { useState, useEffect } from "react";
import backtotop from "../assets/images/svg/backtotop_arrow.svg"
const BackToTop = () => {
  const back = () => {
    document.documentElement.scrollTop = 0;
  };
  const [First, setFirst] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setFirst(true);
      } else {
        setFirst(false);
      }
    });
  }, []);
  return (
    <>
      <section>
        {First ? (
          <div className="position-fixed  backtotop_icon c_pointer">
            <div onClick={back}>
             <img src={backtotop} alt="arrow_icon"className="w-100"/>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default BackToTop;
