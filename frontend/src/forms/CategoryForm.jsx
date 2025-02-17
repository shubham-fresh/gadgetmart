import React, { useState } from "react";
import "../assets/styles/CategoryForm.css";
import PageHeader from "../components/PageHeader";

const CategoryForm = () => {

    const pageDetails = {
        "pageLink": "Categories",
        "pageName": "Add Category"
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
        <form className="cf-page" onSubmit={submitHandler}>
            <div className="cf-head">
                <PageHeader page={pageDetails} />
                <button type="submit" className="cf-submit-btn" >Save</button>
            </div>
            <div className="category-form">
                <div className="cf-box">
                    <h2 className="cf-box-title">Basic Information</h2>
                    <div className="cf-box-col">
                        <div className="cf-box-content">
                            <label htmlFor="" className="cf-label">Category Name</label>
                            <input type="text" className="cf-input" name="name" onChange={changeHandler} />
                        </div>
                        <div className="cf-box-content">
                            <label className="cf-label">Description</label>
                            <textarea name="description" id="" className="cf-textarea" onChange={changeHandler} />
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default CategoryForm;