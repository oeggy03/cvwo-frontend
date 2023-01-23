import './App.css';
import Navbar from './components/Navbar/navbar.js'
import { Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage/homepage';
import About from './components/About/about';
import Profile from './components/Profile/profile';
import Browse from './components/Communities/communities';
import ShowCommunity from './components/CommunityIndiv/showCommunity';
import React, { useState } from 'react';

const App = () => {

    const [isSignedIn, setSignedIn] = useState(false);

    function UpdateSignedIn (status) {
      setSignedIn(status)
    }
    
    return (<div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<Homepage updateSI = {UpdateSignedIn}/>} />
          <Route path = "/communities" element = {<Browse />} />
          <Route path = "/about" element = {<About updateSI = {UpdateSignedIn}/>} />
          <Route path = "/profile" element = {<Profile updateSI = {UpdateSignedIn}/>} />
          <Route path = "/communities/:link" element = {<ShowCommunity updateSI = {UpdateSignedIn}/>} />
        </Routes>
      </div>
    </div>)
  };


export default App;
