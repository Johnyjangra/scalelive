import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import f_logo from "../assets/images/webp/footer_logo.webp"
import facebook from "../assets/images/svg/facebook_icon.svg"
import instagram from "../assets/images/svg/insta_icon.svg"
import linkdin from "../assets/images/svg/linkdin.svg"
import twitter from "../assets/images/svg/twitter.svg"
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>   <section className='py-5 footer_bg footer'>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col xl={4} lg={5} md={6}>
                        <a href='#home'><img src={f_logo} alt="footer_logo" width={110} /></a>
                        <p className='ff_rubik text-white fw-normal fs_sm lh_150 opacity_07 pt-4 mt-1'>SCal Mobile is a U.S. tech solutions company that specializes in consumer electronics.</p>
                    </Col>
                    <Col xl={4} lg={5} md={6}>
                        <Row className='justify-content-between'>
                            <Col md={4} sm={5} xs={3}>
                                <h3 className='ff_rubik text-white fw-normal fs_lg lh_150'>Links</h3>
                                <ul className='ps-0'>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#partners">Partners</a></li>
                                    <li><a href="#faqs">FAQs</a></li>
                                </ul>
                            </Col>
                            <Col md={8} sm={7} xs={8}>
                                <h3 className='ff_rubik text-white fw-normal fs_lg lh_150'>Legal</h3>
                                <p className='ff_rubik text-white fs_sm opacity_07 fw-normal lh_160'>Vendor Code of Conduct
                                    Data Sanitization Policy
                                    Downstream Recycling Policy
                                    Environmental and Social Impact
                                    QEH&S Policy
                                    Universal Waste Policy</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mt-5 pt-lg-4 flex-column flex-sm-row">
                    <p className='ff_rubik fs_sm fw-normal text-white mb-0 opacity_07'>Copyright © {year} ScalMobile</p>
                    <div className='d-flex gap-3 pt-2 pt-sm-0'>
                        <a href='https://www.facebook.com/Futurelifelinecrypto/?locale=sw_KE' target="_blank"><img src={facebook} alt="facebook" width={30} className='footer_icon' /></a>
                        <a href='https://www.instagram.com/ target="_blank"'><img src={instagram} alt="instagram" width={30} className='footer_icon' /></a>
                        <a href='https://www.linkedin.com/feed/' target="_blank"><img src={linkdin} alt="linkdin" width={30} className='footer_icon' /></a>
                        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den' target="_blank"><img src={twitter} alt="twitter" width={30} className='footer_icon' /></a>
                    </div></div></Container>
            <div className='footer_line'></div>
        </section></>
    )
}

export default Footer