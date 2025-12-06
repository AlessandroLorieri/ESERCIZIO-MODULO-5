import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container className="mt-5 text-center">
            <h1>404</h1>
            <p>Pagina non trovata!</p>
            <Link to="/" 
            className="btn btn-primary mt-3">
                - Torna alla Home -
            </Link>
        </Container>
    )
}

export default NotFoundPage