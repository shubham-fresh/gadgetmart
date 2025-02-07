import React from "react";
import "../assets/styles/SellerForm.css";
import PageHeader from "../components/PageHeader";

const SellerForm = () => {

    const pageDetails = {
        "pageLink": "Sellers",
        "pageName": "Add Seller"
    }
    
  return (
    <form className="sf-page">
            <div className="sf-head">
                <PageHeader page={pageDetails} />
                <button className="sf-submit-btn">Save</button>
            </div>
            <div className="seller-form">
                <div className="sf-box">
                    <h2 className="sf-box-title">Basic Information</h2>
                    <div className="sf-box-col">
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Seller Name</label>
                            <input type="text" className="sf-input" />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Contact No.</label>
                            <input type="number" className="sf-input" />
                        </div>
                        <div className="sf-box-content">
                            <label htmlFor="" className="sf-label">Email ID</label>
                            <input type="email" className="sf-input" />
                        </div>
                        <div className="sf-box-content">
                            <label className="sf-label">Address</label>
                            <textarea name="" id="" className="sf-textarea" />
                        </div>
                    </div>
                </div>
            </div>

        </form>
  )
}

export default SellerForm;