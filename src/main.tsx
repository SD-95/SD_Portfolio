import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontsection from './component/Frontsection.tsx';
import About from './component/About.tsx';
import Project from './component/Project.tsx';
import Carrier from './component/Carrier.tsx';
import Contact from './component/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/SD_Portfolio">
      <Routes>
         <Route path="/" element={<App />}>
          <Route index path='/' element={<Frontsection />} />
          <Route path='/home' element={<Frontsection />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="Carrier" element={<Carrier />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <App /> */}
  </StrictMode>,
)
