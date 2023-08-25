import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const Products = ({ Product }) => {
  var produc = {
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
      <section className="position-relative pt-5 pb-sm-5" id="products">
        <div className="grren_circle product_green_circle position-absolute"></div>
        <Container className="pt-md-5 mb-xl-5">
          <h5 className="ff_rubik fw-medium text-white fs_2xl text-center pb-lg-4">
            Products
          </h5>
          <div className="product_slider">
            <Slider {...produc} className="py-md-5  product_slider">
              {Product.map((product) => {
                return (
                  <div key={product.id} className="py-5 px-xl-3 px-2"data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay="2000">
                    <div className="product_card_tranform_y h-100">
                      <div className="product_card text-center h-100 px-sm-4 px-2 py-sm-5 py-3">
                        <div className="product_card_img_shadow position-relative">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="m-auto product_icons"
                            width={60}
                          />
                        </div>
                        <p className="text_blue ff_rubik fs_md fw-normal fst-italic mb-1 mt-4 pt-sm-3">
                          {product.name}
                        </p>
                        <h5 className="ff_rubik fs_lg fw-normal text-white mb-3 lh_150">
                          {product.heading}
                        </h5>
                        <p className="ff_rubik fs_sm fw-normal text-white opacity_07 lh_160">
                          {product.para}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
