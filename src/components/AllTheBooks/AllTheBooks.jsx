import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from 'react'

import books from "../../data/books.json"
import SingleBook from '../SingleBook/SingleBook'

const AllTheBooks = () => {
    const [search, setSearch] = useState("")

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <Container className='mt-4'>

            <div className='mb-3'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Cerca per titolo...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Row className='gx-3 gy-5'>
                {filteredBooks.map(book => (
                    <Col key={book.asin} xs={12} md={6} lg={3}>
                        <SingleBook book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks