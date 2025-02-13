import React from "react";
import "../assets/styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="signup-page">
        <div className="signup-container">
            <h2 className="signup-title">Login</h2>
            <form action="" className="signup-form">
                <div className="signup-box">
                    <label className="signup-label">Email ID</label>
                    <input type="text" className="signup-input" />
                </div>
                <div className="signup-box">
                    <label className="signup-label">Password</label>
                    <input type="password" className="signup-input" />
                </div>
                <div className="signup-box">
                    <Link to="#" className="signup-link">Forgot Password?</Link>
                </div>
                <div className="signup-box">
                    <button className="signup-btn">Login</button>
                </div>
                <div className="signup-row">
                    <span className="signup-span">Not a member?</span>
                    <Link to="/signup" className="signup-link">Signup</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;