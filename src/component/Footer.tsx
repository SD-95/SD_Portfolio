import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white text-center py-3" style={{ backgroundColor: '#1f1f1f', color: '#ccc' }}>
                <Container className="text-center">
                    <p>&copy; 2025 Portfolio | Somes Dash . All rights reserved.</p>
                </Container>
            </footer>
        </div>
    )
}

export default Footer