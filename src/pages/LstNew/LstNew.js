import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import l1 from "../../assets/l1.png";
import './LstNews.css'
const LstNew = () => {
  return (
    <div className="lst-back">
      <Container className="mt-4 mb-4 mt-4 lst-new">
        <div className="d-flex justify-content-between mt-4 mb-4">
          <h3 className="text-white">LATST NEW</h3>
          <Link to="/" className="text-decoration-none text-white">
            view more <img src={arrow} alt="" />
          </Link>
        </div>

        <div>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col style={{ position: "relative" }}>
                <Card style={{ borderRadius: "8px" }} className="border-0">
                  <Link to="/marketplace"><Card.Img variant="top" src={l1} /></Link>
                </Card>
                <div className="lstDesign"
                  style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: "235px",
                    marginLeft: "10px",
                  }}
                >
                  <small
                    style={{
                      fontSize: "12px",
                      color: "#527CB2",
                      fontWeight: "bold",
                    }}
                  >
                    Date of cration : 20.02.21
                  </small>
                  <h3 style={{ fontSize: "14px" }} className="text-white">
                    We have reached reached 5,300holders
                  </h3>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <div className="footban3">
      </div>

    </div>
  );
};

export default LstNew;
