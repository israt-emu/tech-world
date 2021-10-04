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
              Flexible easy to access learning opprtunities can bring a
              significant change in how individuals prefer to learn!
              <br /> We teach student with friendly atmosphere almost after 10
              years.In our commuinity, we recruit top experienced and skilled
              instructors to teach our students.Also, we support students as
              much as they need to develop their skill. <br />
              So,You can join with Tech World and upgrade your skill for your
              bright future.
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
