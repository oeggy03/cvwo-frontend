const CommentCard = ({userid, comment}) => {
    return (
    <div className="commentWrapper">
        <text className="createdByComment">Commented by: {comment.creator} on {comment.postdate.slice(0, 10)} at {comment.postdate.slice(11, 19)} </text>
        <div className="commentContent">
            <text className="contentOfComment">{comment.content}</text>
        </div>
    </div>)
}

export default CommentCard