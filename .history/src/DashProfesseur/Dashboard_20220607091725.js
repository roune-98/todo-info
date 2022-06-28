import React from 'react'
import ListeProf from '../Admin/Professeur/ListeProf'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div classnameName="content-wrapper">
                {/* Content Header (Page header) */}
                <div classnameName="content-header">
                    <div classnameName="container-fluid">
                        <div classnameName="row mb-2">
                        <div classnameName="col-sm-6">
                            <h1 classnameName="m-0 text-dark">Dashboard</h1>
                        </div>{/* /.col */}
                        <div classnameName="col-sm-6">
                            <ol classnameName="breadcrumb float-sm-right">
                            <li classnameName="breadcrumb-item"><a href="#">Home</a></li>
                            <li classnameName="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <section classnameName="content">
                    <div classnameName="container-fluid">
                        {/* Un header*/}
                        <div classnameName="row">
                            <div classnameName='col-lg-12'>
                            
	{/* contenu modal */}
   

        </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div classnameName="row">
                            {/* Left col */}
                            <section classnameName="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeProf/>
                        
                                
                            </section>
                            {/* /.Left col */}
                                
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section classnameName="col-lg-5 connectedSortable vh-100">
                                
                            <div classname="container mt-3">
  <h3>Small Modal Example</h3>
  <p>Click on the button to open the modal.</p>
  
  <button type="button" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>

{/* <!-- The Modal --> */}
<div classname="modal" id="myModal">
  <div classname="modal-dialog modal-sm">
    <div classname="modal-content">

       {/* Modal Header  */}
      <div classname="modal-header">
        <h4 classname="modal-title">Modal Heading</h4>
        <button type="button" classname="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div classname="modal-body">
        {/* Modal body.. */}
      </div>

      {/* modal footer */}
      <div classname="modal-footer">
        <button type="button" classname="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
                              
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