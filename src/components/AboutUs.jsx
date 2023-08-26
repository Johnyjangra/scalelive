import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import aboutus from "../assets/images/webp/aboutus.webp";
const AboutUs = () => {
  return (
    <>
      <section className="position-relative py-5 z-1" id="about">
        <div className="grren_circle about_green_circle position-absolute"></div>
        <div className="blue_circle about_blue_circle position-absolute"></div>
        <Container className="position-relative py-lg-5 my-xl-5">
          <Row className="align-items-center justify-content-center">
            <Col xl={7} lg={6} className="pe-xl-4">
              <h4 className="ff_rubik fs_2xl fw-medium text-white mb-0 mt-sm-4 mt-3 mt-lg-0">
                About Us
              </h4>
              <p className="ff_rubik fw-normal text-white opacity_07 pb-lg-3">
                We Started With A Single Goal:
              </p>
              <div className="about_us pe-xl-3 me-xl-1">
                <Accordion defaultActiveKey="0">
                  <div className="accordion_border"data-aos="fade-up"data-aos-delay="1000">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="d-flex gap-2 lh_150">
                          <p className="mb-0">01. </p>
                          <p className="mb-0 accordrion_header_mw_442">
                            To Become The Trusted Source For All Things
                            Smartphone In The International Re-Commerce World
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                          Our adventure started back in 2010 when we founded
                          SCal Mobile, a tech solutions company focused on
                          consumer electronics. It didn’t take us long to
                          understand that the US borders could not fit us,
                          expanding our operations across the globe. Today, we
                          are proud to serve North and South America as well as
                          Europe, Asia, and Australia.
                        </p>
                        <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-0 lh_160">
                          Following a comprehensive market approach, we seek to
                          serve clients of all sizes, including big corporations
                          and consumers. That is why our company consists of two
                          highly complementary segments; a B2B wholesale trade
                          for businesses and a B2C business for consumers that
                          seek to level up their performance with smartphones
                          and premium tech services.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="accordion_border"data-aos="fade-up"data-aos-delay="1400">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="d-flex gap-2 lh_150">
                          <p className="mb-0">02. </p>
                          <p className="mb-0 accordrion_header_mw_442">
                            Doing Things The SCal Mobile Way
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                          Our adventure started back in 2010 when we founded
                          SCal Mobile, a tech solutions company focused on
                          consumer electronics. It didn’t take us long to
                          understand that the US borders could not fit us,
                          expanding our operations across the globe. Today, we
                          are proud to serve North and South America as well as
                          Europe, Asia, and Australia.
                        </p>
                        <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-0 lh_160">
                          Following a comprehensive market approach, we seek to
                          serve clients of all sizes, including big corporations
                          and consumers. That is why our company consists of two
                          highly complementary segments; a B2B wholesale trade
                          for businesses and a B2C business for consumers that
                          seek to level up their performance with smartphones
                          and premium tech services.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="accordion_border"data-aos="fade-up"data-aos-delay="1600">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="d-flex gap-2 lh_150">
                          <p className="mb-0">03.</p>
                          <p className="mb-0 accordrion_header_mw_442">
                            We Stand By Our Core Values Of Integrity & Customer
                            Satisfaction
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                          Our adventure started back in 2010 when we founded
                          SCal Mobile, a tech solutions company focused on
                          consumer electronics. It didn’t take us long to
                          understand that the US borders could not fit us,
                          expanding our operations across the globe. Today, we
                          are proud to serve North and South America as well as
                          Europe, Asia, and Australia.
                        </p>
                        <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-0 lh_160">
                          Following a comprehensive market approach, we seek to
                          serve clients of all sizes, including big corporations
                          and consumers. That is why our company consists of two
                          highly complementary segments; a B2B wholesale trade
                          for businesses and a B2C business for consumers that
                          seek to level up their performance with smartphones
                          and premium tech services.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </Col>
            <Col xl={5} lg={6} md={9} sm={11} className="min_h_640">
              <div className="position_xl_absolute about_img_end_50">
                <img
                  src={aboutus}
                  alt="aboutus"
                  className="about_img_561 w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
