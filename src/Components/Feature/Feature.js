import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center border-bottom w-25 mx-auto pb-2">
          Features
        </h1>
        <h5 className="mb-5 text-center">Why You Choose Us</h5>
        <Row md="2" lg="4">
          <Col>
            <Card className="p-4 h-100 text-center feature" id="feature">
              <div className="icon mb-3">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Top Instructors</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, magnam. Deserunt praesentium aliquid numquam saepe,
              </p>
              <button className="w-50 py-2 px-2 mx-auto rounded">
                Read More
              </button>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 h-100 text-center feature" id="feature">
              <div className="icon mb-3">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Portable Program</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, magnam. Deserunt praesentium aliquid numquam saepe,
              </p>
              <button className="w-50 py-2 px-2 mx-auto rounded">
                Read More
              </button>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 h-100 text-center feature" id="feature">
              <div className="icon mb-3">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Best Multi-tier Courses</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, magnam. Deserunt praesentium aliquid numquam saepe,
              </p>
              <button className="w-50 py-2 px-2 mx-auto rounded">
                Read More
              </button>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 h-100 text-center feature" id="feature">
              <div className="icon mb-3">
                <i className="fas fa-hand-peace"></i>
              </div>
              <h3>Improve Quickly</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, magnam. Deserunt praesentium aliquid numquam saepe,
              </p>
              <button className="w-50 py-2 px-2 mx-auto rounded">
                Read More
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feature;
