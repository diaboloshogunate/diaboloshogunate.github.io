import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faItchIo, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

function Contact() {
    return <section className="contact">
        <Container>
            <Row>
                <Col>
                    <h2>Contact me</h2>
                    <p>Let me know how I can help you on your next project.</p>
                    <a href="mailto:diaboloshogunate@gmail.com"><FontAwesomeIcon icon={faEnvelope}/>
                        <span>diaboloshogunate@gmail.com</span></a>
                    <a href="tel:3607730963"><FontAwesomeIcon icon={faMobileAlt}/> <span>360.773.0963</span></a>
                    <nav className="nav">
                        <a className="nav-link" href="https://github.com/diaboloshogunate"
                           target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        <a className="nav-link" href="https://diaboloshogun.itch.io/"
                           target="_blank"><FontAwesomeIcon icon={faItchIo}/></a>
                        <a className="nav-link" href="https://www.instagram.com/diaboloshogunate/"
                           target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a className="nav-link" href="https://www.linkedin.com/in/rparker521/"
                           target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    </nav>
                </Col>
                <Col>
                    <ContactForm/>
                </Col>
            </Row>
        </Container>
    </section>;
}

export default Contact;