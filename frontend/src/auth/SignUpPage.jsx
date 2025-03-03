import React, { useState } from "react";
import "../assets/styles/LoginPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {

    const [data, setData] = useState({});
    const [address, setAddress] = useState({});

    const dataHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const addressHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddress({
            ...address,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({ ...data, ...address });
    }

    return (
        <div className="login-page">
            <div className="signup-container">
                <Link to="/login" className="signup-cancel">X</Link>
                <h2 className="login-title">Seller Registration</h2>
                <form className="login-form" onSubmit={submitHandler}>
                    <h2 className="login-box-title">Basic Details</h2>
                    <div className="signup-row-box">
                        <div className="login-box">
                            <label className="login-label">First Name</label>
                            <input type="text" className="login-input" value={data.firstName} onChange={dataHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">Last Name</label>
                            <input type="text" className="login-input" value={data.lastName} onChange={dataHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">Phone</label>
                            <input type="text" className="login-input" value={data.phone} onChange={dataHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">Email ID</label>
                            <input type="email" className="login-input" value={data.email} onChange={dataHandler} />
                        </div>
                    </div>
                    <h2 className="login-box-title">Bussiness Details</h2>
                    <div className="signup-col-box">
                        <div className="signup-box">
                            <label className="login-label">Store Name</label>
                            <input type="text" className="login-input" value={data.storeName} onChange={dataHandler} />
                        </div>
                        <div className="signup-box">
                            <label className="login-label">Store Description</label>
                            <textarea name="storeDescription" id="" className="signup-textarea" value={data.storeDescription} onChange={dataHandler} />
                        </div>
                    </div>
                    <h2 className="login-box-title">Address Details</h2>
                    <div className="signup-row-box">
                        <div className="login-box">
                            <label className="login-label">Street</label>
                            <input type="text" className="login-input" value={address.street} onChange={addressHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">City</label>
                            <input type="text" className="login-input" value={address.city} onChange={addressHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">State</label>
                            <input type="text" className="login-input" value={address.state} onChange={addressHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">Pincode</label>
                            <input type="text" className="login-input" value={address.pincode} onChange={addressHandler} />
                        </div>
                    </div>
                    <h2 className="login-box-title">Username Details</h2>
                    <div className="signup-row-box">
                        <div className="login-box">
                            <label className="login-label">Username</label>
                            <input type="text" className="login-input" value={data.username} onChange={dataHandler} />
                        </div>
                        <div className="login-box">
                            <label className="login-label">Password</label>
                            <input type="text" className="login-input" value={data.password} onChange={dataHandler} />
                        </div>
                    </div>
                    <div className="login-btn-box">
                        <button type="submit" className="login-btn">Register</button>
                    </div>
                    <div className="login-row">
                        <span className="login-span">Already Registerd?</span>
                        <Link to="/login" className="login-link">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;