import React from 'react'
import ListeApprenent from '../ListerApprenent'
import logo from './logo.png';

// import SignUpAp from '../Admin/Apprenent/SignUpAp';


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
                       
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-12 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeApprenent/>
                        
                                
                            </section>
                            {/* /.Left col */}
                           
                        
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