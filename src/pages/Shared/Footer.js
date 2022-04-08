import React from "react";
import { Col, Row } from "react-bootstrap";
import verticalLine from "../../assets/Line 7.png";
import footerLogo from "../../assets/logo1.png";

import { FaDiscord, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row className=" align-items-center mt-4 ">
      <Col sm={9} className="d-flex gap-4 ms-4 mt-4 right-col text-white">
        <div className="logoimg">
          <img style={{ width: "45px" }} src={footerLogo} alt="" />
          <h6 style={{ fontSize: '8px' }} className="text-white">Magic Craft</h6>
        </div>
        <div className="vertical-line-container">
          <img src={verticalLine} alt="" />
        </div>
        <div className="text-box">
          <p style={{ fontSize: '12px' }}>
            <span className="footer-upper-line-text">
              <span className="footer-brand-color">MAGICCRAFT</span> is a
              registered trademark of
              <span className="footer-brand-color"> MAGICCRAFT </span> Inc. All
              Rights Reserved.
            </span>
            <br />
            All contents of this document, unless otherwise credited, are
            copyright{" "}
            <span className="footer-brand-color">2022 MAGICCRAFT</span> Inc.
          </p>
        </div>
      </Col>
      <Col className="d-flex gap-4 text-center justify-content-end" >

        <Link className="text-white " to="#"><h4><FaGithub /></h4></Link>
        <Link className="text-white " to="#"><h4><FaDiscord /></h4></Link>
        <Link className="text-white " to="#"><h4><FaTwitter /></h4></Link>
        <Link className="text-white " to="#"><h4><FaInstagram /></h4></Link>

      </Col>
    </Row>
  );
};

export default Footer;
