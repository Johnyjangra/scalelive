import React, { Container, Row, Col} from "react-bootstrap";
import { useState } from "react";
import form_img from "../assets/images/webp/form_img.webp";
import icon from "../assets/images/svg/dropdown_icon.svg"
const ContactUs = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("CA");
  const [isActive2, setIsActive2] = useState(false);
  const [selected2, setIsSelected2] = useState("B2B");
  return (
    <>
      <section className="pb-5 position-relative" id="contact">
        <div className="grren_circle position-absolute contact_top_circle d-none d-xxl-block"></div>
        <div className="grren_circle position-absolute contact_bottom_circle"></div>
        <div className="mw_1440 position-relative">
          <Container className="mb-my-5 py-md-5">
            <h2
              className="fs_2xl text-white ff_rubik fw-medium text-center"
              
            >Contact Us
            </h2>
            <p
              className="text-center fs_lg fw-normal ff_rubik txt_skyblue font_s_italic"
              
            >Join Our Family Of Partners
            </p>
            <div className="mw_899 text-center mx-auto" >
              <p className="ff_rubik text-white opacity__150 mb-1">
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
              <Col xl={7} data-aos="fade-right" data-aos-duration="2200">
                <form
                  action="required"
                  className="contact_form pt-lg-5 pt-xl-0 pt-4"
                >
                  <div
                    className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"
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
                    className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row">
                    <Col sm={6}>
                      <span>Email*</span>
                      <input type="email" className="w-100" />
                    </Col>
                    <Col sm={6} className="dropdown_input">
                      <span>Company Type*</span>

                      <div className="dropdown2">
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
                              className="dropdown-content2 bg-black"
                              style={{ display: isActive ? "block" : "none" }}
                            >
                              <div
                                className="item2  opacity_100 p-1 "
                                onClick={(e) => {
                                  setIsSelected(e.target.textContent);
                                  setIsActive(!isActive);
                                }}
                              >
                                BA
                              </div>
                              <div
                                className="item2 opacity_100 p-1"
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
                    className="pt-sm-3 pt-sm-3 pt-2">
                    <span>Buyers</span>
                    <div className="dropdown">
                            <div
                              onClick={(e) => {
                                setIsActive2(!isActive2);
                              }}
                              className="dropdown-btn d-flex justify-content-between"
                            >
                              {selected2}
                              
                              <img src={icon} alt="icon" />
                            </div>
                            <div
                              className="dropdown-content"
                              style={{ display: isActive2 ? "block" : "none" }}
                            >
                             
                              <div
                                className="item"
                                onClick={(e) => {
                                  setIsSelected2(e.target.textContent);
                                  setIsActive2(!isActive2);
                                }}
                              >
                                DA
                              </div>
                              <div
                                className="item"
                                onClick={(e) => {
                                  setIsSelected2(e.target.textContent);
                                  setIsActive2(!isActive2);
                                }}
                              >
                                NA
                              </div>
                            </div>
                          </div>
                  </div>
                  <div
                    className="pt-sm-3 pt-sm-3 pt-2" >
                    <span>Message</span>
                    <textarea className="w-100 rounded-2 ff_rubik text-white fw-normal px-3  fs_sm opacity_07"></textarea>
                  </div>
                  <div
                    className="pt-sm-4 pt-3 mt-lg-2">
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
