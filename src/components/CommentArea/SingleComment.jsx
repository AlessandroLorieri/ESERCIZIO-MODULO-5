
import { useState } from "react";
import "./SingleComment.css"

const SingleComment = ({ comment, onDelete, onEdit }) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const [error, setError] = useState(null)

    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(comment.comment)
    const [editedRate, setEditedRate] = useState(comment.rate)
    const [isSaving, setIsSaving] = useState(false)


    const handleDeleteClick = async () => {
        console.log("Voglio cancellare il commento", comment._id)

        setIsDeleting(true)
        setError(null)

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzYTAzN2M2MDhlZjAwMTVjN2JkNDIiLCJpYXQiOjE3NjM3MjQyMDQsImV4cCI6MTc2NDkzMzgwNH0.ZgTjsU5IPiR1PfkOF0jWRR2mPGUHXN7WaukrUOQNuLA",
                    }
                }

            )

            if (!response.ok) {
                throw new Error("Errore nella cancellazione della recensione")
            }

            if (onDelete) {
                onDelete(comment._id)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setIsDeleting(false)
        }
    }

    const handleStartEdit = () => {
        setIsEditing(true);
        setError(null);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(comment.comment);
        setEditedRate(comment.rate);
    };

    const handleSaveEdit = async () => {
        setIsSaving(true);
        setError(null);

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzYTAzN2M2MDhlZjAwMTVjN2JkNDIiLCJpYXQiOjE3NjM3MjQyMDQsImV4cCI6MTc2NDkzMzgwNH0.ZgTjsU5IPiR1PfkOF0jWRR2mPGUHXN7WaukrUOQNuLA",
                    },
                    body: JSON.stringify({
                        comment: editedText,
                        rate: Number(editedRate),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Errore nel salvataggio della modifica");
            }

            const updatedComment = await response.json();

            if (onEdit) {
                onEdit(updatedComment);
            }

            setIsEditing(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <li className="single-comment">
            {isEditing ? (
                <>
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <br />
                    <select
                        value={editedRate}
                        onChange={(e) => setEditedRate(e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <div className="single-comment-actions">
                        <button
                            className="icon-btn edit-btn"
                            type="button"
                            onClick={handleSaveEdit}
                            disabled={isSaving || isDeleting}
                        >
                            💾
                        </button>

                        <button
                            className="icon-btn cancel-btn"
                            type="button"
                            onClick={handleCancelEdit}
                            disabled={isSaving || isDeleting}
                        >
                            ✖️
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="single-comment-text">
                        <p className="single-comment-body">{comment.comment}</p>
                        <small className="single-comment-rate">
                            Voto: {comment.rate}
                        </small>
                    </div>

                    <div className="single-comment-actions">

                        <button
                            className="icon-btn edit-btn"
                            type="button"
                            onClick={handleStartEdit}
                            disabled={isEditing || isDeleting}
                        >
                            ✏️ Modifica
                        </button>

                        <button
                            className="icon-btn delete-btn"
                            type="button"
                            onClick={handleDeleteClick}
                            disabled={isDeleting}
                        >
                            🗑️ Elimina
                        </button>
                    </div>
                </>
            )}

            {error && <p className="error">Errore: {error}</p>}
        </li>
    );
};

export default SingleComment;
