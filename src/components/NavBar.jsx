import React, { useState } from "react";
import logo from "../assets/images/svg/pagelogo.svg";
import { Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const [nav, setnav] = useState(true);
  function showUl() {
    setnav(!nav);
  }
  if (!nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <Nav className="bordr_bottm pb-2 position-relative z-3">
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
                onClick={() => setnav(true)}
              >
                Home
              </a>
            </li>
            <li className="pt-md-0 pt-3 ms-md-4 link_before_line">
              <a
                className="ff_rubik fs_sm fw-regular text-white opacity_07 "
                href="#about"
                onClick={() => setnav(true)}
              >
                About Us
              </a>
            </li>
            <li className="pt-md-0 pt-3 ms-md-4 link_before_line">
              <a
                className="ff_rubik fs_sm fw-regular text-white opacity_07"
                href="#services"
                onClick={() => setnav(true)}
              >
                Why Choose Us
              </a>
            </li>
            <button
              className="ff_rubik fs_sm fw-normal text-white border-0 bg_linear py_14 px_31 btn_hover d-md-none d-block mt-3"
              onClick={() => setnav(true)}
            >
              Contact Us
            </button>
            <div className="d-md-none d-block">
              <span
                className="text-white cross_size position-absolute top_0 right_27"
                onClick={showUl}
              >
                &#215;
              </span>
            </div>
          </ul>
          <button className="ff_rubik fs_sm fw-normal text-white border-0 bg_linear py_14 px_31 btn_hover d-md-block d-none btn_h">
            Contact Us
          </button>

          <div className="d-md-none d-block" onClick={showUl}>
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
