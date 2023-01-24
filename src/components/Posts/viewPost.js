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
    const [deleted, setDeleted] = useState(false)

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
    }, [id])

    function fetchDelete () {
        const fetchOptions = {
            method: 'DELETE',
            credentials: 'include'
        }
        fetch("http://localhost:3001/api/DeletePost/"+String(id), fetchOptions)
        .then(response => {
            console.log(response.status)
            if (response.status === 200){
                setDeleted(true)
            }
        })
    }

    return (
        <div className="viewPostWindow">
            {!success ? <div className="plainText">Sorry, post not found.</div> :
            (!deleted ? <div className="viewPostWindowSuccess">
                <ViewPostContent ownership={ownership} comm={comm} creator={creator} post={post} fetchDelete={fetchDelete}/>
                {/* <ViewPostComments /> */}
                
            </div> : <div className="plainText">Post deleted successfully.</div>)}
        </div>)
}

export default ViewPost