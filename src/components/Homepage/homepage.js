import ParticlesBg from 'particles-bg'  
import './homepage.css'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Homepage = ({updateSI}) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["coding.", "baking.", "cats.", "dogs.", "NUS.", "CVWO.", "SOC."], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 200,
            backDelay: 1200,
            loop: true
        });

        // Destroying
        return () => {
            typed.destroy();
        };
        
    }, []);

    return (
        <div className='homepage'>
            <ParticlesBg type="circle" bg={true} />
            <ul>
                <h1 className='homeTitle'>Welcome to <mark className = 'title'>FoRoom</mark></h1>
                <h3 className='homeIntro'>Let's talk about <span ref={el} className='homeTopics'></span></h3>
                {/* This section uses tachyons */}
                <br></br>
                <a className="link dim ph3 pv2 mb2 dib white bg-navy signIn" href="#0">Sign In</a>
                <a className="link dim ph3 pv2 mb2 dib white bg-navy signUp" href="#0">Sign Up</a>

                <h4 className='browseComm'>... or simply <Link to='/communities'>browse</Link> our posts and communities!</h4>
                
            </ul>
        </div>
    )
}

export default Homepage;

