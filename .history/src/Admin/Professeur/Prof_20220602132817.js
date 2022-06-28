import React from 'react'
import '../../NavBar/NavBar.css'
import logo from '../../assets/logo.png'
import profil from '../../assets/profil.jpg'
import { CgDetailsMore } from "react-icons/cg";
import Aj

const Prof = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="app-name" width="70" height="60" src={logo} /> 
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <CgDetailsMore />
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto app-header text-center">
                        <li className="nav-item app-header-right">
                            <div className="search-wrapper nav-link">  
                                <input className="search-input w-50" type="text" placeholder="Search" />  
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#002639"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-search" viewBox="0 0 24 24">  
                                <defs></defs>  
                                <circle cx="11" cy="11" r="8"></circle>  
                                <path d="M21 21l-4.35-4.35"></path>  
                                </svg>  
                            </div>                         
                        </li>
                        <li class="nav-item app-header-right">
                            <a class="nav-link" href="#">
                                <button className="notification-btn">  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">  
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>  
                                </button>
                            </a>
                        
                            <a class="nav-link" href="#">
                                <button className="profile-btn">  
                                    <img src={profil} />  
                                    <span>Team 2BKD</span>  
                                </button>
                            </a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
            <AjouterProf/>
        </div>
    )
}

export default Prof;