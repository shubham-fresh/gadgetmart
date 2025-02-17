import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import "../assets/styles/ProductForm.css";
import prodImg from "../assets/images/user.jpg";

const ProductForm = () => {

    const pageDetails = {
        "pageLink": "Products",
        "pageName": "Add Product"
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
        <form className="pf-page" onSubmit={submitHandler} >
            <div className="pf-head">
                <PageHeader page={pageDetails} />
                <button className="pf-submit-btn" type="submit">Save</button>
            </div>

            <div className="product-form">
                <div className="pf-left pf-flex2">
                    <div className="pf-box">
                        <h2 className="pf-box-title">Basic Information</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label className="pf-label">Product Name</label>
                                <input type="text" className="pf-input" name="title" onChange={changeHandler} />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Brand</label>
                                <select name="brand_id" id="" className="pf-select" onChange={changeHandler} >
                                    <option value="Select Brand" className="pf-option">Select Brand</option>
                                    <option value="Apple" className="pf-option">Apple</option>
                                    <option value="LG" className="pf-option">LG</option>
                                    <option value="Samsung" className="pf-option">Samsung</option>
                                    <option value="Lenovo" className="pf-option">Lenovo</option>
                                </select>
                            </div>
                            <div className="pf-box-content">
                                <label className="pf-label">Description</label>
                                <textarea name="description" id="" className="pf-textarea" onChange={changeHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Images</h2>
                        <div className="pf-box-col">
                            <div className="pf-image-box">
                                <img src={prodImg} alt="" className="pf-prod-img" />
                                <input type="file" className="pf-file-input" />
                                <button className="pf-del-btn">X</button>
                            </div>
                            <div className="pf-image-box">
                                <img src={prodImg} alt="" className="pf-prod-img" />
                                <input type="file" className="pf-file-input" />
                                <button className="pf-del-btn">X</button>
                            </div>
                            <div className="pf-image-box">
                                <img src={prodImg} alt="" className="pf-prod-img" />
                                <input type="file" className="pf-file-input" />
                                <button className="pf-del-btn">X</button>
                            </div>
                            <div className="pf-middle">
                                <button className="pf-add-btn">Add Image +</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pf-right pf-flex1">
                    <div className="pf-box">
                        <h2 className="pf-box-title">Pricing</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Old Price</label>
                                <input type="number" className="pf-input" name="old_price" onChange={changeHandler} />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">New Price</label>
                                <input type="number" className="pf-input" name="new_price" onChange={changeHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Categories</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Category</label>
                                <select name="category_id" id="" className="pf-select" onChange={changeHandler} >
                                    <option value="Gaming" className="pf-option">Gaming</option>
                                    <option value="Sound" className="pf-option">Sound</option>
                                    <option value="Computer" className="pf-option">Computer</option>
                                    <option value="Appliances" className="pf-option">Appliances</option>
                                    <option value="Mobiles" className="pf-option">Mobiles</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Stock</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Stock</label>
                                <input type="number" className="pf-input" name="stock" onChange={changeHandler} />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Stock Status</label>
                                <input type="text" className="pf-input"/>
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Seller</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Seller ID</label>
                                <input type="text" className="pf-input" name="seller_id" onChange={changeHandler} />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Seller Details</label>
                                <p className="pf-box-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cum soluta quod fugiat eius ullam! Ratione architecto ut magnam minus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}


export default ProductForm;