import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import t1 from "../../assets/t1.png";
const DropsForm = () => {
  return (
    <Container className="mt-4 mb-4">
      <div className="d-flex justify-content-between mt-4 mb-4">
        <h3 className="text-white">DROPS FROM MAGICCRAFT</h3>
        <Link to="/" className="text-decoration-none text-white">
          view more <img src={arrow} alt="" />
        </Link>
      </div>

      <div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card style={{ borderRadius: "8px" }} className="border-0">
                <Link to="/marketplace"><Card.Img variant="top" src={t1} /></Link>
                <Card.Body style={{ backgroundColor: "#162557" }}>
                  <Card.Title
                    style={{ fontSize: "16px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default DropsForm;
