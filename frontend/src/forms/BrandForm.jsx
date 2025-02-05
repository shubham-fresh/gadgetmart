import React from "react";
import "../assets/styles/BrandForm.css";
import PageHeader from "../components/PageHeader";

const BrandForm = () => {

    const pageDetails = {
        "pageLink": "Brands",
        "pageName": "Add Brand"
    }

    return (
        <form className="bf-page">
            <div className="bf-head">
                <PageHeader page={pageDetails} />
                <button className="bf-submit-btn">Save</button>
            </div>
            <div className="brand-form">
                <div className="bf-box">
                    <h2 className="bf-box-title">Basic Information</h2>
                    <div className="bf-box-col">
                        <div className="bf-box-content">
                            <label htmlFor="" className="bf-label">Brand Name</label>
                            <input type="text" className="bf-input" />
                        </div>
                        <div className="bf-box-content">
                            <label className="bf-label">Description</label>
                            <textarea name="" id="" className="bf-textarea" />
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default BrandForm;