import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ViewPostContent from "./viewPostContent"

const ViewPost = () => {
    const {link, id} = useParams()

    const [post, setPost] = useState("")
    const [comm, setComm] = useState(link)
    const [creator, setCreator] = useState("")
    const [success, setSuccess] = useState(false)
    const [ownership, setOwnership] = useState(false)

    useEffect(() => {
        setSuccess(false)
        const fetchOptions = {
            method: 'GET',
            credentials: 'include'
        }
        fetch("http://localhost:3001/api/RetrievePost/"+String(id), fetchOptions)
        .then(response => {
            console.log(response.status)
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
                setOwnership(res.owner)
            }

        )
    }, [])
    return (
        <div className="viewPostWindow">
            {success ? 
            <div className="viewPostWindowSuccess">
                <ViewPostContent ownership={ownership} comm={comm} creator={creator} post={post} />
                {/* <ViewPostComments /> */}
                
            </div> : <div>Sorry, post not found.</div>}
        </div>)
}

export default ViewPost