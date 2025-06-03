import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleClose = () => setShowModal(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cx67i3f",
        "template_9ovu76l",
        form.current,
        "Rl_8x4z-J779-0DJR"
      )
      .then(
        () => {
          setModalTitle("Success");
          setModalMessage("Message sent successfully!");
          setIsSuccess(true);
          setShowModal(true);
        },
        () => {
          setModalTitle("Error");
          setModalMessage("Failed to send message. Please try again later.");
          setIsSuccess(false);
          setShowModal(true);
        }
      );
  };

  return (
    <div className="contact-page">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="contact-card shadow-sm">
            <h2 className="text-center mb-4 contact-title">Contact Us</h2>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Type your message"
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Modal for feedback */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className={isSuccess ? "text-success" : "text-danger"}>
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant={isSuccess ? "success" : "danger"}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
