import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Contact() {
  return (
    <section>
      <Container fluid className="contact-section">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                Feel free to <span className="purple">connect </span>with me
              </h1>
              <div className="contact">
                <div>
                  <PhoneIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="tel:+972556611594" className="con-det">
                    +972 556 611 594
                  </a>
                </div>
                <div>
                  <EmailIcon
                    className="con_ico"
                    color="secondary"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:yairsabag213@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="con-det"
                  >
                    yairsabag213@gmail.com
                  </a>
                </div>
                <div>
                  <PlaceIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <p className="con-det">Lod, Israel</p>
                </div>
              </div>
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/urlsab"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                
                <li className="social-icons">
                  <a
                    href="https://linkedin.com/in/uriel-sabag"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://stackoverflow.com/users/16107244/uriel-sabag?tab=profile"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaStackOverflow />
                  </a>
                </li>

              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;