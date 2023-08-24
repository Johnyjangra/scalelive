import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const Services = ({ Service }) => {
  var servic = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
  return (
    <>
      <section id="services">
        <Container>
          <h4 className="ff_rubik fw-medium text-white fs_2xl text-center">
            Services
          </h4>
          <p className="ff_rubik fw-normal text-white fs_sm text-center">
            We sell products, but we are a service-based company. We’ll work
            with you to provide personalized solutions
            <span className="d-lg-block">
              to meet your specific requirements. Find some of our most commonly
              requested services below. 
            </span>
            <Slider {...servic} className="py-5 product_slider">
              {Service.map((service) => {
                return (
                  <div key={service.id} className="py-5 px-xl-3 px-2">
                    <div className="product_card_tranform_y h-100">
                      <div className="product_card text-center h-100 px-sm-4 px-2 py-sm-5 py-3">
                        <div className="product_card_img_shadow position-relative">
                          <img
                            src={service.img}
                            alt={service.name}
                            className="m-auto product_icons"
                            width={60}
                          />
                        </div>
                        <p className="text_blue ff_rubik fs_md fw-normal fst-italic mb-1 mt-4 pt-sm-3">
                          {service.name}
                        </p>
                        <h5 className="ff_rubik fs_lg fw-normal text-white mb-3 lh_150">
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
          </p>
        </Container>
      </section>
    </>
  );
};

export default Services;
