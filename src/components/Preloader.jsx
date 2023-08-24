import React from "react";
import preloder_img from "../assets/images/webp/preloader.webp";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 2000);
  return (
    <section className="bg-black z_index_1000 position-relative" id="none">
      <div className="none">
        <div className="bg-black text-center d-flex align-items-center justify-content-center start-0 top-0 b w-100 z_index_100 min-vh-100 position-fixed">
          <img
            src={preloder_img}
            alt="preloder_img"
            className="d-flex align-items-center justify-content-center animation_preloader"
          />
        </div>
      </div>
    </section>
  );
};
export default Preloader;
