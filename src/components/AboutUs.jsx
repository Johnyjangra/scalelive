import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import aboutus from "../assets/images/webp/aboutus.webp";
const AboutUs = () => {
  return (
    <>
      <section className="bg-black position-relative py-5 z-1">
        <Container className="position-relative py-5">
          <Row>
            <Col>
              <h4 className="ff_rubik fw-medium text-white mb-0">About Us</h4>
              <p className="ff_rubik fw-normal text-white opacity_07 pb-3">
                We Started With A Single Goal:
              </p>
              <Accordion defaultActiveKey="0">
                <div className="accordion_border">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="d-flex gap-2 lh_150">
                        <p className="mb-0">Q1. </p>
                        <p className="mb-0">
                          To Become The Trusted Source For All Things Smartphone
                          In The International Re-Commerce World
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        Our adventure started back in 2010 when we founded SCal
                        Mobile, a tech solutions company focused on consumer
                        electronics. It didn’t take us long to understand that
                        the US borders could not fit us, expanding our
                        operations across the globe. Today, we are proud to
                        serve North and South America as well as Europe, Asia,
                        and Australia.
                      </p>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-0 lh_160">
                        Following a comprehensive market approach, we seek to
                        serve clients of all sizes, including big corporations
                        and consumers. That is why our company consists of two
                        highly complementary segments; a B2B wholesale trade for
                        businesses and a B2C business for consumers that seek to
                        level up their performance with smartphones and premium
                        tech services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordion_border">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="d-flex gap-2 lh_150">
                        <p className="mb-0">Q2. </p>
                        <p className="mb-0">Doing Things The SCal Mobile Way</p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        Our adventure started back in 2010 when we founded SCal
                        Mobile, a tech solutions company focused on consumer
                        electronics. It didn’t take us long to understand that
                        the US borders could not fit us, expanding our
                        operations across the globe. Today, we are proud to
                        serve North and South America as well as Europe, Asia,
                        and Australia.
                      </p>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-0 lh_160">
                        Following a comprehensive market approach, we seek to
                        serve clients of all sizes, including big corporations
                        and consumers. That is why our company consists of two
                        highly complementary segments; a B2B wholesale trade for
                        businesses and a B2C business for consumers that seek to
                        level up their performance with smartphones and premium
                        tech services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordion_border">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="d-flex gap-2 lh_150">
                        <p className="mb-0">Q3.</p>
                        <p className="mb-0">
                          We Stand By Our Core Values Of Integrity & Customer
                          Satisfaction
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        Our adventure started back in 2010 when we founded SCal
                        Mobile, a tech solutions company focused on consumer
                        electronics. It didn’t take us long to understand that
                        the US borders could not fit us, expanding our
                        operations across the globe. Today, we are proud to
                        serve North and South America as well as Europe, Asia,
                        and Australia.
                      </p>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-0 lh_160">
                        Following a comprehensive market approach, we seek to
                        serve clients of all sizes, including big corporations
                        and consumers. That is why our company consists of two
                        highly complementary segments; a B2B wholesale trade for
                        businesses and a B2C business for consumers that seek to
                        level up their performance with smartphones and premium
                        tech services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </Col>
            <Col>
              <div className="position-absolute end-0">
                <img src={aboutus} alt="aboutus" width={561} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
