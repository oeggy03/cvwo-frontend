import { useState } from "react";

const CreateCommunity = ({statusSI}) => {
    const [success,setSuccess] = useState(false)

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")

    function fetchCreateCommunity () {
        const data = 
        {
            name:name.substring(0,30),
            desc:desc.substring(0,100),
            image:image,
            link:name.toLowerCase()
        }

        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }

        fetch('http://localhost:3001/api/CreateCommunity', fetchOptions)
        .then(response => {
            if (response.status === 200) {
                setSuccess(true)
            }
            return response.json()})
        .then(message => console.log(message.message));
    }
    return (
        <div>
        {success ? <div className="plainText">Community created successfully!</div>
        :<div className="createWrapper">
            <div className="createIntro">Create a new community!</div>
            <div className="createTitleSection">
                <div className="createTitle">Give your community a name (Maximum 30 characters!):</div>
                <textarea maxLength={30} type='text' placeholder='An interesting name' className="titleBar" id="title"
                            onChange={input => setName(input.target.value)}/>
            </div>
            <div className="createTitleSection">
                <div className="createTitle">Give your community a short description (Maximum 100 characters!):</div>
                <textarea maxLength={100} type='text' placeholder='A sweet, short, yet informative description!' className="titleBar" id="desc"
                            onChange={input => setDesc(input.target.value)}/>
            </div>
            <div className="createTitleSection">
                <div className="createTitle">Give your community an image icon!:</div>
                <textarea type='text' placeholder='A link to your image' className="titleBar" id="body" onChange={input => setImage(input.target.value)}/>
            </div>
            <div>
                <button className="link dim ph3 pv2 mb2 dib white bg-navy createSubmitButton"
                    onClick={fetchCreateCommunity}>Create Community</button>
            </div>
        </div>}
        </div>
    )
}

export default CreateCommunity