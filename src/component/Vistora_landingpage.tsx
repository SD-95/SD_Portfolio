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
    FaAngleDoubleLeft,
    FaDownload,
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
import App_video from '../assets/App_record.mp4'
import QR_vistora from '../assets/vistora_snap/Vistora_QR.png'
import { RiQrScan2Line } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { MdDevices, MdImportantDevices } from "react-icons/md";

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

const features = [
    { icon: "🛒", title: "Seamless Shopping" },
    { icon: "📊", title: "Real-Time Analytics" },
    { icon: "🔔", title: "Instant Notifications" },
    { icon: "💬", title: "Chat Support" },
    { icon: "🌐", title: "Multi-language" },
    { icon: "⚡", title: "Fast Performance" },
    { icon: "🔒", title: "Secure Payments" },
    { icon: "📦", title: "Order Tracking" },
    { icon: "🎨", title: "Custom Themes" },
    { icon: "📱", title: "Multi-device Sync" },
    // Add as many as you want
];

const Vistora_landingpage: React.FC = () => {
    return (
        <div className="bg-dark text-white premium-landing">
            {/* ✅ Hero Section */}
            <section className="hero-section d-flex align-items-center text-center py-5 position-relative">
                <div className="hero-overlay"></div>

                {/* 🔙 Premium Back to Home */}
                <motion.a
                    href="/"
                    className="back-home-btn position-absolute top-0 start-0 m-4 px-4 py-2 fw-semibold"
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <FaAngleDoubleLeft className="btn-icon" />
                    <span className="btn-text">Back to Home</span>
                </motion.a>

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
                            href="https://vistora-admin-deeukfn45-somes-dashs-projects.vercel.app"
                            target="_blank"
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
                    <h2 className="fw-bold display-4 text-warning mb-4 text-center">
                        📱 Vistora Mobile App Features
                    </h2>
                    <p className="lead text-light mb-5 text-center">
                        Shop, manage, and control your business on the go! Real-time insights and smooth mobile experience.
                    </p>

                    <Row className="align-items-center g-4 justify-content-center">
                        {/* Left Side - Premium Samsung Mockup with Back Device */}
                        <Col lg={6} md={8} className="d-flex justify-content-center">
                            <div className="device-wrapper">
                                {/* Back Device (Samsung S22 back view) */}
                                <div className="back-device" aria-hidden="true">
                                    {/* camera-stack: 3 lenses + small flash */}
                                    <div className="camera-stack" aria-hidden="true">
                                        <div className="lens" />
                                        <div className="lens" />
                                        <div className="lens" />
                                        <div className="flash" />
                                    </div>
                                </div>

                                {/* Front Device (premium container with video) */}
                                <div className="premium-iphone shadow-hover">
                                    <div className="screen">
                                        <video
                                            src={App_video} // replace with your video import/URL
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    </div>

                                    {/* Samsung punch-hole notch */}
                                    <div className="notch" />

                                </div>
                            </div>
                        </Col>

                        {/* Right Side - Premium Features */}
                        <Col lg={6}>
                            <Row className="g-3">
                                {features.map((item, i) => (
                                    <Col xs={6} md={4} key={i}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <div
                                                className="feature-card text-center p-4"
                                                style={{
                                                    background: "rgba(255,255,255,0.05)",
                                                    backdropFilter: "blur(15px)",
                                                    borderRadius: "20px",
                                                    boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                                                    cursor: "pointer",
                                                    transition: "transform 0.3s, box-shadow 0.3s",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-10px)";
                                                    e.currentTarget.style.boxShadow =
                                                        "0 15px 40px rgba(255,215,0,0.6)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow =
                                                        "0 8px 30px rgba(0,0,0,0.5)";
                                                }}
                                            >
                                                <div
                                                    className="fs-2 mb-2"
                                                    style={{
                                                        color: "#FFD700",
                                                        textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
                                                        animation: "pulse 2s infinite",
                                                    }}
                                                >
                                                    {item.icon}
                                                </div>
                                                <h6 className="text-light fw-bold">{item.title}</h6>
                                            </div>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* ✅ Premium Mobile App Section */}
            <section
                className="mobile-app-section position-relative w-100 d-flex justify-content-center align-items-center"
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        objectFit: "cover",
                        opacity: 0.15,
                        zIndex: 0,
                        filter: "brightness(0.6) blur(1px)",
                    }}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Glass Card Container */}
                <div
                    className="glass-card-container d-flex flex-wrap justify-content-center align-items-stretch shadow-lg"
                    style={{
                        backdropFilter: "blur(15px)",
                        background: "rgba(34, 34, 34, 0.06)",
                        borderRadius: "24px",
                        padding: "2rem",
                        zIndex: 1,
                        maxWidth: "1000px",
                        width: "90%",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Left Side - Download */}
                    <div
                        className="download-left flex-fill d-flex flex-column justify-content-center align-items-center text-center p-4"
                        style={{ minWidth: "300px" }}
                    >
                        <h3 className="text-warning fw-bold mb-4">🚀 Download Vistora App</h3>
                        <Button
                            variant="outline-warning"
                            size="lg"
                            className="rounded-pill px-5 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2 mb-4 download-btn"
                            href="https://expo.dev/accounts/sd_04/projects/vistora_app/builds/171a9dea-9ac8-420c-9e0a-f6da8ea626ea"
                            target="_blank"
                        >
                            <FaDownload /> Download Now
                        </Button>

                        <ul className="text-light small text-start">
                            <li><MdImportantDevices /> Super-fast & responsive</li>
                            <li><CiMobile3 /> Smooth mobile & admin experience</li>
                            <li><MdDevices /> Works seamlessly on all devices</li>
                        </ul>
                    </div>

                    {/* Divider */}
                    <div className="divider mx-4"></div>

                    {/* Right Side - QR */}
                    <div
                        className="qr-right flex-fill d-flex flex-column justify-content-center align-items-center text-center p-4"
                        style={{ minWidth: "300px" }}
                    >
                        <div
                            className="qr-wrapper mb-3"
                            style={{
                                width: "165px",
                                height: "200px",
                                background: "#36333304",
                                borderRadius: "20px",
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                        >
                            <img
                                src={QR_vistora}
                                alt="QR Code"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "16px",
                                }}
                            />
                        </div>
                        <p className="text-light small"><RiQrScan2Line size={25} /> Scan the QR code and install the application</p>
                    </div>
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
