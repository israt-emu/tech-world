import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../hooks/useService";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useService();
  return (
    <div className="service-container py-5">
      <Container>
        <h1 className="service-title mb-5 text-center">
          Services that we offer
        </h1>
        <Row md="3" lg="4" className="gy-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
