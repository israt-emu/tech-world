import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useService from "../../hooks/useService";
import Service from "../Service/Service";
import "./HomePageService.css";

const HomePageService = () => {
  const [services, setServices] = useService();
  const homeServices = services.slice(1, 5);
  return (
    <div className="service-container py-5">
      <Container>
        <h1 className="text-center mb-5 service-title">Our Services</h1>
        <Row md="2" lg="4">
          {homeServices.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/services">
            <button className="button py-2 px-3 rounded">
              View All Course
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePageService;
