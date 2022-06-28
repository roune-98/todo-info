import React from 'react'
import "./Navside.css"

import { BsFillBookFill, BsFillCalendar2RangeFill, BsFillPersonLinesFill, BsHouseFill, BsPersonBoundingBox } from "react-icons/bs";

import "./Navside.css"
import { Link } from 'react-router-dom';

const NavSide = () => {
  return (
    <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-5">
          
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            
            {/* Sidebar Menu */}
            <nav className="mt-5">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item side">
                  <Link to="" className="app-sidebar-link ">  
                      <BsHouseFill className='icon ml-1'/>
                  </Link>  
                  <p className='textSide ml-5'>Dashboards</p>
                </li>

                <li className="nav-item side">
                  <Link to="/ListeEvenement" className="app-sidebar-link">  
                      <BsFillCalendar2RangeFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Evenments</p>
                </li>

                <li className="nav-item side">
                  <Link to="/coursapp" className="app-sidebar-link">  
                      <BsFillBookFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Cours</p>
                </li>

                <li className="nav-item side">
                  <Link to="/listeApprenent" className="app-sidebar-link">  
                      <BsFillPersonLinesFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Apprenants</p>
                </li>

                <li className="nav-item side">
                  <Link to="/private/privateProfesseur" className="app-sidebar-link">  
                      <BsPersonBoundingBox className='icon'/>
                  </Link>  
                  <p className='textSide ml-5 mr-0'>Professeurs</p>
                </li>
                
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
        {/* /.sidebar */}
       
      </aside>
    </div>
  )
}

export default NavSide