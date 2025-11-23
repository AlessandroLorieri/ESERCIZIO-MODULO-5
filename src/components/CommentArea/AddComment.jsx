
// PROPS:
// - asin: libro a cui associare la recensione
// - onCommentAdded: funzione chiamata DOPO una POST riuscita
//
// COSA FA:
// - mostra un form (textarea + select voto)
// - gestisce lo stato del form (comment, rate, isSubmitting, error)
// - alla submit fa una POST a /api/comments
// - se va tutto bene:
//   - resetta il form
//   - chiama onCommentAdded(savedComment)

import { useState } from "react"
import "./AddComment.css"

const AddComment = ({ asin, onCommentAdded }) => {
    const [comment, setComment] = useState("")
    const [rate, setRate] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzYTAzN2M2MDhlZjAwMTVjN2JkNDIiLCJpYXQiOjE3NjM3MjQyMDQsImV4cCI6MTc2NDkzMzgwNH0.ZgTjsU5IPiR1PfkOF0jWRR2mPGUHXN7WaukrUOQNuLA",
                    },
                    body: JSON.stringify({
                        comment: comment,
                        rate: Number(rate),
                        elementId: asin
                    }),
                }
            );
            if (!response.ok) {
                throw new Error("Errore nell'invio della recensione")
            }

            const savedComment = await response.json()

            setComment("")
            setRate(1)

            if (onCommentAdded) {
                onCommentAdded(savedComment)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form className="add-comment" onSubmit={handleSubmit}>
            <h6>Aggiungi una recensione</h6>

            <div>
                <label>Recensione</label>
                <br />
                <textarea
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    required
                />
            </div>

            <div>
                <label>Voto</label>
                <br />
                <select
                    value={rate}
                    onChange={(event) => setRate(event.target.value)}
                    required
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            {error && <p className="add-comment-error">Errore:{error}</p>}

            <button 
            className="add-comment-btn"
            type="submit" 
            disabled={isSubmitting || !comment}
            >
                {isSubmitting ? "Invio in corso...." : "Invia recensione"}
            </button>
        </form>
    )
}

export default AddComment
