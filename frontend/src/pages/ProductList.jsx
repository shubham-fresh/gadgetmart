import React from "react";
import "../assets/styles/ProductList.css";
import PageHeader from "../components/PageHeader";
import ListComponent from "../components/ListComponent";
import PageFooter from "../components/PageFooter";

const ProductList = () => {

    return (
        <div className="product-list">
            <PageHeader page={{"type": "list"}} />
            <ListComponent/>
            <PageFooter/>
        </div>
    )
}

export default ProductList;