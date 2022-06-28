import React,{u} from 'react'
import logo from './logo.png';
import profil from './profil.jpg';
import './Header.css'
import { Link , useNavigate} from 'react-router-dom';
import {CgMenuLeft, CgLogOut} from "react-icons/cg";
import {RiInboxUnarchiveLine} from "react-icons/ri"
import { UserContext } from '../../../Outils/UserContext';
import alert from 'sweetalert';
import { auth } from '../../../firebase-config';

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
                    <button className="profile-btn">  
                        <img src={profil} />  
                        <span>Team 2BKD</span>  
                    </button>   
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                    <button type="button" onClick={handleLogout} style={{color: "#002639"}} className="dropdown-item btn textSideOver font-weight-bolder"> <CgLogOut className='icon' style={{color: "#002639"}}/> Deconnexion </button>

                    </div>           
                                                    
                </li>
                
        
            </ul>
            </nav>
        </div>
    )
}

export default Header