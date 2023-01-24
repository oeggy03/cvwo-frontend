import CommentCard from "./commentCard";

const CommentCards = ({userid, comments}) => {
    return(
    <div className="commentList">
        {
        comments.map((comment, i) => {
            return (
                <CommentCard userid={userid} comment={comment}/>
            );
        })
        }
    </div>)
}

export default CommentCards