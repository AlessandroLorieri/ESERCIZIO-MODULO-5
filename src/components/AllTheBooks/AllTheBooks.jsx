import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import books from "../../data/books.json"

const AllTheBooks = () => (
    <Container className='mt-4'>
        <Row className='gx-3 gy-5'>
            {books.map(book => (
                <Col key={book.asin} xs={12} md={6} lg={3}>
                    <Card className='h-100'>

                        <Card.Img variant='top' src={book.img} alt={book.title} />

                        <Card.Body>

                            <Card.Title className='fs-5 text-center'>{book.title}</Card.Title>

                            <Card.Text className='mb-0 fw-bold text-center' >{book.price} €</Card.Text>

                        </Card.Body>

                    </Card>

                </Col>
            ))}
        </Row>
    </Container>
)

export default AllTheBooks