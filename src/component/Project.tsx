import React, { useState, useEffect } from 'react';
import {
    Card, Col, Container, Row, Offcanvas,
    OverlayTrigger, Tooltip, Modal, Button, Form
} from 'react-bootstrap';
import BubbleBackground from './BubbleBackground';
import { FaGem, FaGithub, FaRegCommentDots, FaStar, FaChevronDown } from 'react-icons/fa';
import vistora from '../assets/circle_logo.png';
import blog from '../assets/blog.png';
import crypto from '../assets/crypto.jpg';
import Cus_pr from '../assets/pr1.jpg';
import { MdFiberNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

import { 
    collection, addDoc, onSnapshot, query, orderBy,
    serverTimestamp, Timestamp
} from "firebase/firestore";
import { db } from '../Firebaseapi';


interface Project {
    title: string;
    icon: string;
    desc: string;
    problem: string;
    goal: string;
    process: string;
    conclusion: string;
    githubLink?: string;
    banner_text?: string;
    recent?: boolean;
    recent_message?: string;
    showOnLandingPage?: boolean;
}

interface StepperProps {
    process: string;
}

const HorizontalStepper: React.FC<StepperProps> = ({ process }) => {
    const steps = process?.split('\n').filter(Boolean) || [];
    return (
        <div className="horizontal-stepper-wrapper my-4">
            <div className="horizontal-stepper d-flex align-items-center">
                {steps.map((step, index) => {
                    const cleanStep = step.replace(/^Step\s*\d+:\s*/i, '').trim();
                    const [title, description] = cleanStep.includes(':')
                        ? cleanStep.split(/:(.+)/).map(str => str.trim())
                        : [`Step ${index + 1}`, cleanStep];

                    return (
                        <OverlayTrigger
                            key={index}
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-step-${index}`} className="custom-tooltip">
                                    <strong>{title}</strong><br />
                                    <span>{description}</span>
                                </Tooltip>
                            }
                        >
                            <div className="step-item d-flex align-items-center">
                                <div className="step-circle bg-primary text-white fw-bold">
                                    {index + 1}
                                </div>
                                {index !== steps.length - 1 && <div className="step-line mx-2" />}
                            </div>
                        </OverlayTrigger>
                    );
                })}
            </div>
        </div>
    );
};

const ExpandableCard = ({ title, content }: { title: string, content: string }) => {
    const [expanded, setExpanded] = useState(false);
    const isOverflowing = content.length > 100;
    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <Card text="white" className="border-0 custom-shadow text-white">
            <Card.Header className="fw-bold d-flex justify-content-between align-items-center">
                <span>{title}</span>
                {isOverflowing && (
                    <span
                        onClick={toggleExpanded}
                        style={{
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            display: 'inline-block',
                        }}
                        title={expanded ? 'Collapse' : 'Expand'}
                    >
                        <FaChevronDown />
                    </span>
                )}
            </Card.Header>
            <Card.Body style={{ maxHeight: expanded || !isOverflowing ? 'none' : '4.5em', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

interface Review {
    id?: string;
    projectId: string;
    userName: string;
    reviewText: string;
    rating: number;
    createdAt: Timestamp | null;
}

const Project: React.FC = () => {
    const navigate = useNavigate();
    const [showCanvas, setShowCanvas] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [userName, setUserName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const [activeProject, setActiveProject] = useState<string>("");

    // Fetch reviews for active project
    useEffect(() => {
  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Review[];
    setReviews(data);
    console.log("Fetched all reviews:", data);
  });
  return () => unsubscribe();
}, []);

    // Submit a new review
    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName.trim() || !reviewText.trim() || !rating) {
            alert("Please fill all fields");
            return;
        }

        try {
            await addDoc(collection(db, "reviews"), {
                projectId: activeProject,
                userName,
                reviewText,
                rating,
                createdAt: serverTimestamp(),
            });

            // Reset form
            setUserName("");
            setReviewText("");
            setRating(0);
            setShowReviewModal(false);
        } catch (err) {
            console.error("Error adding review:", err);
        }
    };

    const handleShow = (project: Project) => {
        if (project.showOnLandingPage) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate(`/Vistora_landingpage`);
            }, 1500);
        } else {
            setSelectedProject(project);
            setActiveProject(project.title); // Ensure reviews load for this project
            setShowCanvas(true);
        }
    };

    const handleClose = () => {
        setShowCanvas(false);
        setSelectedProject(null);
    };

    const projectsData: Project[] = [
        {
            title: 'Crypto Liquidity Predictor',
            icon: crypto,
            desc: 'Machine learning-based system to predict crypto liquidity and ensure market stability.',
            problem: `Cryptocurrency markets often experience sudden liquidity fluctuations...`,
            goal: `Develop a robust machine learning model that analyzes market factors...`,
            process: `Step 1: Data Collection...`,
            conclusion: 'The project successfully developed a multi-class classification model...',
            githubLink: 'https://sd-95.github.io/crypto_frontend/',
            showOnLandingPage: false
        },
        {
            title: 'Blog Speaks webApp',
            icon: blog,
            desc: 'A blogging platform with full CRUD support using React and Flask.',
            problem: 'Lack of a minimal, user-friendly platform...',
            goal: 'Create a secure, dynamic blogging app...',
            process: `Step 1: UI Design...`,
            conclusion: 'Deployed a clean, functional blogging app...',
            githubLink: 'https://sd-95.github.io/blog_speak_frontend/',
            showOnLandingPage: false
        },
        {
            title: 'Ecommerce App + Admin console (VISTORA)',
            icon: vistora,
            desc: 'Vistora React Native E-commerce app...',
            problem: 'Lack of a minimal platform for managing content dynamically.',
            goal: 'Create a secure, dynamic blogging app...',
            process: `Step 1: UI Design...`,
            conclusion: 'Deployed a clean, functional app...',
            githubLink: 'https://sd-95.github.io/blog_speak_frontend/',
            banner_text: 'The Project is under development....',
            recent: true,
            recent_message: 'Released..',
            showOnLandingPage: true
        }
    ];

    const formatDate = (date: Timestamp | null) => {
        if (!date) return "";
        return date.toDate().toLocaleString();
    };

    const ReviewCarousel = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: "linear",
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 576, settings: { slidesToShow: 1 } },
            ],
        };

        return (
            <div className="my-5">
                <h2 className="text-center text-warning fw-bold mb-4">Customer Review</h2>
                <Slider {...settings}>
                    {reviews.length > 0 ? reviews.map((review) => (
                        <Card key={review.id} className="premium-review-card text-white p-3 shadow-lg rounded-4">
                            <div className="d-flex align-items-center mb-3">
                                <img src={Cus_pr} alt={review.userName} className="rounded-circle premium-avatar" />
                                <div className="ms-3">
                                    <h6 className="mb-0 fw-bold text-warning">{review.userName}</h6>
                                    <div className="d-flex align-items-center text-warning small mb-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar key={i} className={i < review.rating ? "text-warning" : "text-muted"} />
                                        ))}
                                    </div>
                                    <small style={{ color: "rgba(255,255,255,0.7)" }} className="fst-italic">
                                        {formatDate(review.createdAt)}
                                    </small>
                                </div>
                            </div>
                            <hr className="premium-divider" />
                            <p className="fst-italic fs-5 lh-lg flex-grow-1 text-light">“{review.reviewText}”</p>
                            <div className="d-flex align-items-center justify-content-center mt-2 text-gold">
                                <div className="flex-grow-1 premium-line"></div>
                                <span className="mx-3 text-warning glowing-diamond"><FaGem size={18} /></span>
                                <div className="flex-grow-1 premium-line"></div>
                            </div>
                        </Card>
                    )) : (
                        <p className="text-center text-light fst-italic">No reviews yet. Be the first to review!</p>
                    )}
                </Slider>
            </div>
        );
    };

    return (
        <section id="projects" className="py-5 bg-dark text-white" style={{ minHeight: '100vh' }}>
            <BubbleBackground />
            {loading && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{ zIndex: 2000 }}>
                    <div className="spinner-border text-light" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <Container>
                {/* Projects grid */}
                <Row className="g-4">
                    {projectsData.map((project, index) => (
                        <Col md={4} key={index}>
                            <Card className="h-100 contact-card bg-dark custom_border text-white p-3 d-flex justify-content-between">
                                <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                                    {project.recent && (
                                        <div className="recent-banner">
                                            <span><MdFiberNew size={20} />{project.recent_message}</span>
                                        </div>
                                    )}
                                    <div>
                                        <div className="icon-circle mb-3 fs-2">
                                            <img src={project.icon} alt={`${project.title} icon`} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                        </div>
                                        <h5>{project.title}</h5>
                                        <p>{project.desc}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-auto">
                                    {project.banner_text && (
                                        <div className="card-banner text-warning fw-bold me-auto">
                                            {project.banner_text}
                                        </div>
                                    )}
                                    <div
                                        style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: "15px" }}
                                        title="Leave a Review"
                                        onClick={() => { setActiveProject(project.title); setShowReviewModal(true); }}
                                    >
                                        <FaRegCommentDots />
                                    </div>
                                    <div
                                        onClick={() => handleShow(project)}
                                        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                                        title="View Details"
                                        className="ms-auto"
                                    >
                                        ➜
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <ReviewCarousel />

                {/* Project details Offcanvas */}
                <Offcanvas show={showCanvas} onHide={handleClose} placement="end" backdrop={true} className="offcanvas-half bg-dark text-white my-2">
                    <Offcanvas.Body className='my-2'>
                        {selectedProject && (
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="text-white">{selectedProject.title}</h4>
                                    {selectedProject.githubLink && (
                                        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-white" title="View GitHub Repo" style={{ fontSize: '1.5rem' }}>
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                                <ExpandableCard title="🔍 Problem Statement" content={selectedProject.problem} />
                                <ExpandableCard title="🎯 Project Goal" content={selectedProject.goal} />
                                <Card text="white" className="border-0 custom-shadow text-white">
                                    <Card.Header className="fw-bold">⚙️ Project pipeline</Card.Header>
                                    <Card.Body>
                                        <HorizontalStepper process={selectedProject.process} />
                                    </Card.Body>
                                </Card>
                                <ExpandableCard title="✅ Conclusion" content={selectedProject.conclusion} />
                            </div>
                        )}
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Review Modal */}
                <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)} centered>
                    <Modal.Header closeButton className="bg-dark text-light border-secondary">
                        <Modal.Title>Leave a Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-light">
                        <Form onSubmit={handleReviewSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="bg-dark text-light border-secondary"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Review</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="Share your feedback..."
                                    className="bg-dark text-light border-secondary"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Rating</Form.Label>
                                <div>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FaStar
                                            key={i}
                                            size={22}
                                            style={{ cursor: 'pointer', marginRight: '8px' }}
                                            color={i < rating ? 'gold' : 'gray'}
                                            onClick={() => setRating(i + 1)}
                                        />
                                    ))}
                                </div>
                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit" variant="warning" className="rounded-pill px-4 fw-semibold">Submit Review</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </section>
    );
};

export default Project;
