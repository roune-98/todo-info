import React from 'react'
 import CardsMultiple from './CardsMultiple'
 import EventCalendar from "../Acces/EventCalendar"




// const Dashboard = () => {
 return (
    <div className='conatiner-fluid'>
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
                    <div className="float-xxl-end">
                        {/* Left col */}
                        
                            {/* Custom tabs (Charts with tabs)*/}
                            <ListeApprenent/>
                    
                            
                        
                        {/* /.Left col */}
                            
                        {/* right col (We are only adding the ID to make the widgets sortable)*/}
                        <section className="col-lg-0 connectedSortable vh-100">

                          
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
}

// export default Dashboard

//
//     return (
//         <div>
//             <div className="content-wrapper">
//                 {/* Content Header (Page header) */}
//                 <div className="content-header">
//                     <div className="container-fluid">
//                         <div className="row mb-2">
//                         <div className="col-sm-6">
//                             <h1 className="m-0 text-dark">Dashboard</h1>
//                         </div>{/* /.col */}
//                         <div className="col-sm-6">
//                             <ol className="breadcrumb float-sm-right">
//                             <li className="breadcrumb-item"><a href="#">Home</a></li>
//                             <li className="breadcrumb-item active">Administrateur</li>
//                             </ol>
//                         </div>{/* /.col */}
//                         </div>{/* /.row */}
//                     </div>{/* /.container-fluid */}
//                 </div>
//                 {/* /.content-header */}

//                 {/* Main content */}
//                 <section className="container">
//                     <div className="container-fluid">
//                         {/* Un header*/}
//                         <div className="row">
//                             <div className='col-lg-12'>
//                             <CardsMultiple/>
//                             </div>
//                         </div>
//                         {/* /.row */}

//                         {/* Main row */}
//                         <div className="row">
//                             {/* Left col */}
                            
//                             <section className="col-lg-12 mr-5 my-5 connectedSortable">
                           
//                                 <EventCalendar/>
                                
//                             </section>

//                             </div>
//                             {/* /.Left col */}
                              
//                             {/* right col (We are only adding the ID to make the widgets sortable)*/}
//                             <section className="col-lg-5 ms-lg-5 mr-lg-0 connectedSortable ">
                            
                                
                            
                                
                        
//                             </section>
                      
                        
//                         {/* /.row (main row) */}
//                     </div>{/* /.container-fluid */}
//                 </section>
//                 {/* /.content */}
//             </div>
//         </div>
//     )
// 