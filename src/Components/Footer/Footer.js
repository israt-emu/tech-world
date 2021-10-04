import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5">
      {/* footer  */}
      <Container>
        <Row lg="3">
          {/* footer first column  */}
          <Col>
            <ul>
              <li>Blog</li>
              <li>Pricing & Plan</li>
              <li>Privacy Policy</li>
              <li>Get A Support</li>
            </ul>
          </Col>
          {/* footer 2nd column  */}
          <Col>
            <ul>
              <li>
                <i className="fab fa-facebook me-2"></i>Facebook
              </li>
              <li>
                <i className="fab fa-twitter-square me-2"></i>Twitter
              </li>
              <li>
                <i className="fab fa-dribbble me-2"></i>Dribble
              </li>
              <li>
                <i className="fab fa-pinterest me-2"></i>Pinterest
              </li>
            </ul>
          </Col>
          {/* footer 3rd column  */}
          <Col>
            <p>
              Your email is safe with us and <br />
              we hate spam as much as you do.
            </p>
            <input
              type="text"
              placeholder="Your Email"
              className="input py-2 px-3 d-block w-75 rounded mb-2"
            />
            <button className="button py-2 px-3 rounded">Enroll Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
