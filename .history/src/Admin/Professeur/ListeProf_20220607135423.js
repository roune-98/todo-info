import React from 'react'
 //import profil from '../../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListeProf = () => {
    const [user,setUser] = useState(null)
     const [usersList,setUserList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"professeurs"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
    return (
        <div className='container'>
           
                             <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Noms</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Actions</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((user,index)=>{
                                        return(
                                            <div key={index}>
                                    <tr>
                                        <td>
                                            {/* <div className="d-flex align-items-center">
                                            {/* <img
                                                src={profil}
                                                alt=""
                                                style={{width: "45px", height: "45px"}}
                                                className="rounded-circle"
                                                /> */} */}
                                            <div className="ms-3">
                                                <p className="mb-1" style={{color:"#07090b"}}>{user.prenom}</p>
                                                
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-1" style={{color:"#07090b"}}>{user.nom}</p>
                                        </td>
                                        <td>
                                            <p className="mb-1" style={{color:"#07090b"}}>{user.tel}</p>
                                        </td>
                                        {/* <td>
                                            <button 
                                                    type="button"
                                                    className="btn" 
                                                    style={{
                                                        backgroundColor:"#B4042C", 
                                                        color:"#fff",
                                                        fontSize:"16px",
                                                        fontWeight:"bolder"
                                                    }}
                                                >
                                                    Détails
                                                </button>                       
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn" 
                                                style={{
                                                    backgroundColor:"#900c3f", 
                                                    color:"#fff",
                                                    fontSize:"16px",
                                                    fontWeight:"bolder"
                                                }}
                                            >
                                                Modifier
                                            </button>
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn" 
                                                style={{
                                                    backgroundColor:"#591945", 
                                                    color:"#fff",
                                                    fontSize:"16px",
                                                    fontWeight:"bolder"
                                                }}
                                            >
                                                Archiver
                                            </button>
                                        </td> */}
                                    </tr>
                              </div>
                                    )
                                
                                }) };
                                </tbody>
                            </table>
                 
            
        </div>
    )
}

export default ListeProf;