import React from "react";
import { Col, Container } from "react-bootstrap";
import map from "../assets/images/png/newmap.png";
import areamap from "../assets/images/webp/areamap.webp";
import linemap from "../assets/images/png/graphline.png";
import smalldot from "../assets/images/svg/smalldot.svg";
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
        <Col lg={11} className="mx-auto pt-md-5 pt-3  z-1">
          <div className="position-relative d-md-block d-none">
            <div className="d-flex align-items-center position-absolute usa_pos">
              <div className="wid_138 w_md_70 bg_green py-2 ">
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center d-lg-block d-none">
                  United State and Canada
                </p>
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center d-lg-none d-block">
                  usa
                </p>
              </div>
              <div className="white_line ms-2"></div>
              <div className="map_dot_size">
                <img className="w-100" src={smalldot} alt="smalldot" />
              </div>
            </div>

            <div className="d-flex align-items-center position-absolute latin_pos">
              <div className="wid_138 w_md_100 bg_brown py-2 ">
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center d-lg-block d-none">
                  Latin Amirica and the Caribben
                </p>
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center d-lg-none d-block">
                  Latin Amirica
                </p>
              </div>
              <div className="white_line_2 ms-2"></div>
              <div className="map_dot_size">
                <img className="w-100" src={smalldot} alt="smalldot" />
              </div>
            </div>

            <div className="d-flex align-items-center position-absolute africa_pos">
              <div className="map_dot_size">
                <img className="w-100" src={smalldot} alt="smalldot" />
              </div>
              <div className="white_line me-2"></div>
              <div className="wid_138 w_md_70 w bg_aqua py-3 ">
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center ">
                  Africa
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center position-absolute asia_pos">
              <div className="map_dot_size">
                <img className="w-100" src={smalldot} alt="smalldot" />
              </div>
              <div className="white_line white_asia_media_line me-2"></div>
              <div className="wid_138 w_md_70 bg_darkgreen py-2 px-2 ">
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center d-lg-block d-none">
                  Asia and the Pacific
                </p>
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center d-lg-none d-block">
                  Asia
                </p>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center position-absolute europ_pos">
              <div className="wid_138 bg_red py-2 ">
                <p className="ff_rubik fs_xsm fw-normal text-white mb-0 text-center ">
                  Europe and the Middle East
                </p>
              </div>
              <div className="white_verticl_line mt-2"></div>
              <div className="map_dot_size">
                <img className="w-100" src={smalldot} alt="smalldot" />
              </div>
            </div>
            <img className="w-100 " src={map} alt="map" />
          </div>
          <div className="d-md-none d-block">
            <img className="w-100" src={areamap} alt="areamap" />
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Hero;
