import React from 'react'
<<<<<<< HEAD
import ListeApprenent from '../DashAdmin/Apprenent/ListerApprenent'
import logo from './logo.png';

import SignUpAp from '../DashAdmin/Apprenent/SignUpAp';

=======
import ListeApp from "../Admin/Apprenent/ListerApprenent"
import AjouteApprenant from "../Admin/Apprenent/AjouterApprenent"
import CardsMultiple from './Cards2/CardsMultiple'
>>>>>>> 7f4890dfea2df72243cce632c8ceea81577eb825

const Dashboard = () => {
 
    return (
        <div>
            <div className="content-wrapper">
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
                        <div className="row">
                            <div className='col-lg-12'>
                            
	{/* contenu modal */}
                            <SignUpAp/>

        </div>
                        </div>
                        <div className="row">
<<<<<<< HEAD
                            {/* Left col */}
                            <section className="col-lg-12 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeApprenent/>
                        
                                
                            </section>
                            {/* /.Left col */}
                                
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-0 connectedSortable vh-100">

                              
=======
                             <section className="col-lg-4 connectedSortable my-5 p-3">
                                <div className='display-3'><AjouteApprenant/></div>
                            </section>
                            <section className="col-lg-8 connectedSortable">
                                <div className=''><ListeApp/></div>
>>>>>>> 7f4890dfea2df72243cce632c8ceea81577eb825
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard