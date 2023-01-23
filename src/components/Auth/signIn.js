import { useState } from "react"
import "./auth.css"

const SignIn = ({toggle, updater}) => {
    const [signInMessage, updateMessage] = useState("")

    function fetchSignIn (username, password) {
        const data = {
            username:username,
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
        fetch('http://localhost:3001/api/SignIn', fetchOptions)
        .then(response => {
            if (response.status === 200) {updater(true)} 

            return response.json()})
        .then(res => {
            updateMessage(res.message); 
            console.log(res.user);
            window.localStorage.setItem("userid", res.user.id)
            window.localStorage.setItem("username", res.user.username)
            window.localStorage.setItem("email", res.user.email)
        });
        
    }
    return (
        <>
            <div className="signinModal">
                <div className="overlaySignIn"></div>
                <div className="contentSignIn">
                    <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="username">Username</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" type="username" name="username"  id="username"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password"/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
                        </fieldset>
                        <div className="messageSI">{signInMessage}</div>
                        <div className="">
                            <div className="f6 link dim ba bw1 ph3 pv2 mb2 dib navy signupSubmit" onClick={() => fetchSignIn(document.getElementById('username').value,
                                                                                                                        document.getElementById('password').value)}>Sign In</div>
                        </div>
                        <div className="lh-copy mt3">
                            {/* <a href="#0" className="f6 link dim black db">Sign up</a> */}
                            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        </div>
                    </form>
                    </main>

                    <button className="closeSignIn" onClick={() =>{toggle()}}>Close</button>
                </div>
            </div>
        </>
    )
}

export default SignIn