import React from 'react'
import logo from './logo.png'
import profil from './profil.jpg'
import './Header.css'
import {RiInboxUnarchiveLine} from "react-icons/ri"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" data-widget="pushmenu" to="#"><i className="fas fa-bars" /></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="index3.html" className="nav-link"><img src={logo} alt="Logo" className="brand-image" width={55} height={40} /></Link>
                </li>        
            </ul>
            {/* SEARCH FORM */}
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                    </button>
                </div>
                </div>
            </form>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                
                
                <li className="nav-item app-header-right">
                    <button className="notification-btn">  
                         <Link to="/archives" type='button' className="btn notification-btn nav-link dark">
                         <RiInboxUnarchiveLine    className="icons-archive mb-2"  />                      
                        </Link>   
                    </button>  
                    <button className="profile-btn">  
                        <img src={profil} />  
                        <span>Team 2BKD</span>  
                    </button>              
                                
                </li>
                
        
            </ul>
            </nav>
        </div>
    )
}

export default Header