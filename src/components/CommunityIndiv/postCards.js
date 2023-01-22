import PostCard from "./postCard";

const PostCards = ({posts}) => {
    return (
        <div className="cardList">
          {
            posts.map((post, i) => {
              return (
                <PostCard post = {post}/>
              );
            })
          }
        </div>
      );
}

export default PostCards