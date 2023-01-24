import './App.css';
import Navbar from './components/Navbar/navbar.js'
import { Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage/homepage';
import About from './components/About/about';
import Profile from './components/Profile/profile';
import Browse from './components/Communities/communities';
import ShowCommunity from './components/CommunityIndiv/showCommunity';
import React, { useEffect, useState } from 'react';
import CreatePost from './components/Posts/createPost';
import ViewPost from './components/Posts/viewPost';

const App = () => {

    const [isSignedIn, setSignedIn] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [userid, setID] = useState("")

    useEffect(() => {
        const fetchOptions = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            credentials: 'include'
        }

        fetch('http://localhost:3001/api/GetUser', fetchOptions)
        .then(response => {
            if (response.status === 200) {setSignedIn(true)} 

            return response.json()})
        .then(res => {
            setUsername(res.username)
            setID(res.id)
            setEmail(res.email)
        });
    })

    function UpdateSignedIn (status) {
      setSignedIn(status)
    }

    useEffect(() => {
      setSignedIn(window.localStorage.getItem("isSignedIn"))
    }, [])
    
    return (<div className="App">
      <Navbar updateSI = {UpdateSignedIn} statusSI = {isSignedIn}/>
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<Homepage updateSI = {UpdateSignedIn} statusSI = {isSignedIn}/>} />
          <Route path = "/communities" element = {<Browse/>} />
          <Route path = "/about" element = {<About statusSI = {isSignedIn}/>} />
          <Route path = "/profile" element = {<Profile username={username} email={email} id={userid} updateSI = {UpdateSignedIn} statusSI = {isSignedIn}/>} />
          <Route path = "/communities/:link" element = {<ShowCommunity statusSI = {isSignedIn}/>} />
          <Route path = "/communities/:link/create" element = {<CreatePost statusSI = {isSignedIn}/>} />
          <Route path = "/communities/:link/:id" element = {<ViewPost statusSI = {isSignedIn}/>} />
        </Routes>
      </div>
    </div>)
  };


export default App;
