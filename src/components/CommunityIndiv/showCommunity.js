
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Scroll from "../scrollFunc";
import CommHeader from "./commHeader";
import CommSearchbar from "./commSearchBar";
import PostCards from "./postCards";
import "./showCommunity.css"

const ShowCommunity = () => {
    //gets the community link
    const {link} = useParams()
    const [unchangedposts, setUnchanged] = useState([])
    const [posts, setPosts] = useState([])
    const [comm, setComm] = useState({})
    const [searchfield, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3001/api/GetCommunity/'+link)
        .then(response=> response.json())
        .then(comm => {setPosts(comm.posts); setUnchanged(comm.posts); setComm(comm.community)});

    }, [])

    const onSearchChange = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
        console.log(unchangedposts)
        if (event.target.value === "") {
            setPosts(unchangedposts)
        }
        else {
            console.log("hello")
            setPosts(unchangedposts.filter(post =>{
                return (post.title.toLowerCase().includes(searchfield.toLowerCase())
                        || post.desc.toLowerCase().includes(searchfield.toLowerCase()))
            }))
            console.log(posts)
        }
    }
        
    return(<div>
        <Scroll>
            <CommHeader comm = {comm}/>
            <CommSearchbar searchChange={onSearchChange}/>
            <PostCards posts = {posts}/>
        </Scroll>
    </div>)
}

export default ShowCommunity