import React from "react";
import "../assets/styles/CouponForm.css";
import PageHeader from "../components/PageHeader";

const CouponForm = () => {

    const pageDetails = {
        "pageLink": "Coupons",
        "pageName": "Add Coupon"
    }

    return (
        <form className="cpf-page">
            <div className="cpf-head">
                <PageHeader page={pageDetails} />
                <button className="cpf-submit-btn">Save</button>
            </div>

            <div className="coupon-form">
                <div className="cpf-left cpf-flex2">
                    <div className="cpf-box">
                        <h2 className="cpf-box-title">Basic Information</h2>
                        <div className="cpf-box-col">
                            <div className="cpf-box-content">
                                <label className="cpf-label">Coupon Name</label>
                                <input type="text" className="cpf-input" />
                            </div>
                            <div className="cpf-box-content">
                                <label className="cpf-label">Coupon Code</label>
                                <input type="text" className="cpf-input" />
                            </div>
                            <div className="cpf-box-content">
                                <label htmlFor="" className="cpf-label">Discount Type</label>
                                <select name="" id="" className="cpf-select">
                                    <option value="Select Brand" className="cpf-option">Select Brand</option>
                                    <option value="Free Shipping" className="cpf-option">Free Shipping</option>
                                    <option value="Percentage" className="cpf-option">Percentage</option>
                                    <option value="Fixed Ammount" className="cpf-option">Fixed Ammount</option>
                                </select>
                            </div>
                            <div className="cpf-box-content">
                                <label className="cpf-label">Discount Value</label>
                                <input type="number" className="cpf-input" />
                            </div>
                            <div className="cpf-box-content">
                                <label className="cpf-label">Description</label>
                                <textarea name="" id="" className="cpf-textarea" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cpf-right cpf-flex1">
                    <div className="cpf-box">
                        <h2 className="cpf-box-title">Status</h2>
                        <div className="cpf-box-col">
                            <div className="cpf-box-content">
                                <label htmlFor="" className="cpf-label">Status</label>
                                <select name="" id="" className="cpf-select">
                                    <option value="Active" className="cpf-option">Active</option>
                                    <option value="Inactive" className="cpf-option">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="cpf-box">
                        <h2 className="cpf-box-title">Schedule</h2>
                        <div className="cpf-box-col">
                            <div className="cpf-box-content">
                                <label htmlFor="" className="cpf-label">Start Date</label>
                                <input type="date" className="cpf-input" />
                            </div>
                            <div className="cpf-box-content">
                                <label htmlFor="" className="cpf-label">End Date</label>
                                <input type="date" className="cpf-input" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CouponForm;