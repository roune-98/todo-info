import React from 'react'
import ListeProf from '../Admin/Professeur/ListeProf'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div claName="content-wrapper">
                {/* Content Header (Page header) */}
                <div claName="content-header">
                    <div claName="container-fluid">
                        <div claName="row mb-2">
                        <div claName="col-sm-6">
                            <h1 claName="m-0 text-dark">Dashboard</h1>
                        </div>{/* /.col */}
                        <div claName="col-sm-6">
                            <ol claName="breadcrumb float-sm-right">
                            <li claName="breadcrumb-item"><a href="#">Home</a></li>
                            <li claName="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <section claName="content">
                    <div claName="container-fluid">
                        {/* Un header*/}
                        <div claName="row">
                            <div claName='col-lg-12'>
                            
	{/* contenu modal */}
   

        </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div claName="row">
                            {/* Left col */}
                            <section claName="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeProf/>
                        
                                
                            </section>
                            {/* /.Left col */}
                                
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section claName="col-lg-5 connectedSortable vh-100">
                                
                            <div cla="container mt-3">
  <h3>Small Modal Example</h3>
  <p>Click on the button to open the modal.</p>
  
  <button type="button" cla="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>

{/* <!-- The Modal --> */}
<div cla="modal" id="myModal">
  <div cla="modal-dialog modal-sm">
    <div cla="modal-content">

       {/* Modal Header  */}
      <div cla="modal-header">
        <h4 cla="modal-title">Modal Heading</h4>
        <button type="button" cla="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div cla="modal-body">
        {/* Modal body.. */}
      </div>

      {/* modal footer */}
      <div cla="modal-footer">
        <button type="button" cla="btn btn-danger" data-bs-dismiss="modal">Close</button>
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