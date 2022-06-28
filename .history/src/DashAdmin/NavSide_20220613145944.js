import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap'
import { UserContext } from '../Outils/UserContext';
import "./Navside.css"
import logo from "./logo.png";
import { BsFillBookFill, BsFillCalendar2RangeFill, BsFillPersonLinesFill, BsHouseFill, BsPersonBoundingBox } from "react-icons/bs";
import {CgMenuLeft, CgLogOut} from "react-icons/cg";
import "./Navside.css"
import Logout from '../Acces/Logout';
import { auth } from '../firebase-config';

const NavSide = () => {

    const [error, setError] = useState("")
    const { logout } = useContext(UserContext);
    const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
        await logout(auth)
        history("/login")
    } catch {
        setError("Une erreur est arrivé au moment de votre deconexion, svp vérifiez votre connexion et reprendre")
    }
}
  return (
    <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-5">
          
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            
            {/* Sidebar Menu */}
            <nav className="mt-5">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item side">
                  <a href="" className="app-sidebar-link ">  
                      <BsHouseFill className='icon ml-1'/>
                  </a>  
                  <p className='textSide ml-5'>Dashboards</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillCalendar2RangeFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Evenments</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillBookFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Courses</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillPersonLinesFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Apprenants</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsPersonBoundingBox className='icon'/>
                  </a>  
                  <p className='textSide ml-5 mr-0'>Teachers</p>
                </li>
                <li className="nav-item side">
                  <a href="" className="app-sidebar-link ">  
                      <BsHouseFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Dashboards</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillCalendar2RangeFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Evenments</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillBookFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Courses</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillPersonLinesFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Apprenants</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsPersonBoundingBox className='icon'/>
                  </a>  
                  <p className='textSide ml-5 mr-0'>Teachers</p>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
        {/* /.sidebar */}
        <div className="modal-footer mb-3">
        {error && <Alert variant="danger">{error}</Alert>}
          <button type="button" onClick={handleLogout} className="btn textSideOver text-white"> <CgLogOut className='icon'/> Logout</button>
        </div>
      </aside>
    </div>
  )
}

export default NavSide