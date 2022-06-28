import React from 'react'
import logo from './logo.png'
import profil from './profil.jpg'
import './Header.css'
import {RiInboxUnarchiveLine } from "react-icons/ri"
import { Link } from 'react-router-dom'

const Header = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate()
    async function handleLogout() {
     
  
      try {
          await logout(auth)
          navigate("/login")
      } catch {
          alert("Une erreur est arrivé au moment de votre deconexion, svp vérifiez votre connexion et reprendre",'error')
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
                        <Link to="/archives" type='button' className="btn notification-btn nav-link dark">
                         <RiInboxUnarchiveLine    className="icons-archive"  />                      
                        </Link>   
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