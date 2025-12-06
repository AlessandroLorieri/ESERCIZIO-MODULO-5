

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

import './SingleBook.css'


const SingleBook = ({ book, isSelected, onBookClick }) => {
    const navigate = useNavigate()

    const handleDetailsClick = (event) => {
        event.stopPropagation()
        navigate(`/book/${book.asin}`)
    }

    return (
        <Card
            className={`h-100 borderBook ${isSelected ? "selected" : ""}`}
            onClick={onBookClick}
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

                <div className="d-flex justify-content-center mt-2">
                    <Button
                        className='px-4'
                        variant="outline-primary"
                        size="sm"
                        onClick={handleDetailsClick}
                    >
                        Dettagli
                    </Button>
                </div>

            </Card.Body>
        </Card>
    )
}
export default SingleBook