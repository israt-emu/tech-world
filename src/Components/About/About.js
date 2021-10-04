import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../images/b3206d35876b3ae0fa7340ee9780b819.png";
import "./About.css";

const About = () => {
  return (
    <div className="about py-5">
      <Container>
        <Row>
          <Col md="6">
            <div>
              <img src={img} alt="" />
            </div>
          </Col>
          <Col md="6">
            <h5>Welcome to Tech World</h5>
            <h2>Something About us..</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iusto
              tempore placeat consequuntur. Quidem magni blanditiis aspernatur
              amet, veritatis aperiam est voluptate ex suscipit obcaecati rerum
              non quam similique quibusdam?
            </p>
            <Link to="/services">
              <button className="py-2 px-3 rounded">Exlore courses</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
