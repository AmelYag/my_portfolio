import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaReact, FaCode, FaPaintBrush, FaGithub, FaDownload } from "react-icons/fa";
import "./AboutSection.css";
import uni from "../images/uni.jpg";
import cv from "../images/cv.pdf";
const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="text-center mb-4 mb-md-0">
              <Image
                src= {uni}
                alt="Your Photo"
                roundedCircle
                className="about-image"
                fluid
              />
            </Col>
            <Col md={7}>
              <h2 className="about-title">About Me</h2>
              <p className="about-text">
                <FaReact className="about-icon" /> I'm a front-enddeveloper passionate about building beautiful and responsive UIs using React.
              </p>
              <p className="about-text">
                <FaCode className="about-icon" /> I craft clean code and modern experiences using Bootstrap, CSS, and more.
              </p>
              <p className="about-text">
                <FaPaintBrush className="about-icon" /> I care deeply about design, animations, and user experience.
              </p>

              {/* Action buttons */}
              <div className="about-buttons">
                <Button
                  variant="primary"
                  className="custom-btn me-3"
                  href={cv}
                  download
                >
                  <FaDownload className="me-2" /> Download CV
                </Button>
                <Button
                  variant="outline-light"
                  className="custom-btn"
                  href="https://github.com/AmelYag"
                  target="_blank"
                >
                  <FaGithub className="me-2" /> View GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AboutSection;
