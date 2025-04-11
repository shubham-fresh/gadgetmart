import React, { useState } from "react";
import "../assets/styles/SellerForm.css";
import PageHeader from "../components/PageHeader";

const SellerForm = () => {

    const pageDetails = {
        "pageLink": "Sellers",
        "pageName": "Add Seller"
    }

    const [data, setData] = useState({});

    const changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <form className="sf-page" onSubmit={submitHandler}>
            <div className="sf-head">
                <PageHeader page={pageDetails} />
                <button type="submit" className="sf-submit-btn">Save</button>
            </div>
            <div className="seller-form">
                <div className="sf-box">
                    <h2 className="sf-box-title">Basic Details</h2>
                    <div className="sf-box-row">
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">First Name</label>
                            <input type="text" className="sf-input" name="firstName" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Last Name</label>
                            <input type="text" className="sf-input" name="lastName" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Phone</label>
                            <input type="number" className="sf-input" name="lastName" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Email ID</label>
                            <input type="email" className="sf-input" name="email" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
                <div className="sf-box">
                    <h2 className="sf-box-title">Bussiness Details</h2>
                    <div className="sf-box-col">
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Store Name</label>
                            <input type="text" className="sf-input" name="storeName" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Store Description</label>
                            <textarea className="sf-input" name="storeDescription" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
                <div className="sf-box">
                    <h2 className="sf-box-title">Address Details</h2>
                    <div className="sf-box-row">
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Street</label>
                            <input type="text" className="sf-input" name="street" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">City</label>
                            <input type="text" className="sf-input" name="city" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">State</label>
                            <input type="text" className="sf-input" name="state" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Pincode</label>
                            <input type="number" className="sf-input" name="pincode" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
                <div className="sf-box">
                    <h2 className="sf-box-title">Basic Information</h2>
                    <div className="sf-box-row">
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Username</label>
                            <input type="text" className="sf-input" name="username" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Password</label>
                            <input type="password" className="sf-input" name="Password" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default SellerForm;