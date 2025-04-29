import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Uriel Yair Sabag</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{year} UYS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/urlsab"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/uriel-sabag"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/16107244/uriel-sabag?tab=profile"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStackOverflow />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;