import { Container } from 'react-bootstrap';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';

function App() {

  return (
    <div className='d-flex flex-column min-vh-100' style={{ backgroundColor: '#0f0f0f', color: '#fff' }}>
      <Container fluid className="p-0">
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
}

export default App;