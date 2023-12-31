import React, { Container, Row, Col, Dropdown } from "react-bootstrap";
import form_img from "../assets/images/webp/form_img.webp";
const ContactUs = () => {
  return (
    <>
      <section className="pb-5 position-relative" id="contact">
        <div className="grren_circle position-absolute contact_top_circle d-none d-xxl-block"></div>
        <div className="grren_circle position-absolute contact_bottom_circle"></div>
        <div className="mw_1440 position-relative">
          <Container className="mb-my-5 py-md-5">
            <h2 className="fs_2xl text-white ff_rubik fw-medium text-center"data-aos="fade-up">
              Contact Us
            </h2>
            <p className="text-center fs_lg fw-normal txt_skyblue font_s_italic"data-aos="fade-up">
              Join Our Family Of Partners
            </p>
            <div className="mw_899 text-center mx-auto"data-aos="fade-up">
              <p className="ff_rubik text-white opacity_07 fw-normal fs_sm lh_150 mb-1">
                Want to access unique products at unbeatable prices? Be one of the
                first to get their hands on the market’s ultimate smartphones?
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
                competitive prices. We constantly update our catalogs to help you
                unlock the best deals in the secondary smartphone industry!
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
                  <div className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"data-aos="fade-up"data-aos-delay="1000">
                    <Col sm={6}>
                      <span>First Name*</span>
                      <input type="text" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <span>Last Name*</span>
                      <input type="text" className="w-100" />
                    </Col>
                  </div>
                  <div className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"data-aos="fade-up"data-aos-delay="1200">
                    <Col sm={6}>
                      <span>Company Name*</span>
                      <input type="text" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <span>Phone Number*</span>
                      <input type="number" className="w-100" />
                    </Col>
                  </div>
                  <div className="d-flex gap-sm-3 gap-1 pe-sm-3 pt-sm-3  flex-column flex-sm-row"data-aos="fade-up"data-aos-delay="1400">
                    <Col sm={6}>
                      <span>Email*</span>
                      <input type="email" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <span>Company Type*</span>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="w-100 d-flex align-items-center justify-content-between bg-transparent compant_dropdown"
                        >
                        <p className="ff_rubik mb-0 fw-normal fs_sm">B2B</p>
                        </Dropdown.Toggle>

                       
                      </Dropdown>
                    </Col>
                  </div>
                  <div className="pt-sm-3 pt-sm-3 pt-2"data-aos="fade-up"data-aos-delay="1600">
                    <span>Buyers</span>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="w-100  d-flex align-items-center justify-content-between bg-transparent compant_dropdown"
                      >
                        <p className="ff_rubik mb-0 fw-normal fs_sm">TaTa</p>
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                  <div className="pt-sm-3 pt-sm-3 pt-2"data-aos="fade-up"data-aos-delay="1800">
                    <span>Message</span>
                    <textarea className="w-100 rounded-2 ff_rubik text-white fw-normal px-3  fs_sm opacity_07"></textarea>
                  </div>
                  <div className="pt-sm-4 pt-3 mt-lg-2"data-aos="fade-up"data-aos-delay="2000">
                    <button className="ff_rubik fw-normal fs_sm text-white form_btn btn_h">
                      Send Now
                    </button>
                  </div>
                </form>
              </Col>
              <Col xl={4} md={9}>
                <img
                  src={form_img}
                  alt="houmen_search"
                  className="form_img"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
