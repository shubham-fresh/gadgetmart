import React from "react";
import "../assets/styles/ListPage.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import { Link } from "react-router-dom";

const CouponList = () => {

    const labels = [
            {
                "id": "0",
                "title": "ID",
                "width": "2"
            },
            {
                "id": "1",
                "title": "Coupon Name",
                "width": "4"
            },
            {
                "id": "2",
                "title": "Coupon Code",
                "width": "4"
            },
            {
                "id": "3",
                "title": "Discount",
                "width": "2"
            },
            {
                "id": "4",
                "title": "Status",
                "width": "2"
            },
        ]
    
        const dataKeys = ["id", "couponName", "couponCode", "discount", "status"];
    
        const data = [
            {
                "id": "110",
                "couponName": "WELCOME OFFER",
                "discount": "300",
                "status": "Active",
                "couponCode": "WC300"
            },
            {
                "id": "120",
                "couponName": "DIWALI OFFER",
                "discount": "20%",
                "status": "Deactive",
                "couponCode": "GM20"
            },
            {
                "id": "130",
                "couponName": "WEEKEND OFFER",
                "discount": "10%",
                "status": "Active",
                "couponCode": "GM10"
            }
        ]

    const pageDetails = {
        "pageLink": "Coupons",
        "pageName": "Coupon List"
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
                <Link to="/coupon/add" className="lp-link-btn">New Coupon</Link>
            </div>
            <ListComponent listDetails={listDetails}/>
        </div>
    )
}

export default CouponList;