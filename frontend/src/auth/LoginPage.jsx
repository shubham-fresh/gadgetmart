import React, { useState } from "react";
import "../assets/styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password);z
    }

  return (
    <div className="login-page">
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={submitHandler}>
                <div className="login-box">
                    <label className="login-label">Username</label>
                    <input type="text" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login-box">
                    <label className="login-label">Password</label>
                    <input type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login-box">
                    <Link to="#" className="login-link">Forgot Password?</Link>
                </div>
                <div className="login-box">
                    <button type="submit" className="login-btn">Login</button>
                </div>
                <div className="login-row">
                    {/* <span className="login-span">Become a Seller?</span> */}
                    <Link to="/signup" className="login-link">Register as Seller</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;