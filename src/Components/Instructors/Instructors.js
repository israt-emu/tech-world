import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/Bitmap.png";
import img2 from "../../images/man-3123561_1920.jpg";
import img3 from "../../images/portrait-square-05.jpeg";
import img4 from "../../images/portrait-square-08.jpeg";
import img5 from "../../images/smiling-2362136_1920.jpg";
import img6 from "../../images/model-2911332_1920.jpg";
import "./Instructors.css";

const Instructors = () => {
  return (
    <div className="py-5 instructors">
      <Container>
        <h5
          className="text-center border-bottom pb-2 w-25 mx-auto"
          style={{ color: "#309255" }}
        >
          Team members
        </h5>
        <h3 className="text-center mb-5">Tech World Skilled Instructors</h3>
        <Row md="3" className="gy-4">
          <Col>
            <Card className="d-flex flex-row h-100 shadow-sm">
              <img src={img1} className="img-fluid" alt="" />
              <div className="ms-3 mt-3">
                <h4>Mitchell Colon</h4>
                <h5 className="qualification">BBA, Instructor</h5>
                <button className="py-1 px-2 rounded mt-3 border-0 text-white">
                  Know Details
                </button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="d-flex flex-row h-100 shadow-sm">
              <img src={img2} className="w-50" alt="" />
              <div className="ms-3 mt-3">
                <h4>Michel Randon</h4>
                <h5 className="qualification">MBA, Instructor</h5>
                <button className="py-1 px-2 rounded mt-3 border-0 text-white">
                  Know Details
                </button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="d-flex flex-row h-100">
              <img src={img3} className="w-50" alt="" />
              <div className="ms-3 mt-3">
                <h4>Rodney Terry</h4>
                <h5 className="qualification">MSC, Instructor</h5>
                <button className="py-1 px-2 rounded mt-3 border-0 text-white">
                  Know Details
                </button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="d-flex flex-row h-100 shadow-sm">
              <img src={img4} className="w-50" alt="" />
              <div className="ms-3 mt-3">
                <h4>Sonya Gordan</h4>
                <h5 className="qualification">BBA, Instructor</h5>
                <button className="py-1 px-2 rounded mt-3 border-0 text-white">
                  Know Details
                </button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="d-flex flex-row h-100 shadow-sm">
              <img src={img5} className="w-50" alt="" />
              <div className="ms-3 mt-3">
                <h4>Margarita James</h4>
                <h5 className="qualification">BSC, Instructor</h5>
                <button className="py-1 px-2 rounded mt-3 border-0 text-white">
                  Know Details
                </button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="d-flex flex-row h-100 shadow-sm">
              <img src={img6} className="w-50" alt="" />
              <div className="ms-3 mt-3">
                <h4>Rochelle Thomas</h4>
                <h5 className="qualification">BSC, Instructor</h5>
                <button className="py-1 px-2 rounded mt-3 border-0 text-white">
                  Know Details
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Instructors;
