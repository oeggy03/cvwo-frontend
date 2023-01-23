import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ViewPost = () => {
    const {link, id} = useParams()

    const [post, setPost] = useState("")
    const [comm, setComm] = useState(link)
    const [creator, setCreator] = useState("")
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        setSuccess(false)
        fetch("http://localhost:3001/api/RetrievePost/"+String(id))
        .then(response => {
            if (response.status === 200){
                setSuccess(true)
            }
            return response.json()
        })
        .then(
            res => {
                setPost(res.post)
                setComm(res.community)
                setCreator(res.user)
            }
        )
    }, [])
    return (
        <div>
            <h2>Post Title: {post.title}</h2>
            <h4>Created by {creator}</h4>
            <h5>Description: {post.desc}</h5>
            <div>{post.content}</div>
        </div>)
}

export default ViewPost