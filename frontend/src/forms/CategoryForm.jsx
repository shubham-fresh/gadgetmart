import React from "react";
import "../assets/styles/CategoryForm.css";
import PageHeader from "../components/PageHeader";

const CategoryForm = () => {

    const pageDetails = {
        "pageLink": "Categories",
        "pageName": "Add Category"
    }

    return (
        <form className="cf-page">
            <div className="cf-head">
                <PageHeader page={pageDetails} />
                <button className="cf-submit-btn">Save</button>
            </div>
            <div className="category-form">
                <div className="cf-box">
                    <h2 className="cf-box-title">Basic Information</h2>
                    <div className="cf-box-col">
                        <div className="cf-box-content">
                            <label htmlFor="" className="cf-label">Category Name</label>
                            <input type="text" className="cf-input" />
                        </div>
                        <div className="cf-box-content">
                            <label className="cf-label">Description</label>
                            <textarea name="" id="" className="cf-textarea" />
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default CategoryForm;