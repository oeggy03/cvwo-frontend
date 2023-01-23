import { Link } from "react-router-dom"

const PostCard = ({post}) => {

    console.log(post)
    return (
    <div className="postCard">
        <div className="postTitle">
            <h2>{post.title}</h2>
        </div>
        <div className="postDesc">
            <h3>{post.desc}</h3>
        </div>
        <div className="createdAt">
            <h5>Post was created on {post.postdate.slice(0, 10)}</h5>
        </div>
        <div className="postButton">
            {!window.localStorage.getItem("isSignedIn") ? <div className="signDiscuss">Sign in to discuss!</div> :
            <Link className="f6 link dim ba bw1 ph3 pv2 mb2 dib navy" to=''>Discuss</Link>}
        </div>
        
    </div>)
}

export default PostCard