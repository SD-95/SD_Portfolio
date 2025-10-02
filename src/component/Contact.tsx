import React, { useRef } from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const admintemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;

type FormData = {
    name: string;
    email: string;
    message: string;
};
const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async () => {
        if (formRef.current) {
            try {
                // Send message to YOU (admin notification)
                await emailjs.sendForm(
                    serviceId,
                    admintemplateId, // Admin template
                    formRef.current,
                    publicKey
                );

                // Send auto-reply to USER
                await emailjs.sendForm(
                    serviceId,
                    templateId, // Auto-reply template to user
                    formRef.current,
                    publicKey
                );
                toast.success("Message sent successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    theme: "light",
                });
                reset();
            } catch (error) {
                console.error('EmailJS Error:', error);
                toast.error("Failed to send message. Please try again later.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    theme: "light",
                });
            }
        }
    };

    return (
        <React.Fragment>
            <ToastContainer />
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
                    <hr className='my-3' />
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <h2 className="text-center fw-bold mb-4">Leave me a message</h2>
                            <Form ref={formRef} noValidate onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md={6} lg={6} className="mb-4">
                                        <Form.Group controlId="formName" className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                                {...register('name', { required: 'Name is required' })}
                                                isInvalid={!!errors.name}
                                                name="name"
                                                className='form_class'
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={6} className="mb-4">
                                        <Form.Group controlId="formEmail" className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: 'Invalid email address',
                                                    },
                                                })}
                                                isInvalid={!!errors.email}
                                                name="email"
                                                className='form_class'
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} lg={12} className="mb-4">
                                        <Form.Group controlId="formMessage" className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                placeholder="Enter your message"
                                                {...register('message', { required: 'Message is required' })}
                                                isInvalid={!!errors.message}
                                                name="message"
                                                className='form_class'
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.message?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="text-center submit_btn">
                                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}

export default Contact