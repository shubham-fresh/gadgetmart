import React from "react";
import "../assets/styles/ProductList.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import PageFooter from "../components/PageFooter";
import { Link } from "react-router-dom";

const ProductList = () => {

    const pageDetails = {
        "pageLink": "Products",
        "pageName": "Product List"
    }

    return (
        <div className="product-list">
            <div className="pl-head">
                <PageHeader page={pageDetails} />
                <Link to="/product/add" className="pl-link-btn">New Product</Link>
            </div>
            <ListComponent/>
        </div>
    )
}

export default ProductList;