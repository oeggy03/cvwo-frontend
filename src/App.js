import './App.css';
import Navbar from './components/Navbar/navbar.js'
import { Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage/homepage';
import About from './components/About/about';
import Profile from './components/Profile/profile';
import Browse from './components/Communities/communities';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/communities" element = {<Browse />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/profile" element = {<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
