import './App.css';
import Navbar from './components/Navbar/navbar.js'
import { Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage/homepage';
import About from './components/About/about';
import Profile from './components/Profile/profile';
import Browse from './components/Communities/communities';
import ShowCommunity from './components/CommunityIndiv/showCommunity';
import React from 'react';

class App extends React.Component {
  render () {
    return (<div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/communities" element = {<Browse />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/communities/:link" element = {<ShowCommunity/>} />
        </Routes>
      </div>
    </div>)
  };
}

export default App;
