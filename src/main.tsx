import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontsection from './component/Frontsection.tsx';
import About from './component/About.tsx';
import Project from './component/Project.tsx';
import Carrier from './component/Carrier.tsx';
import Contact from './component/Contact.tsx';
import Vistora_landingPage from './component/Vistora_landingpage.tsx';
import ReactGA from "react-ga4";

ReactGA.initialize("G-MXECF793Q7");
ReactGA.send("pageview");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/SD_Portfolio">
      <Routes>
        {/* Layout with Header + Footer + Outlet */}
        <Route path="/" element={<App />}>
          <Route index element={<Frontsection />} />
          <Route path="home" element={<Frontsection />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="carrier" element={<Carrier />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Separate route for Vistora landing page */}
        <Route path="Vistora_landingpage" element={<Vistora_landingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
