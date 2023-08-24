import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import faqs from "../assets/images/webp/faqs.webp";
const Faqs = () => {
  return (
    <>
      <section className="position-relative py-5 z-1 faqs_shadow">
        <Container className="py-5">
          <Row className="align-items-center align-items-xl-start justify-content-center">
            <Col xl={5} lg={6} md={9} sm={11}>
              <div className="position_lg_absolute start-0 faqs_top faqs_img">
                <img src={faqs} alt="faqs" className="w-100"/>
              </div>
            </Col>
            <Col xl={6} lg={6} md={9} className="ps-lg-5 mt-4 mt-lg-0">
              <h4 className="ff_rubik fw-medium text-white mb-0">FAQs</h4>
              <div className="faqs">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Q1. What is SCal Mobile?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        SCal Mobile is a U.S. tech solutions company
                        specializing in the recommerce of electronics. We offer
                        a wide range of iPhones and services, all at competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Q2. How long has SCal Mobile been in business?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        SCal Mobile is a U.S. tech solutions company
                        specializing in the recommerce of electronics. We offer
                        a wide range of iPhones and services, all at competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Q3. Where does SCal Mobile operate?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        SCal Mobile is a U.S. tech solutions company
                        specializing in the recommerce of electronics. We offer
                        a wide range of iPhones and services, all at competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Q4. What products does SCal Mobile offer?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        SCal Mobile is a U.S. tech solutions company
                        specializing in the recommerce of electronics. We offer
                        a wide range of iPhones and services, all at competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Q5. How do I place an order with SCal Mobile?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        SCal Mobile is a U.S. tech solutions company
                        specializing in the recommerce of electronics. We offer
                        a wide range of iPhones and services, all at competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Q6. How often is inventory updated?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_rubik fs_sm opacity_07 fw-normal text-white mb-1 lh_160">
                        SCal Mobile is a U.S. tech solutions company
                        specializing in the recommerce of electronics. We offer
                        a wide range of iPhones and services, all at competitive
                        prices.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faqs;
