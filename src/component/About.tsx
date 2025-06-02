import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/off.jpg'

const About = () => {
    return (
        <div>

            <section
                id="about"
                className="py-5 about-section"
                style={{
                    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                    color: 'white',
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h2 className="mb-3 fw-bold">
                                👋 Hey there, I'm <span className="text-info">Somes</span>
                            </h2>
                            <p className="lead mb-3">
                                A passionate developer and aspiring data scientist with a unique journey from a non-IT background to becoming a hybrid tech professional. I specialize in crafting intelligent, data-driven web applications that bridge the gap between machine learning and modern frontend design.
                            </p>

                            <p>
                                My journey has been anything but conventional — after starting in facilities management, I transitioned into tech, mastering React.js for building dynamic interfaces and Python/Flask for backend logic. Today, I combine my skills in AI and software development to build tools that not only work but solve real-world problems.
                            </p>

                            <p>
                                From predictive modeling to real-time data visualization, I believe in creating digital experiences that are as insightful as they are intuitive. Whether it's predicting cryptocurrency liquidity or developing full-stack blogging platforms, I'm driven by innovation, clean code, and a user-first mindset.
                            </p>

                            <h5 className="mt-4 text-success">💼 Core Skills & Tools</h5>
                            <Row>
                                <Col sm={6}>
                                    <ul className="list-unstyled">
                                        <li>🧠 Machine Learning: Supervised & Unsupervised Learning, Time Series & forecasting</li>
                                        <li>📊 Data Analysis & Visualization: pandas, numpy, seaborn, Matplotlib, Power BI</li>
                                        <li>🖥️ Frontend: React.js, Vite, Material UI</li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul className="list-unstyled">
                                        <li>⚙️ Backend: Flask, Node.js (basic)</li>
                                        <li>🗃️ Databases: SQLite, PostgreSQL, MongoDB</li>
                                        <li>🔧 Tools: Git, VS Code, Postman, Axios</li>
                                    </ul>
                                </Col>
                            </Row>

                            <h5 className="mt-4 text-success">🚀 Current Focus</h5>
                            <ul>
                                <li>🧠 Deepening understanding of AI by learning and experimenting with advanced deep learning algorithms</li>
                                <li>📊 Exploring real-world datasets to uncover patterns using ML and DL techniques</li>
                                <li>🌐 Building new full-stack apps that integrate AI capabilities with modern frontend frameworks</li>
                            </ul>

                            <h5 className="mt-4 text-success">💡 What Sets Me Apart</h5>
                            <ul>
                                <li>⚡ A self-taught mindset backed by real project experience</li>
                                <li>✔️ A deep curiosity for AI, data, and user-centric development</li>
                                <li>🧩 Strong adaptability with a love for clean, scalable code</li>
                                <li>🌱 A learner at heart — always exploring the next technology</li>
                            </ul>
                        </Col>
                        <Col md={4} className="text-center mb-4 mb-md-0">
                            <div className="profile-blob-wrapper">
                                <div className="rotating-blob">
                                    <img src={img1} alt="Shom" className="profile-blob-image" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default About