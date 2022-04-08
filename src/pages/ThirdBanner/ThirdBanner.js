import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banimg from "../../assets/banimg.png";
import "./ThirdBanner.css";
const ThirdBanner = () => {
  return (
    <div className="bgbanner ">
      <Container className="p-4">
        <Row className="p-4">
          <Col sm={8} className="p-4">
            <div>
              <div className="d-flex row gap-2">
                <div className="bgcaps col-sm-3 ps-4 ">
                  <h5 className="text-warning">1M</h5>
                  <small className="text-white">market Cap</small>
                </div>
                <div className="bgcaps col-sm-3 ">
                  <h5 className="text-warning">1M</h5>
                  <small className="text-white">market Cap</small>
                </div>
                <div className="bgcaps col-sm-3 ps-4 ">
                  <h5 className="text-warning">1M</h5>
                  <small className="text-white">market Cap</small>
                </div>
                <div className="bgcaps col-sm-3 ps-4 ">
                  <h5 className="text-warning">1M</h5>
                  <small className="text-white">market Cap</small>
                </div>
              </div>
              <h1 className="text-white mt-4">BUY AND SELL NFT</h1>
              <p className="text-white">
                Using <span className="text-warning">$MCRT</span>{" "}
              </p>
              <small className="text-white">
                Pellentesque neque risus, auctor ac nisl in, dictum rhoncus
                libero, Cras eget rhoncus dolor, commodo pharetra leo,
                Pellentesque neque risus, apharetra leero.
              </small>
              <div className="d-flex gap-4 mt-4">
                <button className="buy-button mt-4 p-2 gap-2 markbtn">
                  <Link
                    className="text-decoration-none text-white p-2"
                    to="/marketplace"
                  >
                    MARKET PLACE
                  </Link>
                </button>
                <button className="buy-button mt-4 p-2 mintbtn">
                  <Link className="text-decoration-none text-white" to="/">
                    MINT NFT
                  </Link>
                </button>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="p-4  img-slide">
              <img className="img-fluid banImg" src={banimg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default ThirdBanner;
