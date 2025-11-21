
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import './SingleBook.css'

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)

    return (
        <Card
            className={`h-100 borderBook ${selected ? "selected" : ""}`}
            onClick={() => setSelected(!selected)}
        >
            <div className='bookImgWrapper'>
                <Card.Img variant='top'
                    src={book.img}
                    alt={book.title}
                    className='bookImg'
                />
            </div>
            <Card.Body className='text-center'>
                <Card.Title className='fs-6'>
                    {book.title}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
export default SingleBook