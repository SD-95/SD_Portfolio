import { Button, Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/Somes_Dash.jpg'
import file from '../assets/Somes_Dash_Resume_DS.pdf'
import BubbleBackground from './BubbleBackground'

const Frontsection = () => {
  return (
    <div className="hero-wrapper">
      <BubbleBackground />
      <Container>
        <Row className="align-items-center hero-row py-5">
          <Col md={6} className="text-center text-md-start hero-text">
            <h1 className="hero-title mb-3">
              Hi there, I'm <span className="highlight">Somes</span>
            </h1>
            <h4 className="hero-subtitle mb-4">Freelance Data Scientist | React Developer | AI Enthusiast</h4>
            <p className="hero-desc mb-4">
              I build intelligent data-driven solutions and interactive web applications that empower users and unlock business value. Combining expertise in Data Science, Generative AI, and React development, I create seamless experiences backed by advanced machine learning models.
            </p>
            <a href={file} download>
              <Button variant="outline-light" className="resume-btn px-4 py-2 shadow-btn">
                Download Resume
              </Button>
            </a>
          </Col>
          <Col md={6} className="text-center hero-image-col">
            <img src={img1} alt="Profile" className="hero-image rounded shadow-lg" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Frontsection
