import React, {useContext} from 'react'
import "./Navside.css"
import { BsFillBookFill, BsFillCalendar2RangeFill, BsFillPersonLinesFill, BsHouseFill, BsPersonBoundingBox } from "react-icons/bs";
import {CgMenuLeft, CgLogOut} from "react-icons/cg";

import "./Navside.css"

import { Link, useNavigate } from 'react-router-dom';
import  Alert  from 'sweetalert';
import { auth } from '../../../firebase-config';

const NavSide = () => {
 
  return (
    <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-5">
          
          <div className="sidebar">
            <nav className="mt-5">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item side">
                  <Link to="/private/privateAdmin" className="app-sidebar-link ">  
                      <BsHouseFill className='icon ml-1'/>
                  </Link>  
                  <p className='textSide ml-5'>Dashboards</p>
                </li>

                <li className="nav-item side">
                  <Link to="/evenement" className="app-sidebar-link">  
                      <BsFillCalendar2RangeFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Evénements</p>
                </li>

                <li className="nav-item side">
                  <Link to="/cours" className="app-sidebar-link">  
                      <BsFillBookFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Cours</p>
                </li>

                <li className="nav-item side">
                  <Link to="/AjoutAppr" className="app-sidebar-link">  
                      <BsFillPersonLinesFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Apprenants</p>
                </li>

                <li className="nav-item side">
                  <Link to="/AjoutProf" className="app-sidebar-link">  
                      <BsPersonBoundingBox className='icon'/>
                  </Link>  
                  <p className='textSide ml-5 mr-0'>Professeurs</p>
                </li>
                 
                
              </ul>
            </nav>
          </div>
         
      </aside>
    </div>
  )
}

export default NavSide