import React, { useState } from 'react'
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import img1 from '../assets/personal/14.jpg'
import FE from '../assets/certificates/FE.jpg'
import DS from '../assets/certificates/DS.png'
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const Carrier = () => {

    const [selectedStep, setSelectedStep] = useState<CareerStep | null>(null);

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    interface CareerStep {
        year: string;
        title: string;
        desc: string;
        details?: string;
        certificate?: string;
    }

    const careerData: CareerStep[] = [
        {
            year: '2010',
            title: 'The Foundation: School Years',
            desc: 'Completed schooling at Saraswati Sishu Vidya Mandir, Baliguda.',
            details: `These formative years nurtured discipline, perseverance, and a strong respect for learning within a supportive middle-class family environment.`,
            certificate: '/certificates/spruko_react.jpg'
        },
        {
            year: '2011 – 2015',
            title: 'Diploma in Mechanical Engineering – Nilachal Polytechnic, Bhubaneswar',
            desc: 'Built a solid technical foundation in mechanical engineering principles.',
            details: `Motivated by a passion for machines and design, I pursued Mechanical Engineering, mastering subjects like thermodynamics and machine design. Moving to Bhubaneswar marked a period of independence and growth, where hands-on labs and industry exposure strengthened my problem-solving skills and adaptability.`,
            certificate: '/certificates/spruko_react.jpg'
        },
        {
            year: '2015 – 2019',
            title: 'Facility Executive – Sodexo Technical Services (Client: Tata Consultancy Services, Hyderabad)',
            desc: 'Gained hands-on experience in operations and client coordination.',
            details: `Oversaw facility operations including security systems (LTS), access card management, and HVAC coordination. Maintained daily reports and directly interacted with client-side administration, building strong organizational and communication skills in a corporate environment.`,
            certificate: '/certificates/spruko_react.jpg'
        },
        {
            year: '2018 – 2021',
            title: 'Bachelor of Arts in Economics – Berhampur University',
            desc: 'Developed analytical thinking and explored new career possibilities.',
            details: `Pursued a degree in Economics with a major focus on understanding market trends and data analysis. During this period, I began exploring the IT sector, recognizing its potential for growth and long-term career development.`,
            certificate: '/certificates/spruko_react.jpg'
        },
        {
            year: '2021 – 2022',
            title: 'Frontend Development Course – BIT Technologies, Hyderabad',
            desc: 'Laid the foundation for an IT career during the pandemic.',
            details: `Amid the global COVID-19 pandemic and a challenging job market, I decided to pivot my career into the IT industry. I enrolled in a frontend development course at BIT Technologies, where I built a strong foundation in HTML, CSS, and JavaScript. I later advanced to React.js, mastering its core concepts and dynamic capabilities — setting the stage for my journey as a frontend developer.`,
            certificate: FE
        },
        {
            year: '2022 – 2024',
            title: 'React.js Developer – Spruko Technologies Pvt. Ltd., Hyderabad',
            desc: 'Kickstarted my IT career as a Frontend Developer.',
            details: `Worked on building responsive dashboards and e-commerce platforms using React.js, Redux, and React Router in a Vite environment. Integrated Firebase authentication and developed reusable UI components with React-Bootstrap, Tailwind CSS, and Material UI. Also handled debugging, documentation, and live client support.`,
            certificate: '/certificates/spruko_react.jpg'
        },
        {
            year: '2024 – 2025',
            title: 'Transition to Data Science with Generative AI at PW-skills',
            desc: 'Upskilled for a career in data and AI.',
            details: `Realizing it was the right time to grow with emerging technologies, I pursued a course in Data Science with a focus on Generative AI. This helped me strengthen my analytical skills and gain practical knowledge to step into the world of data-driven innovation. I’m now actively seeking opportunities in this domain.`,
            certificate: DS
        }
    ];

    return (
        <React.Fragment>
            <section className="bg-dark text-white position-relative" id="career">
                <div className='career-journey-section'>
                    <h2 className="text-center mb-2 fw-bold text-info">
                        From Non-IT Roots to a Data Science Career: My Journey
                    </h2>
                    <p className="text-center text-light mb-5">
                        A journey of growth and learning — evolving from Facility Executive to React Developer, and now pursuing my passion in Data Science.
                    </p>
                    <Container className="mb-5">
                        <Row className="align-items-center g-4">
                            <Col md={3} className="text-center career-photo-col"> {/* Added career-photo-col */}
                                <img
                                    src={img1} style={{ width: '150px', border: '4px solid #17a2b8' }}
                                    alt="Your Photo"
                                />
                            </Col>
                            <Col md={9}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="career-detail-content"
                                >
                                    <h3 className="fw-bold d-flex align-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="me-2 text-info"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 19h9" />
                                            <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                                        </svg> Journey Begins
                                    </h3>
                                    <p className="lead">
                                        Hello, I’m <strong>Somes Dash</strong>, raised in a humble middle-class family in Baliguda, Odisha. My father runs a small business, and my mother is a dedicated homemaker. As the eldest child, I embraced responsibility early on, supporting my younger sister, who is now happily married.
                                        My educational journey began at <strong>Saraswati Sishu Vidya Mandir</strong>, where I completed my schooling in 2010.
                                        Through various challenges and career shifts, I have grown with determination—transitioning from a Non-IT role to becoming a skilled React Developer, and now venturing boldly into the exciting field of Data Science.
                                    </p>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>

                    <Row className="gy-4">
                        {careerData.map((item, index) => (
                            <Col md={6} key={index}>
                                <Card
                                    className="h-100 p-3 custom-shadow text-white border-0"
                                    onClick={() => setSelectedStep(item)}
                                >
                                    <Card.Body>
                                        <h5 className="fw-bold">{item.year}</h5>
                                        <h6 className="text-info">{item.title}</h6>
                                        <p className="mb-0">{item.desc}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                {selectedStep && (
                    <>
                        <div
                            className="backdrop"
                            onClick={() => setSelectedStep(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                zIndex: 1040
                            }}
                        ></div>
                        <motion.div
                            className="expanded-card position-fixed top-50 start-50 translate-middle w-75"
                            style={{ zIndex: 1050 }}
                            initial={{ opacity: 0, scale: 9 }}
                            animate={{ opacity: 1, scale: 5 }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card className="p-4 custom-shadow text-white border-0" style={{ backgroundColor: '#212529', height: '400px' }}>
                                <Card.Body className="h-100">
                                    <div className="row h-100">
                                        <h4 className="fw-bold">{selectedStep.title}</h4>
                                        <div className="col-md-6 d-flex flex-column justify-content-center" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                            <h6 className="text-light">{selectedStep.year}</h6>
                                            <div className="custom-scrollbar" style={{ overflowY: 'auto' }}>
                                                <p>{selectedStep.details}</p>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-6 text-center d-flex align-items-center justify-content-center position-relative certificate-container"
                                            style={{ cursor: 'zoom-in' }}
                                        >
                                            <img
                                                src={selectedStep.certificate}
                                                alt="Certificate"
                                                className="img-fluid rounded border border-light shadow certificate-image"
                                                style={{ maxHeight: '300px', objectFit: 'contain' }}
                                            />
                                            <div
                                                className="zoom-icon d-flex align-items-center justify-content-center"
                                                onClick={handleShow}
                                            >
                                                <ZoomIn size={40} color="#fff" />
                                            </div>
                                        </div>

                                        <Modal show={showModal} onHide={handleClose} centered size="lg">
                                            <Modal.Body className="p-0">
                                                <img
                                                    src={selectedStep.certificate}
                                                    alt="Full Certificate"
                                                    className="w-100 h-auto"
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </>
                )}
            </section>
        </React.Fragment>
    )
}

export default Carrier
