import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Optional: for custom styling

const About = () => {
  return (
    <div className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6}>
            <img
              src="/office.png" // Make sure this path is correct
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">About Us</h2>
            <p>
              At <strong>Innovatives Technology</strong>, we are a service-based
              IT solutions company committed to delivering top-notch technical
              support and infrastructure services tailored to your business
              needs.
            </p>
            <ul>
              <li>🔧 Server Installation & Configuration</li>
              <li>🌐 Network Setup & Optimization</li>
              <li>🛠️ Ongoing IT Support & Maintenance</li>
            </ul>
            <p>
              Whether you're a startup or an enterprise, we provide reliable,
              secure, and scalable solutions to support your growth.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
