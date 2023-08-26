import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const TimeLine = () => {
  return (
    <div className="linear_bg py-md-5">
      <Container className="container py-5 my-xl-4">
        <h1 className="text-center ff_rubik fs_2xl fw-medium text-white pt-xxl-4"data-aos="fade-up">
          Why Choose Us?
        </h1>
        <p className="text-center ff_rubik fs_sm fw-normal opacity_07 text-white mb-0"data-aos="fade-up">
          Here are a few good reasons that make SCal Mobile your no.1 choice:
        </p>
        <div className="mx_1080 mx-auto after_line position-relative pt-5 mt-lg-4">
          <Row className="justify-content-between align-items-lg-center align-items-start position-relative after_dot ">
            <Col lg={5} sm={2} data-aos="fade-left"
              data-aos-duration="2000">
              <div className="text-lg-end">
                <h1 className="trns-text ff_rubik fs_4xl ps-lg-0 ps-md-5 ps-sm-4 ps-4 ms-md-0 ms-sm-2 ms-4 fw_900">
                  01
                </h1>
              </div>
            </Col>
            <Col lg={5} sm={10} className="position-relative"data-aos="fade-right"
              data-aos-duration="2000">
              <div className="ps-sm-0 ps-4 ms-sm-0 ms-2">
                <h1 className="ff_rubik fs_xl fw-medium text-white mb-0">
                  We Know What We Do
                </h1>
                <p className="ff_rubik fs_sm fw-normal opacity_07 text-white pt-3">
                  We’ve been there, done this. Actually, we have been doing this
                  for over a decade, pouring all our time, energy, and resources
                  into sourcing the best products for you and providing them at
                  the most competitive prices in the market. We pay meticulous
                  attention to our refurbishing process, ensuring we deliver
                  premium products that stand the test of time and comply with
                  our quality standards.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="after_dot_2 position-relative justify-content-between align-items-lg-center">
            <Col
              lg={5}
              sm={2}
              className="pt-lg-5 mt-sm-5 mt-2 d-lg-none d-block"data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="trns-text ff_rubik fs_4xl ps-lg-0 ps-md-5 ps-sm-4 ps-4 ms-md-0 ms-4 ms-sm-2 fw_900">
                  02
                </h1>
              </div>
            </Col>
            <Col lg={5} sm={10} className="pt-lg-5 mt-sm-5 position-relative"data-aos="fade-left"
              data-aos-duration="2000">
              <div className="ps-sm-0 ps-4 ms-sm-0 ms-2">
                <h1 className="ff_rubik fs_xl fw-medium text-white mb-0 text-lg-end">
                  It’s All About What Adds Value For You
                </h1>
                <p className="text-lg-end ff_rubik fs_sm fw-normal opacity_07 text-white pt-3">
                  We may not be the only tech solutions company in the industry,
                  but we are the leading one. Since the beginning of our journey
                  in the tech world, we have been striving to establish an
                  uncompromising level of quality, bringing value with all our
                  products and services. The biggest proof of our exceptional
                  performance is our strong base of happy clients that keeps
                  growing every day. Be it a retailer, a carrier, a distributor,
                  a repair shop, or a consumer, we work hard to provide you with
                  the most profitable tech alternatives regardless of your
                  business size and requirements.
                </p>
              </div>
            </Col>
            <Col lg={5} className="pt-5 mt-5 d-lg-block d-none">
              <div>
                <h1 className="trns-text ff_rubik fs_4xl ps-lg-0 ps-4 fw_900">02</h1>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-lg-center after_dot_3 position-relative">
            <Col lg={5} sm={2} className="pt-lg-5 mt-sm-5 mt-1"data-aos="fade-left"
              data-aos-duration="2000">
              <div className="text-lg-end text-start">
                <h1 className="trns-text ff_rubik fs_4xl ps-lg-0 ps-md-5 ps-sm-4 ps-4 ms-md-0 ms-sm-2 ms-4 fw_900">
                  03
                </h1>
              </div>
            </Col>
            <Col lg={5} sm={10} className="pt-lg-5 mt-sm-5 position-relative"data-aos="fade-right"
              data-aos-duration="2000">
              <div className="ps-sm-0 ps-4 ms-sm-0 ms-2">
                <h1 className="ff_rubik fs_xl fw-medium text-white mb-0">
                  However Far Away, We Will Always Serve You
                </h1>
                <p className="ff_rubik fs_sm fw-normal opacity_07 text-white pt-3">
                  Whether on a tropical island in Asia or a European metropolis,
                  we will deliver you the smartphone or service of your
                  preference with zero hassle. As an international distributor,
                  we take great pride in being able to serve every business or
                  individual from across the globe. Choose from a large panel of
                  iPhones and tech services, and our team will guarantee it gets
                  to you without stress or extra worries.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TimeLine;
