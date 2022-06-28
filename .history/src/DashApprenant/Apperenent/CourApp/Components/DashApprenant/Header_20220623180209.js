import React ,{useContext}from 'react'
import logo from './logo.png'
import profil from './profil.jpg'
import { useNavigate} from 'react-router-dom';
import {CgMenuLeft, CgLogOut} from "react-icons/cg";
import { UserContext } from '../../../Outils/UserContext';
import alert from 'sweetalert';
import { auth } from '../../../firebase-config';
import './Header.css'

const Header = () => {
    const { logout } = useContext(UserContext);
    const history = useNavigate()

    async function handleLogout() {

        try {
            await logout(auth)
            history("/login")
        } catch {
            alert("Une erreur est arrivé au moment de votre deconexion, svp vérifiez votre connexion et reprendre", "danger")
        }
    }
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link"><img src={logo} alt="Logo" className="brand-image" width={55} height={40} /></a>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">  
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>  
                    </button>  
                    <button className="profile-btn">  
                        <img src={profil} />  
                        <span>Team 2BKD</span>  
                    </button>              
                    <div class="dropdown">
                        <button class="profile-btn btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={profil} />  
                            <span>Deconnexion</span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <button type="button" onClick={handleLogout} style={{color: "#002639"}} className="dropdown-item btn textSideOver font-weight-bolder"> <CgLogOut className='icon' style={{color: "#002639"}}/> Deconnexion </button>
                        
                        </div>
                    </div>                     
                                
                </li>
                
        
            </ul>
            </nav>
        </div>
    )
}

export default Header