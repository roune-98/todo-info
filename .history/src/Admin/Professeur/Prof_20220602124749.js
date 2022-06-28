import React from 'react'
import '../../SideBar/SideBar.'
import { CgAlbum, CgCalendarDates } from "react-icons/cg";
import { HiAcademicCap, HiBookOpen, HiUser, HiOutlineHome } from "react-icons/hi";
import Tableau from '../Outils/Tableau';
import Card from '../Outils/Card';
import AjoutExemple from '../Outils/AjoutExemple';

const SideBar = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="page-content vh-100">  
                            
                            <div className='side active'>
                                <a href="" className="app-sidebar-link ">  
                                    <HiOutlineHome className='icon'/>
                                </a>  
                                <p className='textSide mt-4 ml-5'>Dashboards</p>
                            </div>
                            <div className='side'>
                                <a href="" className="app-sidebar-link">  
                                    <HiBookOpen className='icon'/>
                                </a>  
                                <p className='textSide mt-4 ml-5'>Courses</p>
                            </div>
                            <div className='side'>
                                <a href="" className="app-sidebar-link">  
                                    <CgCalendarDates className='icon'/>
                                </a>  
                                <p className='textSide mt-4 ml-5'>Evenments</p>
                            </div>
                            <div className='side'> 
                                <a href="" className="app-sidebar-link">  
                                    <HiAcademicCap className='icon'/>
                                </a>  
                                <p className='textSide mt-4 ml-5'>Apprenants</p>
                            </div>
                            <div className='side'> 
                                <a href="" className="app-sidebar-link">  
                                    <HiUser className='icon'/>
                                </a>  
                                <p className='textSide mt-4 mr-0'>Teachers</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col col-lg-9 ">
                        <AjoutExemple />
                        <br />
                        <Card />
                        <Tableau />
                    </div>
                    {/* <div className="col-lg-3 ">
                        <h1 className='text-danger display-5'>Liste Professeur</h1>

                        <h2 className='text-danger display-4'>List Apprenant</h2>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SideBar