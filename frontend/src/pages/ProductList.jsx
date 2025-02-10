import React from "react";
import "../assets/styles/ListPage.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import { Link } from "react-router-dom";

const ProductList = () => {

    const labels = [
            {
                "id": "0",
                "title": "ID",
                "width": "2"
            },
            {
                "id": "1",
                "title": "Products",
                "width": "4"
            },
            {
                "id": "2",
                "title": "Category",
                "width": "2"
            },
            {
                "id": "3",
                "title": "Stock",
                "width": "2"
            },
            {
                "id": "1",
                "title": "Price",
                "width": "2"
            },
        ]
    
        const dataKeys = ["id", "title", "category", "stock", "Price"];
    
        const data = [
            {
                "id": "110",
                "title": "iPhone 15 Pro",
                "category": "Mobile",
                "stock": "Available",
                "Price": "$215"
            },
            {
                "id": "111",
                "title": "iPhone 15 Pro",
                "category": "Mobile",
                "stock": "Available",
                "Price": "$215"
            },
            {
                "id": "112",
                "title": "iPhone 15 Pro",
                "category": "Mobile",
                "stock": "Available",
                "Price": "$215"
            },
            {
                "id": "113",
                "title": "iPhone 15 Pro",
                "category": "Mobile",
                "stock": "Available",
                "Price": "$215"
            },
            {
                "id": "114",
                "title": "iPhone 15 Pro",
                "category": "Mobile",
                "stock": "Available",
                "Price": "$215"
            },
            {
                "id": "115",
                "title": "iPhone 15 Pro",
                "category": "Mobile",
                "stock": "Available",
                "Price": "$215"
            },
        ]

    const pageDetails = {
        "pageLink": "Products",
        "pageName": "Product List"
    }

    const listDetails = {
        "labels": labels,
        "dataKeys": dataKeys,
        "data": data
    }

    return (
        <div className="list-page">
            <div className="lp-head">
                <PageHeader page={pageDetails} />
                <Link to="/product/add" className="lp-link-btn">New Product</Link>
            </div>
            <ListComponent listDetails={listDetails}/>
        </div>
    )
}

export default ProductList;