import React from 'react'

import Professeurs from '.'





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
                <div class="container ">
  
  
</div>

{/* <!-- The Modal --> */}

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Un header*/}
                        <div className="row">
                            <div className='col-lg-12'>
                            
	{/* contenu modal */}
                           

        </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-8 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <Professeurs/>
                        
                                
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