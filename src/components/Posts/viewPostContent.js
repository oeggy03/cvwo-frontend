import { Link } from "react-router-dom"

const ViewPostContent = ({ownership, comm, creator, post}) => {
    return (
    <div className="postContentWrapper">
        <div className="postViewIntroSec">
            <h2 className="postViewTitle">{post.title}</h2>
            <div className="postViewCreator"> <lessbold className="postViewCreatorLight">Created by:</lessbold> {creator} <lessbold className="postViewCreatorLight">for the {comm} community</lessbold></div>
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
            <Link class="f6 link dim ph3 pv2 mb2 dib white bg-navy ownerButton" to="#0">Edit Post</Link> 
            <Link class="f6 link dim ph3 pv2 mb2 dib white bg-red ownerButton" to="#0">Delete Post</Link> 
        </div> : null}
    </div>)
}

export default ViewPostContent