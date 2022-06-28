import React from 'react'
import ListeApprenent from '../DashAdmin/Apprenent/ListerApprenent'
import CardCour from '../DashApprenant/Apperenent/CourApp/Components/CardCour'
import Cour from './Cours/Cour'
import ListeProf from './Professeur/ListeProf'

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
                            <div className='col-lg-10'>
                            <CardCour/>
                            </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-6 connectedSortable">
                                <button style={{color:"#fff", backgroundColor:"#002639"}} className='it'></button>
                                 <ListeProf/>
                                
                            </section>
                            {/* /.Left col */}
                         </div>
                         <div className="row">       
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-6 connectedSortable ">
                                
                            <ListeApprenent/> 
                                
                        
                            </section>
                            {/* right col */}
                        <div/>
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