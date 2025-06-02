import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../assets/employee.svg';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center gap-2">
                    <img src={logo} alt="logo" width="24" height="24" />
                        Shom's Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" end className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                            <NavLink to="/Carrier" className="nav-link">
                                Carrier
                            </NavLink>
                            <NavLink to="/project" className="nav-link">
                                Project
                            </NavLink>
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
