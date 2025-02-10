import React from "react";
import "../assets/styles/ListPage.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import { Link } from "react-router-dom";

const BrandList = () => {

    const labels = [
            {
                "id": "0",
                "title": "ID",
                "width": "2"
            },
            {
                "id": "1",
                "title": "Brand Name",
                "width": "4"
            },
            {
                "id": "2",
                "title": "Items",
                "width": "4"
            }
        ]
    
        const dataKeys = ["id", "brand", "items"];
    
        const data = [
            {
                "id": "110",
                "brand": "Apple",
                "items": "214",
            },
            {
                "id": "120",
                "brand": "Lenovo",
                "items": "124",
            },
            {
                "id": "140",
                "brand": "Dell",
                "items": "50",
            },
        ]

    const pageDetails = {
        "pageLink": "Brands",
        "pageName": "Brand List"
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
                <Link to="/brand/add" className="lp-link-btn">New Brand</Link>
            </div>
            <ListComponent listDetails={listDetails}/>
        </div>
    )
}

export default BrandList;