import React, { useState } from "react";
import logo from "../assets/images/svg/pagelogo.svg";
import { Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const [nav, setnav] = useState(true);
  return (
    <Nav className="bordr_bottm pb-2">
      <Container className="container nav_bar">
        <div
          className="d-flex align-items-center justify-content-between pt-2"
          id="home"
        >
          <img className="cur_pointr" src={logo} alt="logo" />
          <ul
            className={
              nav
                ? "l_m100 ps-0 mb-0 d-flex align-items-center mobile_ul"
                : "l_0 ps-0 mb-0 d-flex align-items-center mobile_ul"
            }
          >
            <li className="link_before_line">
              <a
                className="ff_rubik fs_sm fw-regular text-white opacity_07 li_hover"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="pt-md-0 pt-3 ms-md-4 link_before_line">
              <a
                className="ff_rubik fs_sm fw-regular text-white opacity_07 "
                href="#about"
              >
                About Us
              </a>
            </li>
            <li className="pt-md-0 pt-3 ms-md-4 link_before_line">
              <a
                className="ff_rubik fs_sm fw-regular text-white opacity_07 ps- md-4"
                href="#services"
              >
                Why Choose Us
              </a>
            </li>
            <button className="ff_rubik fs_sm fw-normal text-white border-0 bg_linear py_14 px_31 btn_hover d-md-none d-block mt-3">
              Contact Us
            </button>
            <div className="d-md-none d-block">
              <span
                className="text-white cross_size position-absolute top_0  right_27"
                onClick={() => {
                  setnav(true);
                }}
              >
                &#215;
              </span>
            </div>
          </ul>
          <button className="ff_rubik fs_sm fw-normal text-white border-0 bg_linear py_14 px_31 btn_hover d-md-block d-none btn_h">
            Contact Us
          </button>

          <div
            className="d-md-none d-block"
            onClick={() => {
              setnav(false);
            }}
          >
            <div className="navicon"> </div>
            <div className="navicon"></div>
            <div className="navicon"></div>
          </div>
        </div>
      </Container>
    </Nav>
  );
};

export default NavBar;
