import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import men_img from "../assets/images/webp/market_1.webp"
import us_based from "../assets/images/webp/market_2.webp"
import carrier_img from "../assets/images/webp/market_3.webp"

const ScalMarket = () => {
  return (
    <>
    <section className='bg-black py-5 position-relative overflow-hidden'>
        <div className='position-absolute grren_circle market_green_circle z-0'></div>
        <div className='position-absolute blue_circle market_blue_circle z-0'></div>
        <div className='position-absolute blue_circle market_blue_bottom z-0 d-none d-xxl-block'></div>
        <Container className='position-relative z-2 py-lg-5 my-lg-5'>
            <Row className='justify-content-xl-between justify-content-center align-items-center'>
                <Col  lg={7} md={10}>
                    <img className='w-100 market_img' src={men_img} alt="men_img" />
                </Col>
                <Col lg={4} md={10} xs={11} className='pe-0 pe-sm-2'>
                <p className='ff_rubik text-white fw-normal lh_150 opacity_09 fs_lg market_para position-relative mb-0 pt-md-4 pt-sm-3 pt-3'>SCal Mobile marked its presence in <span className='txt_blue'>2010</span>. Since then, we have been working tirelessly around the idea of providing customers with premium devices and services that change the norm in the smartphone re-commerce industry, moving into a new, more efficient era.</p>
                </Col>
            </Row>
            <Row className='justify-content-xl-between justify-content-center align-items-center flex-column-reverse flex-lg-row mt-5'>
            <Col lg={4} md={10} xs={11} className='pe-0 pe-sm-2'>
                <p className='ff_rubik text-white fw-normal lh_150 opacity_09 fs_lg market_para position-relative mb-0 pt-md-4 pt-3'>What started as a small US-based business has now evolved into an international industry leader, operating in North and South America, Asia, Europe, and Australia. Despite our worldwide growth, our vision remains the same; to satisfy all your device-sourcing needs.</p>
                </Col>
                <Col lg={7} md={9}>
                    <img className='w-100 us_img' src={us_based} alt="businnes" />
                </Col>
               
            </Row>
            <Row className='justify-content-xl-between justify-content-center align-items-center pb-5 mb-lg-5 mt-5'>
                <Col lg={7} md={10}>
<img className='w-100 carrier_img' src={carrier_img} alt="carrier_img" />
               </Col>
                <Col lg={4} md={10} xs={11} className='pe-0 pe-sm-2'>
                <p className='ff_rubik text-white fw-normal lh_150 opacity_09 fs_lg market_para position-relative mb-0 pt-md-4 mt-1 pt-3 pt-2'>From retailers, carriers, distributors, and repair shops to individual consumers, we cater to diverse needs, following a client-centric approach that puts your specific requirements in the spotlight.</p>
                </Col>
            </Row>
            <div className='position-relative bottom_p_lines mx-auto mt-lg-5 mt-md-4 mt-2'>
                <div className='bg-black py-sm-4 py-3'><p className='py-2 mt-1 ff_rubik text-white fw-normal lh_150 opacity_09 fs_md position-relative mx-auto mb-0 mw_685 text-center'>Browse our wide assortment of smartphones and services, find what responds to your demands, and let us do what we know best; offer you the most pleasant, smooth, and stress-free client experience.</p></div>
            <div className='p_backdrop'></div></div>
        </Container>
    </section>
    </>
  )
}

export default ScalMarket