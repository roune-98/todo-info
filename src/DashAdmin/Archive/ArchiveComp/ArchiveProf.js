import React from 'react'
import {useEffect, useState} from "react"
import {collection, doc, onSnapshot, setDoc} from "firebase/firestore";
import {db}from "../../../firebase-config";
import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
import swal from "sweetalert"


const ArchiveProf = () => {
	const [user, setUser]= useState({nom:"",prenom:"",tel:"", mail:""})
	const [usersArchived, setUserArchived] = useState([])
	useEffect(()=>{
        onSnapshot(collection(db,"professeurs"),
        (snapshot)=>{
            setUserArchived(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                // console.log("gggggggggggggggggggguser", user);
                return user
            }))
        })
        
    },[])
	const unArchivedProf = (prof)=>{
        prof.archived = false;
        setDoc(doc(db,"professeurs",prof.id),prof)
        swal(" 1 Professeur Desarchivé!", "Clique sur OK", "success");
    }
	return (
        <div className='container'>
             <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Nom</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Detail</th>
                                    <th>Desarchivée</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersArchived.map((prof,index)=>{
                                       if(prof.archived === true){
                                            return(
                                          
                                              
                                                <tr key={index}>
                                                    <td>
            
                                                    <p className="mb-1" style={{color:"#07090b"}}>{prof.nom}</p>
                                                         
                                                    </td>
                                                    <td>
                                                    <p className="mb-1" style={{color:"#07090b"}}>{prof.prenom}</p>
                                                        
                                                    </td>
                                                    <td>
                                                        <p className="mb-1" style={{color:"#07090b"}}>{prof.tel}</p>
                                                    </td>
                                                    <td>
                                                        <p className="mb-1" style={{color:"#07090b"}}>{prof.mail}</p>
                                                    </td>
                                                    <td>
                                                        <button 
                                                                type="button"
                                                                className="btn" 
                                                                style={{
                                                                    backgroundColor:"#B4042C", 
                                                                    color:"#fff",
                                                                    fontSize:"16px",
                                                                    fontWeight:"bolder",
                                                                    width:'60px'
                                                                }}
                                                            >
                                                               <BiMessageAltDetail/>
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
                                                                fontWeight:"bolder",
                                                                width:'60px'
                                                            }}
                                                            onClick={e=>unArchivedProf(prof)}
                                                        >
                                                            <BiArchiveIn />
                                                        </button>
                                                                 
                                                       
                                                    
                                                 
                                                    </td>
                                                    
                                                </tr>                       
                                            )
                                       }

                                       
                            })}
                    </tbody>
            </table>
        </div>
    )
}

export default ArchiveProf