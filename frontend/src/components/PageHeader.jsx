import React from "react";
import "../assets/styles/PageHeader.css";
import { Link } from "react-router-dom";

const PageHeader = ({ page }) => {

    return (
        <div className="page-header">
            <div className="ph-left">
                <div className="ph-toggle-box">
                    <Link to="/dashboard" className="ph-nav-link">Dashboard</Link>
                    <span className="ph-nav-span">Product List</span>
                </div>
                <h2 className="ph-title">Product List</h2>
            </div>
            {
                page.type == "list" && (
                    <div className="ph-right">
                        <Link to="/product/add" className="ph-link-btn">New Product</Link>
                    </div>
                )
            }
            {
                page.type == "add" && (
                    <div className="ph-right">
                        <Link to="/product/list" className="ph-link-btn">Save</Link>
                    </div>
                )
            }
            {
                page.type == "edit" && (
                    <div className="ph-right">
                        <Link to="/product/edit" className="ph-link-btn">Edit</Link>
                    </div>
                )
            }
        </div>
    )
}

export default PageHeader;