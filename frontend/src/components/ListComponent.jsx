import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/ListComponent.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaSortUp, FaSortDown } from "react-icons/fa6";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ListComponent = () => {

    const [ activeProd, setActiveProd ] = useState(null);
    const [ activePage, setActivePage ] = useState(1);

    const helperRef = useRef(null);

    const prevBtnHandler = () => {
        if(activePage > 1) {
            setActivePage((prevState) => +prevState - 1)
        }
    }

    const nextBtnHandler = () => {
        setActivePage((prevState) => +prevState + 1)
    }

    const helperHandler = (e) => {
        if(activeProd != e.currentTarget.id) {
            setActiveProd(e.currentTarget.id);
        } else {
            setActiveProd(null);
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(helperRef.current && !helperRef.current.contains(e.target)) {
                setActiveProd(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

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

    return (
        <div className="list-component">
            <div className="lc-area">
                <div className="lc-header">
                    <button className="lc-filter-btn"><HiMiniAdjustmentsHorizontal /></button>
                    <div className="lc-search-box">
                        <span className="lc-search-icon"><IoSearchSharp /></span>
                        <input type="text" className="lc-search-input" placeholder="Start typing to search" />
                    </div>
                </div>
                <div className="lc-box">
                    <ul className="lc-list">
                        {
                            labels.map((item) => (
                                <li className={`lc-list-item ${"wf-" + item.width}`}>
                                    <button className="lc-sort-btn">
                                        <span className="lc-col-head">{item.title}</span>
                                        <div className="lc-sort-box">
                                            <span className="lc-sort-icon"><FaSortUp /></span>
                                            <span className="lc-sort-icon"><FaSortDown /></span>
                                        </div>
                                    </button>
                                </li>
                            ))
                        }
                        <li className={`lc-list-item lc-helper`} />
                    </ul>
                    {
                        data.map((prod) => (
                            <ul className="lc-list">
                                {
                                    dataKeys.map((key, index) => (
                                        <li className={`lc-list-item ${"wf-" + labels[index].width}`}>
                                            <span className="lc-col-title">{prod[key]}</span>
                                        </li>
                                    ))
                                }
                                <li className={`lc-list-item lc-helper`} ref={helperRef} >
                                    <button id={prod.id} className="lc-helper-btn" onClick={helperHandler} >
                                        <HiOutlineDotsVertical />
                                    </button>
                                    <ul className={`lc-helper-list ${prod.id != activeProd && "hide"}`}>
                                        <li className="lc-helper-item">
                                            <a href="#" className="lc-helper-opt">View</a>
                                        </li>
                                        <li className="lc-helper-item">
                                            <a href="#" className="lc-helper-opt">Edit</a>
                                        </li>
                                        <li className="lc-helper-item">
                                            <a href="#" className="lc-helper-opt">Delete</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        ))
                    }
                    <div className="lc-pg-box">
                        <div className="lc-left-pg">
                            <button className="lc-pg-btn" onClick={prevBtnHandler}>Previous</button>
                            <button id="1" className={`lc-pg-btn ${activePage == 1 && "bg-yellow"}`} onClick={(e) => setActivePage(e.target.id)}>1</button>
                            <button id="2" className={`lc-pg-btn ${activePage == 2 && "bg-yellow"}`} onClick={(e) => setActivePage(e.target.id)}>2</button>
                            <button className="lc-pg-btn" onClick={nextBtnHandler}>Next</button>
                        </div>
                        <div className="lc-right-pg">
                            <p className="lc-pg-para">Showing 1 to 10 of 16</p>
                            <p className="lc-pg-para">Rows per Page</p>
                            <select name="" id="" className="lc-pg-select">
                                <option value="10" className="lg-pg-opt">10</option>
                                <option value="15" className="lg-pg-opt">15</option>
                                <option value="20" className="lg-pg-opt">20</option>
                                <option value="25" className="lg-pg-opt">25</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListComponent;