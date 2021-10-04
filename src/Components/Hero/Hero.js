import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/hero-image.png";
import "./Hero.css";

const Hero = () => {
  return (
    // hero section
    <div className="hero py-5">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <h1>Learn More and Make Success the Result of Perfection</h1>
            <button className="button py-2 px-3 rounded mt-3">
              Enroll Now
            </button>
          </Col>
          <Col md="6">
            <div>
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
