
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommHeader from "./commHeader";
import CommSearchbar from "./commSearchBar";
import PostCards from "./postCards";
import "./showCommunity.css"

const ShowCommunity = ({statusSI}) => {
    console.log("status", statusSI)
    //gets the community link
    const {link} = useParams()
    const [unchangedposts, setUnchanged] = useState([])
    const [posts, setPosts] = useState([])
    const [comm, setComm] = useState({})
    const [searchfield, setSearch] = useState("")
    const [Exist, updateExist] = useState(false)

    useEffect(() => {
        updateExist(false)
        fetch('http://localhost:3001/api/GetCommunity/'+link)
        .then(response=>{ 
            if (response.status === 200) {
                updateExist(true)
            }
            return response.json()})
        .then(comm => {setPosts(comm.posts); setUnchanged(comm.posts); setComm(comm.community)});

    }, [link])

    const onSearchChange = (event) => {
        setSearch(event.target.value)
        if (event.target.value === "") {
            setPosts(unchangedposts)
        }
        else {
            setPosts(unchangedposts.filter(post =>{
                return (post.title.toLowerCase().includes(searchfield.toLowerCase())
                        || post.desc.toLowerCase().includes(searchfield.toLowerCase()))
            }))
        }
    }
        
    return(
    <div className="showCommunityMain">
        {Exist ? 
        <div className="showCommunityMainExist">
            <CommHeader comm = {comm}/>
            <CommSearchbar statusSI = {statusSI} searchChange={onSearchChange}/>
            {/* <SortPosts /> */}
            <PostCards posts = {posts} statusSI = {statusSI}/>
        </div> : <div>This community doesn't exist.</div>}
    </div>)
}

export default ShowCommunity