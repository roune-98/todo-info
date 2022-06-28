import React from 'react'
import './SideBar.css'
import { CgAlbum, CgReadme, CgCalendarDates, CgProfile } from "react-icons/cg";
import { HiAcademicCap } from "react-icons/hi";

const SideBar = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="page-content vh-100">  
                            <div className='side active'>
                                <a href="" className="app-sidebar-link ">  
                                    <CgAlbum className='icon'/>
                                </a>  
                                <p className='textSide mt-4 ml-5'>Dashboards</p>
                            </div>
                            <div className='side'>
                                <a href="" className="app-sidebar-link">  
                                    <CgReadme className='icon'/>
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
                                    <CgProfile className='icon'/>
                                </a>  
                                <p className='textSide mt-4 mr-0'>Teachers</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7 text-white ">
                        ing elit. Saepe, laboriosam molestiae. Fugiat id minima beatae adipisci deleniti eum voluptatem animi, quae ducimus veniam. Dolor eveniet quisquam, laudantium amet repudiandae minus!
                        <h1 className="display-5 text-warning">Notre Contenu Crud</h1>
                    </div>
                    <div className="col-lg-3 ">
                        <h1 className='text-danger display-5'>Liste Professeur</h1>

                        <h2 className='text-danger display-4'>List Apprenant</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar