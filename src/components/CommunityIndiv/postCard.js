import { Link } from "react-router-dom"

const PostCard = ({statusSI, post}) => {
    console.log(statusSI)
    return (
    <div className="postCard">
        <div className="postTitle">
            <text className="postCardTitle">{post.title}</text>
        </div>
        <div className="postDesc">
            <text className="postCardDesc">{post.desc}</text>
        </div>
        <div className="createdAt">
            <h5>Post was created on {post.postdate.slice(0, 10)} at {post.postdate.slice(11, 19)}</h5>
        </div>
        <div className="postButton">
            {!statusSI ? <div className="signDiscuss">Sign in to discuss!</div> :
            <Link className="f6 link dim ba bw1 ph3 pv2 mb2 dib navy" to={String(post.id)}>Discuss</Link>}
        </div>
        
    </div>)
}

export default PostCard