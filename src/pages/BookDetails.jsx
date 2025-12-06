import { useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

import booksData from "../data/books.json"
import CommentArea from "../components/CommentArea/CommentArea"

const BookDetails = () => {
    const { asin } = useParams()
    const navigate = useNavigate()

    const book = booksData.find((b) => b.asin === asin)

    if (!book) {
        return (
            <Container className="mt-4">
                <h2 className="h5 mb-3">Libro non trovato</h2>
                <p className="mb-3">
                    Non esiste nessun libro con ASIN: {asin}
                </p>
                <Button variant="secondary" onClick={() => navigate("/")}>
                    Torna alla Home
                </Button>
            </Container>
        )
    }

    return (
        <Container className="mt-4">
            <Row className="gy-4">
                <Col md={4}>
                    <img
                        src={book.img}
                        alt={book.title}
                        className="img-fluid rounded shadow-sm"
                    />
                </Col>

                <Col md={8} className="text-center mt-5">
                    <h1 className="h4 mb-3">{book.title}</h1>

                    <p className="mb-3">
                        <strong>Categoria:</strong> {book.category}
                    </p>

                    <p className="mb-3">
                        <strong>ASIN:</strong>{book.asin}
                    </p>

                    <p className="mb-3">
                        <strong>Prezzo:</strong>{book.price} €
                    </p>

                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => navigate(-1)}
                    >
                        ← Torna indietro
                    </Button>
                </Col>
            </Row>

            <Row className="mt-4">

                <Col md={8} className="mx-auto mt-4">
                <CommentArea asin={book.asin} />
                </Col>
            </Row>

        </Container>
    )
}

export default BookDetails
