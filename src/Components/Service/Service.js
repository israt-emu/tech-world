import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";
const Service = (props) => {
  //destructuring props
  const { courseName, img, price } = props.service;
  return (
    //single service
    <div>
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text className="price fw-bold">${price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
