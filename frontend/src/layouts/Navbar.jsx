import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/Navbar.css';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoSearchSharp, IoNotifications } from 'react-icons/io5';
import userImg from '../assets/images/user.jpg';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/basic/basicSlice';

const Navbar = () => {

    const [ isActive, setIsActive ] = useState(false);
    const dispatch = useDispatch();
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(drawerRef.current && !drawerRef.current.contains(e.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <div className="navbar">
            <div className="nav-left-box">
                <div className="nav-btn-box">
                    <button className="nav-btn" onClick={() => dispatch(toggleSidebar())}>
                        <FaBarsStaggered />
                    </button>
                </div>
                <div className="nav-search-box">
                    <div className="nav-search-content">
                        <span className="nav-search-icon">
                            <IoSearchSharp />
                        </span>
                        <input type="text" className="nav-search-input" placeholder="Search here" />
                    </div>
                </div>
            </div>
            <div className="nav-right-box">
                <div className="nav-notif-box">
                    <button className="nav-notif-icon">
                        <IoNotifications />
                        <span className="nav-notif-bubble">5</span>
                    </button>
                </div>
                <div className="nav-prof-box" ref={drawerRef}>
                    <button className={`nav-prof-btn ${isActive && "bg-grey"}`} onClick={() => setIsActive(!isActive)}>
                        <div className="nav-prof-left">
                            <img src={userImg} alt="user_img" className="nav-prof-img" />
                        </div>
                        <div className="nav-prof-right">
                            <span className="nav-prof-name1">Peter Parker</span>
                            <span className="nav-prof-name2">peterparker@test.com</span>
                        </div>
                    </button>
                    <ul className={isActive ? "nav-prof-list" : "hide"}>
                        <li className="nav-prof-item">
                            <a href="#" className="nav-prof-link">Profile</a>
                        </li>
                        <li className="nav-prof-item">
                            <a href="#" className="nav-prof-link">Inbox</a>
                        </li>
                        <li className="nav-prof-item">
                            <a href="#" className="nav-prof-link">Sign Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;