import React from 'react'
import CardsMultiple from './CardsMultiple'
import EventCalendar from "../Acces/EventCalendar"




const Dashboard = () => {
    return (
        <div className=''>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Administrateur</li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}



                {/* Main content */}
                <section className="">
                    <div className="container-fluid">
                    {/* /.row */}
                        <div className="row">
                            <div className='col-lg-12'>
                                <CardsMultiple/>
                            </div>
                        </div>
                    {/* /.row */}
                    {/* Main row */}
                        <div className="row">
                            {/* content col */}
                            <div className="col-lg-12 connectedSortable">
                                <EventCalendar/>
                            </div>
                            {/* /.content col */}
                            
                        </div>
                    {/* /.row (main row) */}
                    </div>
                    {/* /.container-fluid */}
                </section>



            </div>
        </div>
    )
}

export default Dashboard