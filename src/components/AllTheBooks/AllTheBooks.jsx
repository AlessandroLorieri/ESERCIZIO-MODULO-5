// - Riceve l'array di libri (es. fantasy.json)
// - Fa .map() sui libri
// - Per ogni libro renderizza <SingleBook book={libro} />




import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import booksData from "../../data/books.json"
import SingleBook from '../SingleBook/SingleBook'

const AllTheBooks = () => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [search, setSearch] = useState("")

    useEffect(() => {
        setBooks(booksData)
        setIsLoading(false)
    }, [])

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
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

            <Row className='mb-3'>
                <Col>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Cerca per titolo...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>
            </Row>

            <Row className='gx-3 gy-5'>
                {filteredBooks.map(book => (
                    <Col key={book.asin} xs={12} md={6} lg={4} xl={3}>
                        <SingleBook book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks