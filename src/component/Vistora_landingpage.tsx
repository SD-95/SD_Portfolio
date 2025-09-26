import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaShoppingCart,
    FaUsers,
    FaCogs,
    FaMobileAlt,
    FaReact,
    FaGithub,
} from "react-icons/fa";
import vistoraLogo from "../assets/circle_logo.png";

import snap1 from '../assets/vistora_snap/snap_1.png'
import snap2 from '../assets/vistora_snap/snap_2.png'
import snap3 from '../assets/vistora_snap/snap_3.png'
import snap4 from '../assets/vistora_snap/snap_4.png'
import snap5 from '../assets/vistora_snap/snap_5.png'
import snap6 from '../assets/vistora_snap/snap_6.png'
import snap7 from '../assets/vistora_snap/snap_7.png'
import snap8 from '../assets/vistora_snap/snap_8.png'
import snap9 from '../assets/vistora_snap/snap_9.png'
import snap10 from '../assets/vistora_snap/snap_10.png'
import video from '../assets/mobileapplication.mp4'

const adminSnaps = [
    {
        img: snap1,
        title: "📊 Sales Analytics",
        desc: "Get real-time insights into revenue trends with detailed charts and KPIs.",
    },
    {
        img: snap2,
        title: "💰 Revenue Breakdown",
        desc: "Analyze income streams by product, category, or time period with ease.",
    },
    {
        img: snap3,
        title: "🌍 Regional Sales",
        desc: "Track performance across regions and optimize strategies for each market.",
    },
    {
        img: snap4,
        title: "⚙️ System Settings",
        desc: "Easily configure application preferences, roles, and permissions.",
    },
    {
        img: snap5,
        title: "🛟 Support Dashboard",
        desc: "Manage customer tickets, inquiries, and resolve issues faster.",
    },
    {
        img: snap6,
        title: "📦 Product Catalog",
        desc: "Add, edit, and organize product listings with inventory integration.",
    },
    {
        img: snap7,
        title: "👥 User Administration",
        desc: "Control access, manage admin accounts, and assign user roles securely.",
    },
    {
        img: snap8,
        title: "🔗 Service Integration",
        desc: "Connect with external services like payments, shipping, and CRM tools.",
    },
    {
        img: snap9,
        title: "📑 Order Management",
        desc: "Track, update, and process customer orders in a seamless workflow.",
    },
    {
        img: snap10,
        title: "🙍‍♂️ User Profiles",
        desc: "View and edit customer profiles with purchase history and preferences.",
    },
];

const AutoCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % adminSnaps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="position-relative glass-card shadow-lg p-3 w-100"
            style={{
                height: "400px", // ✅ Fixed height for smooth transition
                overflow: "hidden",
                borderRadius: "0.75rem",
            }}
        >
            {/* ✅ Banner Heading */}
            <div
                className="position-absolute top-0 start-0 w-100 text-center fw-bold text-white py-2"
                style={{
                    background: "linear-gradient(90deg, #ffb400, #ff6a00)",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                    fontSize: "1.1rem",
                    zIndex: 2,
                }}
            >
                {adminSnaps[current].title}
            </div>

            {/* ✅ Animated Slide */}
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={adminSnaps[current].img}
                        src={adminSnaps[current].img}
                        alt={adminSnaps[current].title}
                        className="w-100 h-100"
                        style={{ objectFit: "contain" }} // ✅ Prevents image from pushing header
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                    />
                </AnimatePresence>
            </div>

            {/* ✅ Description Overlay */}
            <div
                className="position-absolute bottom-0 start-0 w-100 text-center text-white py-2"
                style={{
                    background: "rgba(0,0,0,0.6)", // semi-transparent background
                    fontSize: "0.95rem",
                    zIndex: 2,
                }}
            >
                {adminSnaps[current].desc}
            </div>
        </div>
    );
};


const Vistora_landingpage: React.FC = () => {
    return (
        <div className="bg-dark text-white premium-landing">
            {/* ✅ Hero Section */}
            <section className="hero-section d-flex align-items-center text-center py-5 position-relative">
                <div className="hero-overlay"></div>
                <Container>
                    <motion.img
                        src={vistoraLogo}
                        alt="Vistora Logo"
                        className="mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: "140px" }}
                    />
                    <motion.h1
                        className="fw-bold display-3 gradient-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Vistora E-commerce
                    </motion.h1>
                    <p className="lead text-light mt-3 fs-5">
                        The future of shopping and business management —{" "}
                        <strong>React Native</strong> meets <strong>real-time admin power</strong>.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <Button
                            variant="warning"
                            size="lg"
                            className="mt-4 rounded-pill px-5 fw-bold shadow-lg"
                        >
                            🚀 Get Started
                        </Button>
                    </motion.div>
                </Container>
            </section>

            {/* ✅ Features Section */}
            <section className="features py-5 bg-dark">
                <Container>
                    <h2 className="text-center fw-bold mb-5 fs-1 text-warning glow-text">
                        ✨ Core Features
                    </h2>
                    <Row className="g-4">
                        {[
                            {
                                icon: <FaShoppingCart />,
                                title: "Seamless Shopping",
                                desc: "User-friendly mobile app with smooth cart & checkout flow.",
                            },
                            {
                                icon: <FaUsers />,
                                title: "User Management",
                                desc: "Control users, roles & permissions effortlessly.",
                            },
                            {
                                icon: <FaCogs />,
                                title: "Product Control",
                                desc: "Manage products, analytics & inventory in real-time.",
                            },
                            {
                                icon: <FaMobileAlt />,
                                title: "Cross-Platform",
                                desc: "React Native + Expo ensures top iOS & Android experience.",
                            },
                        ].map((feature, i) => (
                            <Col md={6} lg={3} key={i}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="h-100 text-center glass-card border-0 shadow-lg p-4">
                                        <div className="fs-1 text-warning mb-3">{feature.icon}</div>
                                        <Card.Title className="fw-bold text-light fs-4">
                                            {feature.title}
                                        </Card.Title>
                                        <Card.Text className="text-light-50">{feature.desc}</Card.Text>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ✅ Admin Console Section (Upgraded) */}
            <section className="admin-console premium-section py-5">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col md={6}>
                            <motion.h2
                                className="fw-bold display-5 mb-3 text-warning"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                Admin Console Dashboard
                            </motion.h2>
                            <p className="lead text-light mb-4">
                                Experience full **business control** with real-time data, analytics,
                                and automation — all in one premium dashboard.
                            </p>

                            <Row className="g-3">
                                {[
                                    { icon: "📊", text: "Real-time Sales Analytics" },
                                    { icon: "📦", text: "Inventory & Stock Tracking" },
                                    { icon: "👥", text: "User & Role Management" },
                                    { icon: "💳", text: "Order & Payment Handling" },
                                ].map((item, idx) => (
                                    <Col sm={6} key={idx}>
                                        <div className="p-3 rounded glass-card d-flex align-items-center gap-3">
                                            <span className="fs-3">{item.icon}</span>
                                            <span className="fw-bold text-light">{item.text}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        <Col md={6} className="text-center">
                            <AutoCarousel />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ✅ Mobile App Features Section */}
            <section className="mobile-app-features py-5 bg-dark text-center">
                <Container>
                    <h2 className="fw-bold display-4 text-warning mb-4">📱 Vistora Mobile App Features</h2>
                    <p className="lead text-light mb-5">
                        Shop, manage, and control your business on the go! Real-time insights and smooth mobile experience.
                    </p>

                    <Row className="justify-content-center g-4">
                        {[
                            { icon: "🛒", title: "Seamless Shopping", desc: "Browse, add to cart, and checkout quickly." },
                            { icon: "📊", title: "Real-Time Analytics", desc: "Monitor your sales and orders from anywhere." },
                            { icon: "🔔", title: "Instant Notifications", desc: "Receive alerts about orders, shipments, and stock." },
                        ].map((item, i) => (
                            <Col md={4} key={i}>
                                <Card className="glass-card text-center p-4 shadow-lg border-0 h-100">
                                    <div className="fs-1 text-warning mb-3">{item.icon}</div>
                                    <Card.Title className="fw-bold text-light">{item.title}</Card.Title>
                                    <Card.Text className="text-light-50">{item.desc}</Card.Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ✅ Full-Screen Mobile App Video Section */}
            <section className="mobile-app-video position-relative w-100" style={{ height: "100vh" }} >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        objectFit: "cover",
                        opacity: 0.2, // Less opacity
                        zIndex: 0,
                    }}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <div
                    className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-light"
                    style={{ zIndex: 1, height: "100%" }}
                >
                    <h2 className="fw-bold display-3 text-warning mb-3">Experience Vistora On Mobile</h2>
                    <p className="lead mb-4">
                        Discover how seamless shopping and admin management can be on the go.
                    </p>
                    <Button variant="warning" size="lg" className="rounded-pill px-5 fw-bold shadow-lg">
                        🚀 Download Now
                    </Button>
                </div>
            </section>

            {/* ✅ Tech Stack Section */}
            <section className="tech-stack py-5 bg-dark">
                <Container>
                    <h2 className="text-center fw-bold mb-5 fs-1">⚡ Powered By</h2>
                    <Row className="justify-content-center text-center g-4">
                        {[
                            { icon: <FaReact />, name: "React Native" },
                            { icon: <FaCogs />, name: "Redux Toolkit" },
                            { icon: <FaMobileAlt />, name: "Expo Framework" },
                            { icon: <FaGithub />, name: "GitHub CI/CD" },
                        ].map((tech, i) => (
                            <Col md={3} key={i}>
                                <motion.div whileHover={{ y: -5 }}>
                                    <Card className="glass-card text-center p-4 shadow-lg h-100 border-0">
                                        <div className="fs-1 text-warning mb-2">{tech.icon}</div>
                                        <Card.Title className="fw-bold text-light">{tech.name}</Card.Title>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ✅ Testimonials */}
            <section className="testimonials premium-section py-5">
                <Container>
                    <h2 className="text-center fw-bold mb-5 fs-1">💬 What People Say</h2>
                    <Row className="g-4">
                        {[
                            { name: "Rahul Sharma", text: "Vistora made shopping super easy — sleek, smooth & fast.", time: "2 days ago" },
                            { name: "Sneha Patel", text: "Admin dashboard is a game-changer, I control everything live.", time: "1 week ago" },
                            { name: "Arjun Mehta", text: "One of the most premium e-commerce apps I’ve ever used.", time: "3 weeks ago" },
                        ].map((t, i) => (
                            <Col md={4} key={i}>
                                <Card className="shadow-lg glass-card border-0 h-100 p-4">
                                    <Card.Text className="fs-5 text-light">“{t.text}”</Card.Text>
                                    <Card.Footer className="d-flex justify-content-between align-items-center border-0 bg-transparent">
                                        <span className="fw-bold text-warning">{t.name}</span>
                                        <span className="text-light-50 small">{t.time}</span>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ✅ CTA */}
            <section className="cta bg-warning text-dark py-5 text-center">
                <Container>
                    <h2 className="fw-bold display-5">Ready to Experience Vistora?</h2>
                    <p className="lead">E-commerce reimagined with speed, simplicity & power.</p>
                    <Button
                        variant="dark"
                        size="lg"
                        className="rounded-pill px-5 fw-bold shadow-lg"
                    >
                        🔗 Explore Now
                    </Button>
                </Container>
            </section>

        </div>
    );
};

export default Vistora_landingpage;
