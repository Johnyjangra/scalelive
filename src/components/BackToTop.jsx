import React, { useState, useEffect } from "react";
import backtotop from "../assets/images/png/backToTop.png"
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
             <img src={backtotop} alt="arrow_icon" height={70}width={68}/>
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
