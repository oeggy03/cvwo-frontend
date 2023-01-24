import { useState } from "react"

const CreateComment = ({postid}) => {
    const [comment, setComment] = useState("")

    function fetchCreateComment () {
        const data = {
            content: comment,
            postid: String(postid)
        }

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (JSON.stringify(data)),
            credentials: 'include'
        }

        fetch("http://localhost:3001/api/CreateComment/", fetchOptions)
        .then(response => {
            return response.json()
        })
        .then(res => { window.location.reload(false);})
    }
    return (
    <div className="postViewIntroSec">
        <h2 className="postViewTitle">Comments</h2>
        <div className="createCommentSec">
            <textarea type="search" placeholder="Type your comment here" class="commentInputBar" onChange={input => setComment(input.target.value)}></textarea>
            <div class="f6 link dim ph3 pv2 mb2 dib white bg-navy createCommentButton" onClick={fetchCreateComment}>Post Comment</div>
        </div>
    </div>)
}

export default CreateComment