import React, { useState } from 'react';
import "../assets/styles/Sidebar.css";
import { PiCaretRightBold } from "react-icons/pi";
import { BiTachometer } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";
import { GiHanger } from "react-icons/gi";
import { RiShoppingCartLine, RiCoupon2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { TbBrandBing } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {

    const menuList = [
        {
            id: "0",
            title: "Dashboard",
            icon: <BiTachometer/>,
            to: "#",
        },
        {
            id: "1",
            title: "Products",
            icon: <GiHanger/>,
            submenu: [
                {
                    id: 11,
                    title: "Product List",
                    to: "/product/list"
                },
                {
                    id: 12,
                    title: "Add Product",
                    to: "/product/add"
                }
            ]
        },
        {
            id: "2",
            title: "Categories",
            icon: <FaDatabase/>,
            submenu: [
                {
                    id: 21,
                    title: "Categories List",
                    to: "#"
                },
                {
                    id: 22,
                    title: "Add Category",
                    to: "/category/add"
                }
            ]
        },
        {
            id: "3",
            title: "Orders",
            icon: <RiShoppingCartLine/>,
            submenu: [
                {
                    id: 31,
                    title: "Orders List",
                    to: "#"
                },
                {
                    id: 32,
                    title: "Order Details",
                    to: "#"
                }
            ]
        },
        {
            id: "4",
            title: "Customers",
            icon: <IoPersonOutline/>,
            submenu: [
                {
                    id: 41,
                    title: "Customers List",
                    to: "#"
                },
                {
                    id: 42,
                    title: "Customer",
                    to: "#"
                }
            ]
        },
        {
            id: "5",
            title: "Coupons",
            icon: <RiCoupon2Line/>,
            submenu: [
                {
                    id: 51,
                    title: "Coupons List",
                    to: "#"
                },
                {
                    id: 52,
                    title: "Add Coupon",
                    to: "#"
                }
            ]
        },
        {
            id: "6",
            title: "Brand",
            icon: <TbBrandBing/>,
            submenu: [
                {
                    id: 61,
                    title: "Brand List",
                    to: "/brand/list"
                },
                {
                    id: 62,
                    title: "Add Brand",
                    to: "/brand/add"
                }
            ]
        },
    ];


    const [ activeMenu, setActiveMenu ] = useState([]);

    const menuHandler = (e) => {
        let temp = [ ...activeMenu ];
        let menuId = e.currentTarget.id;
        if(temp.includes(menuId)) {
            let tempIndex = temp.findIndex((id) => id == menuId);
            temp.splice(tempIndex, 1);
            setActiveMenu(temp);
        } else {
            temp.push(menuId);
            setActiveMenu(temp);
        }
    }


    return (
        <div className="sidebar">
            <div className="sb-head">
                <a href="#" className="sb-title-box">
                    <span className="sb-title">GadgetMart</span>
                    <span className="sb-role">Admin</span>
                </a>
            </div>
            <ul className="sb-list">
                {
                    menuList.map((menu) => (
                        <li key={menu.id} className="sb-list-item">
                            <Link to={menu.to} id={menu.id} className="sb-menu-link" onClick={menuHandler}>
                                <div className="sb-menu-box">
                                    <span className="sb-menu-icon">{menu.icon}</span>
                                    <span className="sb-menu">{menu.title}</span>
                                </div>
                                {
                                    menu.submenu && (
                                        <span className={activeMenu.includes(menu.id) ? "sb-menu-caret-act" : "sb-menu-caret"}><PiCaretRightBold /></span>
                                    )
                                }
                            </Link>
                            <ul className={`sb-submenu-list ${!activeMenu.includes(menu.id) && "hide"}`}>
                                {
                                    menu.submenu?.map((item) => (
                                        <li key={item.id} className="sb-list-item">
                                            <NavLink to={item.to} className="sb-submenu-link">
                                                <span className="sb-submenu">{item.title}</span>
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar;