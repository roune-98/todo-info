import React from 'react'

import ListeApprenent from '../DashApprenant/Apperenent/ListerApprenent'
import MesProf from '../DashProfesseur/Professeurs/MesProf'




const Dashboard = () => {
    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Un header*/}
                        <div className="row">
                            <div className='col-lg-12'>
                            <CardCour/>
                            </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            
                            <section className="col-lg-5 mr-5 connectedSortable">
                           
                                 <MesProf/>
                                
                            </section>
                            {/* /.Left col */}
                              
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 ms-lg-5 mr-lg-0 connectedSortable ">
                            
                                
                            <ListeApprenent/> 
                                
                        
                            </section>
                      
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div>
    )
}

export default Dashboard