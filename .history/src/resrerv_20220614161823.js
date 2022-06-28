<div className=' my-5' id='dr'>
<div className='container '>
    <div className='row'>
        {
            usersList.map((cour,index)=>{
                return(


                        <div key={index} className="card tr col-4 ">
                            <Link to="">
                                <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
                            </Link>
                            <div className="card-body "  >
                            
                                <h3 className="mb-1" >{cour.titre}</h3>
                                <p className="mb-1" >{cour.description}</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th> Archive</th>
                                            <th>Update</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 
                                            <button type="button" className="btn1 rounded"> <BiArchiveIn/>  </button> 

                                            </td>
                                            <td>
                                            <button className='btn2 rounded' data-bs-toggle="modal" data-bs-target='#coursModal' onClick={e=>setUser(cour)}><GrDocumentUpdate/></button> 
                                            </td>
                                            <td>
                                            <button className='btn3 rounded' onClick={e=>setUser(user)}><BiMessageAltDetail/></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        
                            </div>
                        </div>
                )
                    }) }
                    {
                         <UpdateCours user={user} /> 
                    }
                    
    </div>
</div>

                

</div>