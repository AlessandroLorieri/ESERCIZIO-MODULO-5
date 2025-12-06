
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import booksData from "../../data/books.json"
import SingleBook from '../SingleBook/SingleBook'
import CommentArea from '../CommentArea/CommentArea'

const AllTheBooks = ({ searchQuery }) => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAsin, SetSelectedAsin] = useState(null)

    const [search, setSearch] = useState("")

    useEffect(() => {
        setBooks(booksData)
        setIsLoading(false)
    }, [])

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) {
        return (
            <Container className="mt-4 d-flex justify-content-center">
                <div className="text-center mt-5">
                    <Spinner animation="border" role="status" />
                    <p className="mt-3 mb-0">Caricamento libri...</p>
                </div>
            </Container>
        )
    }


    return (
        <Container className='mt-4'>
            <Row>
                <Col md={8}>
                    {filteredBooks.length === 0 ? (
                        <p className='text-center mt-5 mb-0 text-danger'>
                            Nessun libro trovato {searchQuery ? `per "${searchQuery}"` : ""}.
                        </p>
                    ) : (

                        <Row className='gx-3 gy-5'>
                            {filteredBooks.map(book => (
                                <Col key={book.asin} xs={12} md={6} lg={6} xl={3}>
                                    <SingleBook book={book}
                                        isSelected={selectedAsin === book.asin}
                                        onBookClick={() => SetSelectedAsin(book.asin)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>

                <Col md={4}>
                    <CommentArea asin={selectedAsin} />
                </Col>
            </Row>
        </Container>
    )
}

export default AllTheBooks