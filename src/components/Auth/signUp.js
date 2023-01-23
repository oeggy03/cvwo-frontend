import { useState } from "react"
import "./auth.css"

const SignUp = ({toggle}) => {
    const [signUpMessage, updateMessage] = useState("");

    function fetchSignUp (username, email, password) {
        const data = {
            username:username,
            email:email,
            password:password
        }
        
        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }
        fetch('http://localhost:3001/api/CreateUser', fetchOptions)
        .then(response => {
            return response.json()})
        .then(res => updateMessage(res.message));
    }

    return (
        <>
            <div className="signupModal">
                <div className="overlaySignUp"></div>
                <div className="contentSignUp">
                    <article className="pa4 black-80">
                    <form action="sign-up_submit" method="get" accept-charset="utf-8">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="username">Username</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="username" name="username"  id="username"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
                            </div>
                            
                        </fieldset>
                        <div className="messageSU">{signUpMessage}</div>
                        <div className="mt3">
                            <div className="f6 link dim ba bw1 ph3 pv2 mb2 dib navy signupSubmit" onClick={() => fetchSignUp(document.getElementById('username').value,
                                                                                                                        document.getElementById('email-address').value,
                                                                                                                        document.getElementById('password').value)}>Sign Up</div>
                        </div>
                    </form>
                    </article>
                    <button className="closeSignUp" onClick={() =>{toggle()}}>Close</button>
                </div>
            </div>
        </>
    )
}

export default SignUp