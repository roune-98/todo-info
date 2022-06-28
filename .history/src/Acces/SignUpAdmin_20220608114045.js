import React from 'react'

const SignUpAdmin = () => {
    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <form className=" mt-7 w-100" >

                        <div className="d-flex flex-row align-items-center mb-2" >
                        
                        <div className="form-outline flex-fill mb-2 ">
                            <input type="text" id="nom" name='nom'
                                className="form-control" placeholder='votre Nom :'
                                style={{borderRadius:"10px"}}
                                />
                            
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



                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpAdmin