
// - Mostra la card di UN libro (titolo + immagine)
// - Gestisce lo stato selected (true/false) per il bordo rosso
// - Quando selected è true, mostra <CommentArea asin={book.asin} />


import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import './SingleBook.css'
import CommentArea from '../CommentArea/CommentArea'

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
            <Card.Body>
                <Card.Title className='fs-6 text-center fw-bold'>
                    {book.title}
                </Card.Title>

                <div className='d-flex justify-content-between pt-3 px-2'>
                    <small>Categoria: {book.category}</small>
                    <small>Id: {book.asin}</small>
                </div>

                <Card.Text className='text-center pt-4 fw-bold'>
                    {book.price} €
                </Card.Text>
            </Card.Body>
            {selected && <CommentArea asin={book.asin} />}
        </Card>
    )
}
export default SingleBook