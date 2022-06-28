import React from 'react'
import "./Navside.css"
import logo from "./logo.png";
import { BsFillBookFill, BsFillCalendar2RangeFill, BsFillPersonLinesFill, BsHouseFill, BsPersonBoundingBox } from "react-icons/bs";
import {CgMenuLeft, CgLogOut} from "react-icons/cg";
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
                  <Link to="/admin" className="app-sidebar-link ">  
                      <BsHouseFill className='icon ml-1'/>
                  </Link>  
                  <p className='textSide ml-5'>Dashboards</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsFillCalendar2RangeFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Evenments</p>
                </li>

                <li className="nav-item side">
                  <Link to="/cours" className="app-sidebar-link">  
                      <BsFillBookFill className='icon'/>
                  </Link>  
                  <p className='textSide ml-5'>Cours</p>
                </li>

                <li className="nav-item side">
                  <Link to="/" className="app-sidebar-link">  
                      <BsFillPersonLinesFill className='icon'/>
                  </a>  
                  <p className='textSide ml-5'>Apprenants</p>
                </li>

                <li className="nav-item side">
                  <a href="" className="app-sidebar-link">  
                      <BsPersonBoundingBox className='icon'/>
                  </a>  
                  <p className='textSide ml-5 mr-0'>Professeurs</p>
                </li>
                {/* <li className="nav-item side">
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
                </li> */}
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
        {/* /.sidebar */}
        <div className="modal-footer mb-3">
          <CgLogOut className='icon'/>
          <button type="button" className="btn textSideOver"> Logout</button>
        </div>
      </aside>
    </div>
  )
}

export default NavSide