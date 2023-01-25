import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const UpdatePost = () => {
    const {id} = useParams()
    //for the message returned by the fetchUpdate function
    const [messageUpdate, setMessageUpdate] = useState("")
    const [updated, setUpdated] = useState(false) //checks if user has attempted to update the post by clicking the update button

    //for the initial GET request in UseEffect
    const [success, setSuccess] = useState(false)

    //Stores response from initial GET request
    const [message, setMessage] = useState("") 

    const [post, setPost] = useState({})
    const [comm, setComm] = useState({})
    const [ownership, setOwnership] = useState(false)

    //for input fields
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        //retrieve the post details
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
            console.log(response.status)
            return response.json()
        })
        .then(
            res => {
                console.log(success)
                if (success)
                {setPost(res.post)
                setComm(res.community)
                setOwnership(res.owner)
                console.log(ownership)

                //Setting the values that will be sent to the server during the update
                setTitle(res.post.title)
                setDesc(res.post.desc)
                setContent(res.post.content)}

                setMessage(res.message)
            }

        )
    }, [id, ownership, success, comm])

    //happens when the update button is clicked.
    function fetchUpdate () {
        const data = 
        {
            title:title.substring(0,100),
            desc:desc.substring(0,200),
            content:content,
            postid:id
        }

        const fetchOptions = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }

        fetch('http://localhost:3001/api/UpdatePost', fetchOptions)
        .then(response => {
            return response.json()})
        .then(res => {
            setUpdated(true)
            setMessageUpdate(res.message)
        });
    }

    //Note: update post copies over from CreatePost
    return(
    <div>
    {(updated ? <div className="plainText">{messageUpdate}</div> : //Checks if update attempt has been made
    success ? ( //Update attempt has not been made. Checks if post can be retrieved successfully
    ownership ? //Post retrieved successfully. Check if logged in user is indeed its creator
    <div className="createWrapper"> 
        <text className="createIntro">Update your post!</text>
        <text className="updatePostNote">You are currently editing your post: <text className="toBold">{post.title}</text> in the<text className="toBold"> {comm}</text> community.</text>
        <div className="createTitleSection">
            <div className="createTitle">Edit your post's title (Maximum 100 characters!):</div>
            <textarea maxLength={100} type='text' defaultValue={post.title} className="titleBar" id="title"
                        onChange={input => setTitle(input.target.value)}/>
        </div>
        <div className="createTitleSection">
            <div className="createTitle">Give your post a short description (Maximum 200 characters!):</div>
            <textarea maxLength={200} type='text' defaultValue={post.desc} className="titleBar" id="desc"
                        onChange={input => setDesc(input.target.value)}/>
        </div>
        <div className="createTitleSection">
            <div className="createTitle">Give your post some content:</div>
            <textarea type='text' defaultValue={post.content} className="createBody" id="body" onChange={input => setContent(input.target.value)}/>
        </div>
        <div>
            <button className="link dim ph3 pv2 mb2 dib white bg-navy createSubmitButton"
                onClick={fetchUpdate}>Update Post</button>
        </div>
    </div> : <div className="plainText">Sorry, you are not the creator of this post.</div>) : <div className="plainText">{message}</div>)}
    </div>)
}

export default UpdatePost