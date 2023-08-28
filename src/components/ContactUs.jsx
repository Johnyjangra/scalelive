import React, { Container, Row, Col} from "react-bootstrap";
import { useState } from "react";
import form_img from "../assets/images/webp/form_img.webp";
import icon from "../assets/images/svg/dropdown_icon.svg"
const ContactUs = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("CA");
  return (
    <>
      <section className="pb-5 position-relative" id="contact">
        <div className="grren_circle position-absolute contact_top_circle d-none d-xxl-block"></div>
        <div className="grren_circle position-absolute contact_bottom_circle"></div>
        <div className="mw_1440 position-relative">
          <Container className="mb-my-5 py-md-5">
            <h2
              className="fs_2xl text-white ff_rubik fw-medium text-center"
              data-aos="fade-up"
            >
              Contact Us
            </h2>
            <p
              className="text-center fs_lg fw-normal ff_rubik txt_skyblue font_s_italic"
              data-aos="fade-up"
            >
              Join Our Family Of Partners
            </p>
            <div className="mw_899 text-center mx-auto" data-aos="fade-up">
              <p className="ff_rubik text-white opacity_07 fw-normal fs_sm lh_150 mb-1">
                Want to access unique products at unbeatable prices? Be one of
                the first to get their hands on the market’s ultimate
                smartphones?
              </p>
              <p className="ff_rubik text-white opacity_07 fw-normal fs_sm lh_150 mb-1">
                If you have already nodded positively, this is your sign to
                partner with us and enter our ever-growing community of loyal
                members!
              </p>
              <p className="ff_rubik text-white opacity_07 fw-normal fs_sm lh_150 mb-1">
                Being a SCal Mobile partner means you get solutions tailored to
                your business needs and access our daily and weekly inventory
                lists with numerous smartphone opportunities at the most
                competitive prices. We constantly update our catalogs to help
                you unlock the best deals in the secondary smartphone industry!
              </p>
              <p className="ff_rubik text-white opacity_07 fw-bold fs_sm lh_150 mb-1">
                So, are you ready to earn more for less?
              </p>
              <p className="ff_rubik text-white opacity_07 fw-normal fs_sm lh_150 mb-1">
                Fill out the contact form below, and we will take care of the
                rest.
              </p>
            </div>
            <Row className="align-items-center flex-column-reverse flex-xl-row mt-5 pt-xl-4 justify-content-between">
              <Col xl={7}>
                <form
                  action="required"
                  className="contact_form pt-lg-5 pt-xl-0 pt-4"
                >
                  <div
                    className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Col sm={6}>
                      <span>First Name*</span>
                      <input type="text" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <span>Last Name*</span>
                      <input type="text" className="w-100" />
                    </Col>
                  </div>
                  <div
                    className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <Col sm={6}>
                      <span>Company Name*</span>
                      <input type="text" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <span>Phone Number*</span>
                      <input type="text" className="w-100" />
                    </Col>
                  </div>
                  <div
                    className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <Col sm={6}>
                      <span>Email*</span>
                      <input type="email" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <span>Company Type*</span>

                      <div className="dropdown">
                            <div
                              onClick={(e) => {
                                setIsActive(!isActive);
                              }}
                              className="dropdown-btn d-flex justify-content-between"
                            >
                              {selected}
                              
                              <img src={icon} alt="icon" />
                            </div>
                            <div
                              className="dropdown-content"
                              style={{ display: isActive ? "block" : "none" }}
                            >
                              <div
                                onClick={(e) => {
                                  setIsSelected(e.target.textContent);
                                  setIsActive(!isActive);
                                }}
                                className="item"
                              >
                                CA
                              </div>
                              <div
                                className="item"
                                onClick={(e) => {
                                  setIsSelected(e.target.textContent);
                                  setIsActive(!isActive);
                                }}
                              >
                                BA
                              </div>
                              <div
                                className="item"
                                onClick={(e) => {
                                  setIsSelected(e.target.textContent);
                                  setIsActive(!isActive);
                                }}
                              >
                                TA
                              </div>
                            </div>
                          </div>

                    </Col>
                  </div>
                  <div
                    className="pt-sm-3 pt-sm-3 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="1100"
                  >
                    <span>Buyers</span>
                    <div className="company_type styled-select  mt-3">
                      <select
                        className="dropdown w-100"
                      >
                        <option className="bg-black" value="volvo">B2B</option>
                        <option value="saab">A3S</option>
                        <option value="opel">OK5</option>
                        <option value="audi">U7S</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="pt-sm-3 pt-sm-3 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="1300"
                  >
                    <span>Message</span>
                    <textarea className="w-100 rounded-2 ff_rubik text-white fw-normal px-3  fs_sm opacity_07"></textarea>
                  </div>
                  <div
                    className="pt-sm-4 pt-3 mt-lg-2"
                    data-aos="fade-up"
                    data-aos-delay="1500"
                  >
                    <button className="ff_rubik fw-normal fs_sm text-white form_btn btn_h">
                      Send Now
                    </button>
                  </div>
                </form>
              </Col>
              <Col xl={4} md={8}>
                <img src={form_img} alt="houmen_search" className="form_img" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
