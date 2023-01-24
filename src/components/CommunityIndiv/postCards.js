import PostCard from "./postCard";

const PostCards = ({posts, statusSI}) => {
    return (
        <div className="cardList">
          {
            posts.map((post, i) => {
              return (
                <PostCard statusSI = {statusSI} post = {post}/>
              );
            })
          }
        </div>
      );
}

export default PostCards