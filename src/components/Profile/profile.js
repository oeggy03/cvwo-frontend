import { useEffect, useState } from "react";
import PostCards from "../CommunityIndiv/postCards";
import "./profile.css"

const Profile = ({username, email, id, statusSI}) => {
    const [userPosts, setUserPosts] = useState([])
    
    useEffect(() => {
        if (statusSI) {
            const fetchOptions = {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                credentials: 'include'
            }

            fetch('http://localhost:3001/api/GetUserPosts/', fetchOptions)
            .then(response=>{ 
                return response.json()})
            .then(posts => {setUserPosts(posts)});
            }
    })
    return (
        <div className="profileSection">
        {statusSI? 
        <div className="profileHeader">
            <text className="profileHello">Hello, {username}!</text>
            <text className="profileGreeting">Great to see you again.</text>
            <text className="profileUsername">Your username: {username}</text>
            <text className="profileEmail">Your email: {email}</text>
            <text className="profileYourPosts">Your Posts</text>
            <PostCards posts={userPosts} statusSI = {statusSI}/>
        </div> 
        : <text className="profilePlainText">You are not signed in.</text>}
        </div>
    )
}

export default Profile;