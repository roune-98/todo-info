import React from 'react'
import ListeProf from '../Admin/Professeur/ListeProf'

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
                            
	<ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link  " to="/inscrire" style={{
                  backgroundColor:"#07090B",
                  color:"#fff",
                  borderRadius:"10px",
                  width:"150px",
                  padding:"10px",
                  margin : "10px"
                  
              }}>S'inscrire</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="login" style={{
                  backgroundColor:"#07090B",
                  color:"#fff",
                  borderRadius:"10px",
                  width:"150px",
                  padding:"10px",
                  margin : "10px"
              }}>Se connécté</Link>
              </li>
              
            </ul>
    
                            </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeProf/>
                        
                                
                            </section>
                            {/* /.Left col */}
                                
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable vh-100">
                                
                            <h4 className='display-3'>Contenu Droite</h4>
                              
                            </section>
                            {/* right col */}
                        
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