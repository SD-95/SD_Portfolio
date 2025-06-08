import React, { useState } from 'react';
import {
    Card,
    Col,
    Container,
    Row,
    Offcanvas,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import BubbleBackground from './BubbleBackground';
import { FaGithub } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

interface Project {
    title: string;
    icon: string;
    desc: string;
    problem: string;
    goal: string;
    process: string;
    conclusion: string;
    githubLink?: string;
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

const Project: React.FC = () => {
    const [showCanvas, setShowCanvas] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projectsData: Project[] = [
        {
            title: 'Crypto Liquidity Predictor',
            icon: '💹',
            desc: 'Machine learning-based system to predict crypto liquidity and ensure market stability.',
            problem:
                `Cryptocurrency markets often experience sudden liquidity fluctuations due to volatile trading volumes, irregular transaction patterns, exchange dynamics, and social media influence. These unpredictable shifts pose significant risks to traders and exchange platforms, making it challenging to manage asset stability and trading strategies effectively.`,
            goal:
                `Develop a robust machine learning model that analyzes market factors—such as trading volume, transaction trends, exchange listings, and social sentiment—to accurately predict cryptocurrency liquidity levels. The goal is to enable early detection of potential liquidity crises, empowering stakeholders with timely insights for risk mitigation and strategic decision-making.`,
            process: `Step 1: Data Collection: Gathered historical data (2016–2017) on price, volume, and market cap.
Step 2: Feature Engineering: Computed Amihud ratio, rolling stats, cap-to-volume ratio, and percentage changes.
Step 3: Model Training: Trained Linear Regression, Decision Tree, XGBoost, and LSTM models using PyTorch.
Step 4: Evaluation: Compared models using R², RMSE, MAE, and confusion matrix for classification.
Step 5: Deployment: Built a React UI and Flask backend, locally deployed the system for real-time testing.`,
            conclusion:
                'The project successfully developed a multi-class classification model to predict cryptocurrency liquidity levels using engineered market features and time-series data. The combined Random Forest and LSTM models achieved strong performance, enabling real-time liquidity crisis detection through a deployed Flask API. This solution supports informed decision-making and enhances market stability.',
            githubLink: 'https://github.com/SD-95/Crypto_Liquidity_Predictor_Reactversion'
        },
        {
            title: 'Blog Speaks webApp',
            icon: '📝',
            desc: 'A blogging platform with full CRUD support using React and Flask.',
            problem: 'Lack of a minimal, user-friendly platform for managing blog content dynamically.',
            goal: 'Create a secure, dynamic blogging app with token-based authentication and CRUD APIs.',
            process: `Step 1: UI Design: Built a responsive frontend using React and Bootstrap.
Step 2: API Backend: Developed RESTful API in Flask with SQLite integration.
Step 3: CRUD Features: Implemented Create, Read, Update, Delete functionalities.
Step 4: Page Routing: Enabled seamless page transitions for different blog actions.`,
            conclusion: 'Deployed a clean, functional blogging app with intuitive user experience and full-stack integration.',
            githubLink: 'https://sd-95.github.io/blog_speak_frontend/'
        }
    ];

    const handleShow = (project: Project) => {
        setSelectedProject(project);
        setShowCanvas(true);
    };

    const handleClose = () => {
        setShowCanvas(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="py-5 bg-dark text-white" style={{ minHeight: '100vh' }}>
            <BubbleBackground />
            <Container>
                <h2 className="text-center mb-5 fw-bold">Projects</h2>
                <Row className="g-4">
                    {projectsData.map((project, index) => (
                        <Col md={4} key={index}>
                            <Card className="h-100 contact-card bg-dark custom_border text-white p-3 d-flex justify-content-between">
                                <div>
                                    <div className="icon-circle mb-3 fs-2">{project.icon}</div>
                                    <h5>{project.title}</h5>
                                    <p>{project.desc}</p>
                                </div>
                                <div
                                    onClick={() => handleShow(project)}
                                    style={{
                                        cursor: 'pointer',
                                        fontSize: '1.5rem',
                                        textAlign: 'right',
                                        marginTop: 'auto'
                                    }}
                                    title="View Details"
                                >
                                    ➜
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Offcanvas
                    show={showCanvas}
                    onHide={handleClose}
                    placement="end"
                    backdrop={true}
                    className="offcanvas-half bg-dark text-white my-2"
                >
                    <Offcanvas.Body className='my-2'>
                        {selectedProject && (
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="text-white">{selectedProject.title}</h4>
                                    {selectedProject.githubLink && (
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white"
                                            title="View GitHub Repo"
                                            style={{ fontSize: '1.5rem' }}
                                        >
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

                                {/* Added Project Summary Card */}
                                {selectedProject.title == 'Crypto Liquidity Predictor' ? <Card bg="dark" text="white" className="border-0 custom-shadow">
                                    <Card.Header className="fw-bold">📄 Project Summary</Card.Header>
                                    <Card.Body>
                                        <ul className="mb-0" style={{ listStyleType: 'disc', paddingLeft: '1.2rem' }}>
                                            <li><strong>Objective:</strong> Predict liquidity levels (High, Medium, Low) for cryptocurrencies to identify potential liquidity crises.</li>
                                            <li><strong>Data:</strong> Daily data (2016–2017) for multiple cryptocurrencies with price, % changes, 24h volume, and market cap.</li>
                                            <li><strong>Preprocessing:</strong> Cleaned missing data and standardized date format for time-series consistency.</li>
                                            <li><strong>Feature Engineering:</strong> Lag features, 2-day moving averages, ratio-based features, and log transformations for normalization.</li>
                                            <li><strong>EDA Highlights:</strong> Corrected skewed distributions, strong volume-market cap correlation, balanced liquidity classes.</li>
                                            <li><strong>Modeling Approach:</strong> Multi-class classification with Random Forest and LSTM base models, combined via Logistic Regression stacking.</li>
                                            <li><strong>Model Training:</strong> GridSearchCV with TimeSeriesSplit for tuning; LSTM used sliding window inputs.</li>
                                            <li><strong>Evaluation:</strong> Used Precision, Recall, F1-score, and Accuracy; models showed strong performance.</li>
                                            <li><strong>Model Saving:</strong> Saved models and preprocessors via joblib and Keras (.pkl and .h5 files).</li>
                                            <li><strong>Deployment:</strong> Flask API hosted on Render; real-time web app with GitHub version control.</li>
                                        </ul>
                                    </Card.Body>
                                </Card> : ''}

                                <ExpandableCard title="✅ Conclusion" content={selectedProject.conclusion} />
                            </div>
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </section>
    );
};

export default Project;
