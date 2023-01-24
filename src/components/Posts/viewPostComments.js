import { useEffect, useState } from "react"
import CommentCards from "./commentCards"
import CreateComment from "./createComment"

const ViewPostComments = ({postid}) => {
    const [comments, setComments] = useState([])
    const [userid, setUserID] = useState(0)

    useEffect(() => {
        const fetchOptions = {
            method: 'GET',
            credentials: 'include'
        }
        fetch("http://localhost:3001/api/RetrieveComments/"+String(postid), fetchOptions)
        .then(response => {
            return response.json()
        })
        .then(res => {setComments(res.comments); setUserID(res.userid)})
    },[postid])

    return (
    <div className="postContentWrapper">
        <CreateComment postid={postid}/>
        {comments.length === 0 ? <div className="noCommentsYet">There are no comments yet. Maybe you can create the first one?</div> : <CommentCards userid={userid} comments={comments}/>}
    </div>)
}

export default ViewPostComments