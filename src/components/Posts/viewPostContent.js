import { Link } from "react-router-dom"

const ViewPostContent = ({ownership, comm, creator, post, fetchDelete}) => {
    return (
    <div className="postContentWrapper">
        <div className="postViewIntroSec">
            <h2 className="postViewTitle">{post.title}</h2>
            <div className="postViewCreator"> <text className="postViewCreatorLight">Created by:</text> {creator} <text className="postViewCreatorLight">for the {comm} community</text></div>
        </div>
        <div className="postViewDescSec">
            <div className="postDescViewIntro">Post Description</div>
            <div className="postDescView">{post.desc}</div>
        </div>
        <div className="postViewContSec">
            <div className="postContViewIntro">Post Content</div>
            <div className="postContentView">{post.content}</div>
        </div>
        {ownership ? 
        <div className="postViewOptionsOwner">
            <Link class="f6 link dim ph3 pv2 mb2 dib white bg-navy ownerButton" to="update">Edit Post</Link> 
            <div class="f6 link dim ph3 pv2 mb2 dib white bg-red ownerButton" onClick={fetchDelete}>Delete Post</div> 
        </div> : null}
    </div>)
}

export default ViewPostContent