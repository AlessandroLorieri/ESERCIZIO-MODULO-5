
// PROPS:
// - comments: array di recensioni
//
// COSA FA:
// - renderizza una <ul>
// - fa .map() su comments
// - per ogni recensione renderizza <SingleComment comment={recensione} />

import SingleComment from "./SingleComment";
import "./CommentsList.css"

const CommentsList = ({ comments, onDeleteComment, onEditComment}) => {
    return (
        <ul className="comments-list">
            {comments.map((singleComment) => (
                <SingleComment
                    key={singleComment._id}
                    comment={singleComment}
                    onDelete={onDeleteComment}
                    onEdit={onEditComment}
                />
            ))}
        </ul>
    );
};

export default CommentsList;
