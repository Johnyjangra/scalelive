import React from "react";
import { Col, Container } from "react-bootstrap";
import map from "../assets/images/png/map3.webp";
import linemap from "../assets/images/png/graphline.png";
const Hero = () => {
  return (
    <section className="pt-5 position-relative" id="home">
      <img
        className="position-absolute graph_set z_m1"
        src={linemap}
        alt="linemap"
      />
      <div className="grren_circle hero_green_circle position-absolute"></div>
      <div className="hero_blue_circle position-absolute d-none d-md-block"></div>
      <Container className="container pt-4">
        <div className="red_round position-absolute round_red_set"></div>
        <h1 className="ff_rubik fs_3xl fw-semibold mx_785 text-white mx-auto lh_112 text-center pt-md-3 position-relative z-1">
          Redefining the Smartphone Re-Commerce Industry Since 2010
        </h1>
        <p className="ff_rubik fs_lg fw-normal text-white mx_617 text-center mx-auto pt-1 position-relative z-1 opacity_09">
          Serving customers across North America, South America, Europe,
          Australia, and Asia
        </p>
        <Col lg={11} className="mx-auto pt-md-5 pt-3 position-relative z-1">
          <img className="w-100 " src={map} alt="map" />
        </Col>
      </Container>
    </section>
  );
};

export default Hero;
