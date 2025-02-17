import React, { useState } from "react";
import "../assets/styles/BrandForm.css";
import PageHeader from "../components/PageHeader";

const BrandForm = () => {
    
    const pageDetails = {
        "pageLink": "Brands",
        "pageName": "Add Brand"
    }

    const [ data, setData ] = useState({});

    const changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <form className="bf-page" onSubmit={submitHandler}>
            <div className="bf-head">
                <PageHeader page={pageDetails} />
                <button type="submit" className="bf-submit-btn">Save</button>
            </div>
            <div className="brand-form">
                <div className="bf-box">
                    <h2 className="bf-box-title">Basic Information</h2>
                    <div className="bf-box-col">
                        <div className="bf-box-content">
                            <label htmlFor="" className="bf-label">Brand Name</label>
                            <input type="text" className="bf-input" name="name" onChange={changeHandler} />
                        </div>
                        <div className="bf-box-content">
                            <label className="bf-label">Description</label>
                            <textarea name="description" id="" className="bf-textarea" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default BrandForm;