import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { Leftarrow, Rightarrow } from "./common/icons/Icons";
const Services = ({ Service }) => {
  var servic = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2200,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const arrows = useRef();
  return (
    <>
      <section className="bg_img_services pt-5"id="services">
        <Container className="position-relative">
          <h4 className="ff_rubik fw-medium text-white fs_2xl text-center">
            Services
          </h4>
          <p className="ff_rubik fw-normal text-white fs_sm text-center mb-0">
            We sell products, but we are a service-based company. We’ll work
            with you to provide personalized solutions
            <span className="d-lg-block">
              to meet your specific requirements. Find some of our most commonly
              requested services below. 
            </span>
          </p>
          <Slider {...servic} className="py-5 product_slider"ref={arrows}>
            {Service.map((service) => {
              return (
                <div key={service.id} className="py-4 px-xl-3 px-2">
                  <div className="product_card_tranform_y h-100">
                    <div className="services_card text-center h-100 px-sm-3 px-2 py-sm-5 py-3">
                      <div className="services_card_img_shadow position-relative">
                        <img
                          src={service.img}
                          alt={service.name}
                          className="m-auto product_icons"
                          width={60}
                        />
                      </div>
                      <p className="ff_rubik fs_md fw-normal fst-italic text-white opacity_07 mb-1 mt-4 pt-sm-3">
                        {service.name}
                      </p>
                      <h5 className="ff_rubik fs_lg fw-normal text-white mb-3 lh_150 px-3">
                        {service.heading}
                      </h5>
                      <p className="ff_rubik fs_sm fw-normal text-white opcity_07 lh_160">
                        {service.para}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          <span
            className="services_arrows position-absolute left_arrows top-50 d-none d-xl-block"
            onClick={() => arrows.current.slickPrev()}
          >
            <Leftarrow />
          </span>
          <span
            className="services_arrows position-absolute right_arrows top-50 d-none d-xl-block"
            onClick={() => arrows.current.slickNext()}
          >
            <Rightarrow />
          </span>
        </Container>
      </section>
    </>
  );
};

export default Services;
