import React from 'react'
import { Link } from 'react-router-dom'
import '../hackweek.css'


export const Login=()=> {
    return (
        <div className="text-center m-5-auto login-body hashweek" id="hashweek">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <p style={{color:"#000"}}>First time? <Link to="/RegisterPage">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
        </div>
    )
}
