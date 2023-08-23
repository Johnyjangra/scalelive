import React from "react";
import { Col, Container } from "react-bootstrap";
import map from "../assets/images/png/map3.webp";
import europ from "../assets/images/svg/europ.svg";

const Hero = () => {
  return (
    <div className="pt-5">
      <Container class="container pt-4">
        <div className="red_round position-absolute round_red_set"></div>
        <h1 className="ff_rubik fs_3xl fw-semibold mx_785 text-white mx-auto lh_112 text-center pt-md-3 position-relative z-1">
          Redefining the Smartphone Re-Commerce Industry Since 2010
        </h1>
        <p className="ff_rubik fs_lg fw-normal text-white mx_617 text-center mx-auto pt-1 position-relative z-1">
          Serving customers across North America, South America, Europe,
          Australia, and Asia
        </p>
        <Col lg={10} className="mx-auto pt-md-5 pt-3 position-relative z-1">
          {/* <img
            className="position-absolute europ_set"
            src={europ}
            alt="europ"
          /> */}
          <img className="w-100 " src={map} alt="map" />
        </Col>
      </Container>
    </div>
  );
};

export default Hero;
