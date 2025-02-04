import React from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import "../assets/styles/ProductForm.css";
import prodImg from "../assets/images/user.jpg";

const ProductForm = () => {

    return (
        <div className="pf-page">
            <PageHeader page={{ "type": "add" }} />

            <form action="" className="product-form">
                <div className="pf-left pf-flex2">
                    <div className="pf-box">
                        <h2 className="pf-box-title">Basic Information</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label className="pf-label">Product Name</label>
                                <input type="text" className="pf-input" />
                            </div>
                            <div className="pf-box-content">
                                <label className="pf-label">Brand</label>
                                <input type="text" className="pf-input" />
                            </div>
                            <div className="pf-box-content">
                                <label className="pf-label">Deacription</label>
                                <textarea name="" id="" className="pf-textarea" />
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
                                <button className="pf-add-btn">Add Image</button>
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
                                <input type="number" className="pf-input" />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">New Price</label>
                                <input type="number" className="pf-input" />
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Categories</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Category</label>
                                <select name="" id="" className="pf-select">
                                    <option value="Gaming" className="pf-option">Gaming</option>
                                    <option value="Sound" className="pf-option">Sound</option>
                                    <option value="Computer" className="pf-option">Computer</option>
                                    <option value="Appliances" className="pf-option">Appliances</option>
                                    <option value="Mobiles" className="pf-option">Appliances</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Stock</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Stock</label>
                                <input type="number" className="pf-input" />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Stock Status</label>
                                <input type="text" className="pf-input" />
                            </div>
                        </div>
                    </div>
                    <div className="pf-box">
                        <h2 className="pf-box-title">Seller</h2>
                        <div className="pf-box-col">
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Seller ID</label>
                                <input type="text" className="pf-input" />
                            </div>
                            <div className="pf-box-content">
                                <label htmlFor="" className="pf-label">Seller Details</label>
                                <p className="pf-box-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cum soluta quod fugiat eius ullam! Ratione architecto ut magnam minus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <PageFooter />
        </div>
    )
}


export default ProductForm;