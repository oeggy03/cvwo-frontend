import ParticlesBg from 'particles-bg'  
import './homepage.css'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect, useRef, useState } from 'react';
import SignIn from '../Auth/signIn';
import SignUp from '../Auth/signUp';

const Homepage = ({updateSI, statusSI}) => {
    const el = useRef(null);

    const [showSignIn, setShowSI] = useState(false)
    const [showSignUp, setShowSU] = useState(false)

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

    function activateSignIn () {
        setShowSI(true)
    }

    function deactivateSignIn () {
        setShowSI(false)
    }

    function activateSignUp () {
        setShowSU(true)
    }

    function deactivateSignUp () {
        setShowSU(false)
    }

    return (
        <div className='homepage'>
            <ParticlesBg type="circle" bg={true} />
            <ul>
                <h1 className='homeTitle'>Welcome to <mark className = 'title'>FoRoom</mark></h1>
                <h3 className='homeIntro'>Let's talk about <span ref={el} className='homeTopics'></span></h3>
                {/* This section uses tachyons */}
                <br></br>
                {statusSI ? null : <div><button className="link dim ph3 pv2 mb2 dib white bg-navy signIn" onClick={activateSignIn}>Sign In</button>
                <button className="link dim ph3 pv2 mb2 dib white bg-navy signUp" onClick={activateSignUp}>Sign Up</button>

                <h4 className='browseComm'>... or simply <Link to='/communities'>browse</Link> our posts and communities!</h4></div>}
                
            </ul>
            {showSignIn?<SignIn toggle={deactivateSignIn} updater={updateSI}/>:null}
            {showSignUp?<SignUp toggle={deactivateSignUp}/>:null}
        </div>
    )
}

export default Homepage;

