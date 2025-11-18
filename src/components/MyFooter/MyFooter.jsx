
import Container from "react-bootstrap/Container";
import './MyFooter.css'

const MyFooter = () => (
    <footer className="bg-dark text-light mt-5">
        <Container fluid className="py-3 text-center">
            <small>
                © {new Date().getFullYear()} EpiBooks - All rights reserved.
            </small>
        </Container>
    </footer>
)

export default MyFooter