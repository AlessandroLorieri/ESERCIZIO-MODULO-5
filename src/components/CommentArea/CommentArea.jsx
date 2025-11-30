
import { useEffect, useState } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"

import "./CommentArea.css"


const CommentArea = ({ asin }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleCommentDelete = (commentId) => {
        setComments((prevComments) =>
            prevComments.filter((comment) => comment._id !== commentId)
        )
    }

    const handleCommentEdited = (updatedComment) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment._id === updatedComment._id ? updatedComment : comment
            )
        )
    }

    const HandleCommentAdded = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
    }

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
                    {
                        headers: {
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzYTAzN2M2MDhlZjAwMTVjN2JkNDIiLCJpYXQiOjE3NjM3MjQyMDQsImV4cCI6MTc2NDkzMzgwNH0.ZgTjsU5IPiR1PfkOF0jWRR2mPGUHXN7WaukrUOQNuLA",
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error("Errore nel caricamento delle recensioni")
                }

                const data = await response.json()
                setComments(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        if (asin) {
            fetchComments()
        }
    }, [asin])

    return (
        <div className="comment-area"
            onClick={(event) => event.stopPropagation()}
        >
            <h5>Recensioni per il libro</h5>
            <p>ASIN: {asin}</p>

            {isLoading && <p>Caricamento Recensioni...</p>}

            {error && <p>Errore:{error}</p>}

            {!isLoading && !error && comments.length === 0 && (
                <p>Ancora nessuna Recensione</p>
            )}

            {!isLoading && !error && comments.length > 0 && (
                <CommentsList comments={comments}
                    onDeleteComment={handleCommentDelete}
                    onEditComment={handleCommentEdited}
                />
            )}

            {!isLoading && !error && (
                <AddComment asin={asin} onCommentAdded={HandleCommentAdded} />
            )}

        </div>
    )
}

export default CommentArea
