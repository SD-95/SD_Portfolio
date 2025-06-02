import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <React.Fragment>
            <section id="contact" className="contact-section">
                <Container>
                    <h2 className="text-center fw-bold mb-4">Let's Connect</h2>
                    <p className="text-center text-white-50 mb-5">
                        Whether you have a project idea, job opportunity, or just want to say hi — feel free to reach out. I’d love to chat!
                    </p>

                    <Row className="justify-content-center">
                        <Col md={6} lg={3} className="mb-4">
                            <div className="contact-card text-center">
                                <div className="icon-wrapper mb-3">
                                    <FaEnvelope />
                                </div>
                                <h5 className="text-white">Somes_dash</h5>
                                <Button
                                    variant="outline-light"
                                    className="mt-3"
                                    href="mailto:somes.dash1995@gmail.com"
                                >
                                    ✉️ Send Email
                                </Button>
                            </div>
                        </Col>

                        <Col md={6} lg={3} className="mb-4">
                            <div className="contact-card text-center">
                                <div className="icon-wrapper mb-3">
                                    <FaPhoneAlt />
                                </div>
                                <h5 className="text-white">+91 8895319373</h5>
                                <Button
                                    variant="outline-light"
                                    className="mt-3"
                                    href="tel:+919876543210"
                                >
                                    📞 Call Now
                                </Button>
                            </div>
                        </Col>

                        <Col md={6} lg={3} className="mb-4">
                            <div className="contact-card text-center">
                                <div className="icon-wrapper mb-3">
                                    <FaLinkedin />
                                </div>
                                <h5 className="text-white">Somes_dash</h5>
                                <Button
                                    variant="outline-light"
                                    className="mt-3"
                                    href="https://www.linkedin.com/in/somes-dash-976201155/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🔗 View LinkedIn
                                </Button>
                            </div>
                        </Col>

                        <Col md={6} lg={3} className="mb-4">
                            <div className="contact-card text-center">
                                <div className="icon-wrapper mb-3">
                                    <FaGithub />
                                </div>
                                <h5 className="text-white">SD_95</h5>
                                <Button
                                    variant="outline-light"
                                    className="mt-3"
                                    href="https://github.com/SD-95"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    💻 GitHub Profile
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </React.Fragment>
    )
}

export default Contact