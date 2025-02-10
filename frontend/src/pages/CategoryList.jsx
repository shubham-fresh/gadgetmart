import React from "react";
import "../assets/styles/ListPage.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import { Link } from "react-router-dom";

const CategoryList = () => {

    const labels = [
            {
                "id": "0",
                "title": "ID",
                "width": "2"
            },
            {
                "id": "1",
                "title": "Category",
                "width": "2"
            },
            {
                "id": "2",
                "title": "Items",
                "width": "2"
            }
        ]
    
        const dataKeys = ["id", "category", "items"];
    
        const data = [
            {
                "id": "110",
                "category": "Mobile",
                "items": "241"
            },
            {
                "id": "120",
                "category": "Computer",
                "items": "120"
            },
            {
                "id": "130",
                "category": "Kitchen",
                "items": "210"
            },
            {
                "id": "140",
                "category": "Gaming",
                "items": "53"
            },
            {
                "id": "150",
                "category": "Batteries",
                "items": "420"
            },
        ]

    const pageDetails = {
        "pageLink": "Categories",
        "pageName": "Category List"
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
                <Link to="/category/add" className="lp-link-btn">New Category</Link>
            </div>
            <ListComponent listDetails={listDetails}/>
        </div>
    )
}

export default CategoryList;