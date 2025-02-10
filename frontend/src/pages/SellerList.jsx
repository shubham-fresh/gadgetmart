import React from "react";
import "../assets/styles/ListPage.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import { Link } from "react-router-dom";

const SellerList = () => {

    const labels = [
            {
                "id": "0",
                "title": "ID",
                "width": "2"
            },
            {
                "id": "1",
                "title": "Name",
                "width": "4"
            },
            {
                "id": "2",
                "title": "Contact",
                "width": "4"
            },
            {
                "id": "3",
                "title": "Email",
                "width": "4"
            },
            {
                "id": "4",
                "title": "Sales",
                "width": "2"
            },
        ]
    
        const dataKeys = ["id", "name", "contact", "email", "sales"];
    
        const data = [
            {
                "id": "110",
                "name": "Adani Shop",
                "contact": "9876543210",
                "email": "adani@test.com",
                "sales": "353"
            },
            {
                "id": "120",
                "name": "Ambani Shop",
                "contact": "9685743210",
                "email": "ambani@test.com",
                "sales": "451"
            },
            {
                "id": "130",
                "name": "Tata Shop",
                "contact": "9576941230",
                "email": "tata@test.com",
                "sales": "156"
            }
        ]

    const pageDetails = {
        "pageLink": "Sellers",
        "pageName": "Seller List"
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
                <Link to="/seller/add" className="lp-link-btn">New Seller</Link>
            </div>
            <ListComponent listDetails={listDetails}/>
        </div>
    )
}

export default SellerList;