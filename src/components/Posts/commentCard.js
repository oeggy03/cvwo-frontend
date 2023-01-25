import { useState } from "react"

const CommentCard = ({userid, comment}) => {

    //FOR THE COMMENT EDIT FUNCTION
    const [editing, setEditing] = useState(false)
    const [content, setContent] = useState(comment.content)

    function fetchDeleteComment() {
        const fetchOptions = {
            method: 'DELETE',
            credentials: 'include'
        }
        fetch("http://localhost:3001/api/DeleteComment/"+String(comment.id), fetchOptions)
        .then(response => {
            return response.json()
        })
        .then( data => { window.location.reload(false);})
    }

    function fetchEditComment() {
        const data = {
            id: comment.id,
            content: content
        }

        const fetchOptions = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }

        fetch("http://localhost:3001/api/UpdateComment/", fetchOptions)
        .then(response => {
            return response.json()
        })
        .then( data => { window.location.reload(false);})
    }
    return (
    <div className="commentWrapper">
        <text className="createdByComment">Commented by: {comment.creator} on {comment.postdate.slice(0, 10)} at {comment.postdate.slice(11, 19)} </text>
        <div className="commentContent">
            {!editing ? <text className="contentOfComment">{comment.content}</text>
                    : <textarea className="editCommentField" onChange={input => setContent(input.target.value)} defaultValue={comment.content}></textarea>}
        </div>
        {userid === comment.userid ? 
        <div className="commentOptions">
            {!editing ? 
            <div>
                <text className="commentOptionEdit" onClick={() => setEditing(true)}>Edit </text>
                <text className="commentOptionDelete" onClick={fetchDeleteComment}>Delete </text>
            </div> : <text className="commentOptionEdit" onClick={fetchEditComment}>Update Comment</text>}
        </div>
        : null}
    </div>)
}

export default CommentCard