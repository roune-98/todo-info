import React from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import profil from '../assets/profil.jpg'
import { CgDetailsMore } from "react-icons/cg";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 app-container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img className="app-name" width="70" height="60" src={logo} /> 
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <CgDetailsMore />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 app-header">
                                    <li className="nav-item app-header-left">
                                        <div className="search-wrapper nav-link">  
                                            <input className="search-input w-50" type="text" placeholder="Search" />  
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#002639"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-search" viewBox="0 0 24 24">  
                                            <defs></defs>  
                                            <circle cx="11" cy="11" r="8"></circle>  
                                            <path d="M21 21l-4.35-4.35"></path>  
                                            </svg>  
                                        </div> 
                                    </li>
                                    <li className="nav-item app-header-right">
                                        <button className="notification-btn">  
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">  
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>  
                                        </button>  
                                        <button className="profile-btn">  
                                            <img src={profil} />  
                                            <span>Team 2BKD</span>  
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar