import React from 'react'
import ListeProf from '../Admin/Professeur/ListeProf'
import logo from './logo.png';

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
  <h3>Vertically Centered Modal Example</h3>
  <p>Click on the button to open the modal.</p>
  
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>

{/* <!-- The Modal --> */}
<div class="modal mt-5" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content w-100">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
        {/* <h4 class="modal-title">Modal Heading</h4> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

 
      <div class="modal-body">
      <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        
          
            <div className="row justify-content-center">
				      {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1 ">
                <img src={logo} alt="logo" className="img-fluid " />
              </div> */}
              <div className="col-md-10   order-2 order-lg-2">

                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p>

                <form className=" mt-7 w-100">

                  <div className="d-flex flex-row align-items-center mb-2">
                    
                    <div className="form-outline flex-fill mb-2 ">
                      <input type="text" id="nom" name='nom'
                             className="form-control" placeholder='votre Nom :'
                              style={{borderRadius:"10px"}}/>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    {/*formulaire prénom*/}
                    <div className="form-outline flex-fill mb-3">
                      <input type="text" id="prenom"
                             name="prenom" className="form-control" 
                             placeholder=' votre Prénom :'style={{borderRadius:"10px"}}
                       />
                    </div>
                  </div>
				          <div className="d-flex flex-row align-items-center mb-2">
                    {/*formulaire téléphone*/} 
                    <div className="form-outline flex-fill mb-3">
                      <input type="text" id="telephone"
                             className="form-control" placeholder='votre Téléphone :'
                             style={{borderRadius:"10px"}}
                        />
                     
                    </div>
                  </div>
				          <div className="d-flex flex-row align-items-center mb-2">
                    {/*formulaire email*/}
                    <div className="form-outline flex-fill mb-3">
                      <input type="email" 
                             id="email"
                             name='email' 
                             className="form-control" 
                             placeholder='votre E-mail :'style={{borderRadius:"10px"}}
                      />
                     
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    {/*mot passe*/}
                     <div className="form-outline flex-fill mb-3">
                        <input type="password" 
                              id="pass"
                              name='pass' 
                              className="form-control" 
                              placeholder='votre Mot passe :' 
                              style={{borderRadius:"10px"}} 
                          />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    {/*confirmer mot passe*/}
                    <div className="form-outline flex-fill mb-3">
                      <input type="password" id="sw"
                              name='psw'
                              className="form-control" 
                              placeholder='confirmer Mot passe :' 
                              style={{borderRadius:"10px"}}
                        />
                      
                    </div>
                  </div>

                

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
                    </div>

                </form>

              </div>
              
            </div>
          
        
      </div>
    </div>
  </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
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
                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeProf/>
                        
                                
                            </section>
                            {/* /.Left col */}
                                
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable vh-100">

                              
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