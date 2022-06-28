import React from 'react'
 //import rCouril from '../ail,../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '';

const ListerCour = () => {
    const [user,setUser] = useState(null)
     const [usersList,setUserList] = useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,"cours"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
 
    return (
        <div className='container' id='dr'>
           
                             <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Titre</th>
                                    <th>Description</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((user,index)=>{
                                        return(
                                           
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{user.titre}</p>
                                             
                                        </td>
                                        <td>
                                        <p className="mb-1" style={{color:"#07090b"}}>{user.description}</p>
                                            
                                        </td>
                                        
                                      
                                       
                                      
                                        {/* <td>
                                        <button 
                                             style={{
                                                backgroundColor:"red", 
                                                color:"#fff",
                                                fontSize:"16px",
                                                fontWeight:"bolder"
                                            }}
                                        className='btn btn-danger col' 
                                        onClick={e=> deleteUser(user.id)}><MdDelete/></button>
                                        </td> */}
                                       
                                    </tr>
                              
                                    )
                                
                                }) };
                                {/* {

                                    user && <Update user={user} />
                                }        */}
                                </tbody>
                            </table>
                 
            
        </div>
    )
}

export default ListerCour;
