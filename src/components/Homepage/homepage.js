import './homepage.css'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='homepage'>
            <ul>
                <h1 className='homeTitle'>Welcome to FoRoom.</h1>
                <h3 className='homeIntro'>Let's talk about cats.</h3>
                {/* This section uses tachyons */}
                <br></br>
                <a className="f6 link dim ph3 pv2 mb2 dib white bg-navy signIn" href="#0">Sign In</a>
                <a className="f6 link dim ph3 pv2 mb2 dib white bg-navy signUp" href="#0">Sign Up</a>
            </ul>
        </div>
    )
}

export default Homepage;

