import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./posts.css"

const CreatePost = () => {
    const {link} = useParams();

    const [comm, setComm] = useState("");
    const [success, setSuccess] = useState(false);
    const [Exist, updateExist] = useState(true)

    //for input fields
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        setSuccess(false)
        fetch('http://localhost:3001/api/GetCommDetails/'+link)
        .then(response=>{ 
            if (response.status !== 200) {
                updateExist(false)
            }
            return response.json()})
        .then(comm => {setComm(comm)});

    }, [link])

    function fetchCreate () {
        const data = 
        {
            title:title,
            desc:desc,
            content:content,
            userid:window.localStorage.getItem("userid"),
            communityid:comm.id
        }

        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }

        fetch('http://localhost:3001/api/CreatePost', fetchOptions)
        .then(response => {
            if (response.status === 200) {setSuccess(true)} 

            return response.json()})
        .then(res => {
            console.log(res)
        });
    }
    return (
    <div className="createPostScroll">
        {!Exist ? <div>Hmmm... this community doesn't seem to exist</div> :
        (success ? <div>Post created Successfully</div>:
                <div className="createWrapper">
                    <div className="createIntro">Create a post for the {comm.name} community!</div>
                    <div className="createTitleSection">
                        <div className="createTitle">Give your post a title (Maximum 100 characters!):</div>
                        <textarea maxLength={100} type='text' placeholder='A captivating title' className="titleBar" id="title"
                                    onChange={input => setTitle(input.target.value)}/>
                    </div>
                    <div className="createTitleSection">
                        <div className="createTitle">Give your post a short description (Maximum 200 characters!):</div>
                        <textarea maxLength={200} type='text' placeholder='A sweet, short, yet informative description!' className="titleBar" id="desc"
                                    onChange={input => setDesc(input.target.value)}/>
                    </div>
                    <div className="createTitleSection">
                        <div className="createTitle">Give your post some content:</div>
                        <textarea type='text' className="createBody" id="body" onChange={input => setContent(input.target.value)}/>
                    </div>
                    <div>
                        <button className="link dim ph3 pv2 mb2 dib white bg-navy createSubmitButton"
                            onClick={fetchCreate}>Create Post</button>
                    </div>
                </div>
        )}
    </div>)
}

export default CreatePost