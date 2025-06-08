import { Button, Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/personal/1.jpg'
import img2 from '../assets/personal/5.jpg'
import file from '../assets/Somes_Dash_Resume_DS.pdf'
import BubbleBackground from './BubbleBackground'
import { useState } from 'react'


const initialImages: string[] = [
  img1, 
  img2,
  // img3,
  // img4,
  // img5, 
];


const Frontsection = () => {
 // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState<string>(initialImages[0]);
  // State to manage the images that are stacked around the main image
  const [stackedImages, setStackedImages] = useState<string[]>(initialImages.slice(1));

  // Function to handle clicking on a stacked image
  const handleImageClick = (clickedImageSrc: string) => {
    // Get the current main image source
    const currentMainImageSrc: string = mainImage;

    // Set the clicked image as the new main image
    setMainImage(clickedImageSrc);

    // Update the stacked images:
    // 1. Remove the clicked image from the stacked images
    // 2. Add the previous main image to the stacked images
    setStackedImages((prevStacked: string[]) => {
      const updatedStacked: string[] = prevStacked.filter((img) => img !== clickedImageSrc);
      return [...updatedStacked, currentMainImageSrc];
    });
  };

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
          {/* <Col md={6} className="text-center hero-image-col">
            <img src={img1} alt="Profile" className="hero-image rounded shadow-lg" />
          </Col> */}
          <Col md={6} className="hero-image-col">
            {/* <div className="image-stack">
              <img src={img1} alt="Profile Main" className="hero-main-image" />
              <img src={img2} alt="Profile Detail 1" className="hero-stack-image stack-image-1" />
              <img src={img3} alt="Profile Detail 2" className="hero-stack-image stack-image-2" />
              <img src={img4} alt="Profile Detail 3" className="hero-stack-image stack-image-2" />
               You can add more images here if you like, e.g., stack-image-3, stack-image-4 
            </div> */}
           <div className="image-stack-container">
              {/* Main image */}
              <img
                key={mainImage} // Add key for smooth transitions when src changes
                src={mainImage}
                alt="Profile Main"
                className="main-image"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Main+Fallback"; }} // Fallback
              />
              {/* Stacked images - dynamically rendered */}
              {stackedImages.map((imgSrc, index) => (
                <img
                  key={imgSrc} // Use imgSrc as key for unique identity in list rendering
                  src={imgSrc}
                  alt={`Profile Detail ${index + 1}`}
                  className={`stacked-image-${index}`} // Apply dynamic class for positioning
                  onClick={() => handleImageClick(imgSrc)}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src=`https://placehold.co/300x200/94A3B8/FFFFFF?text=Img${index + 1}+Fallback`; }} // Fallback
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Frontsection
