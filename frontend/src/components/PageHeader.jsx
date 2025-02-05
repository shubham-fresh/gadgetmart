import React from "react";
import "../assets/styles/PageHeader.css";
import { Link } from "react-router-dom";

const PageHeader = ({ page }) => {

    return (
        <div className="page-header">
            <div className="ph-toggle-box">
                <Link to="/dashboard" className="ph-nav-link">Dashboard</Link>
                <span className="ph-nav-span">{page.pageLink}</span>
            </div>
            <h2 className="ph-title">{page.pageName}</h2>
            
        </div>
    )
}

export default PageHeader;