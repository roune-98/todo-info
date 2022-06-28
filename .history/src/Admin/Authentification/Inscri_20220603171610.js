import React from 'react';
import logo from "./logo.png";


function Inscri() {
  return (
	<>
		<section className="vh-100" style={{backgroundColor:"#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        
          
            <div className="row justify-content-center">
				      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1 bg-black w " >
                <img src={logo} alt="logo" className="img-fluid " />
              </div>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">

                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-2">
                    
                    <div className="form-outline flex-fill mb-3">
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
</section>

	</>
  )
}

export default Inscri