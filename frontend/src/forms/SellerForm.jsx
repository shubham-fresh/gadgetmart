import React, { useState } from "react";
import "../assets/styles/SellerForm.css";
import PageHeader from "../components/PageHeader";

const SellerForm = () => {

    const pageDetails = {
        "pageLink": "Sellers",
        "pageName": "Add Seller"
    }

    const [ data, setData ] = useState({});

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
                    <h2 className="sf-box-title">Basic Information</h2>
                    <div className="sf-box-col">
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Seller Name</label>
                            <input type="text" className="sf-input" name="name" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Contact No.</label>
                            <input type="number" className="sf-input" name="contact" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Email ID</label>
                            <input type="email" className="sf-input" name="email" onChange={changeHandler} />
                        </div>
                        <div className="sf-box-content">
                            <label className="sf-label">Address</label>
                            <textarea name="address" id="" className="sf-textarea" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
            </div>

        </form>
  )
}

export default SellerForm;