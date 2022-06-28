import React from 'react'
import '../../Outils/liste.css'
import '../Cours/CardCours.css'
import {useEffect, useState} from "react"
import {collection, doc, onSnapshot, setDoc} from "firebase/firestore"
import {db} from "../../firebase-config";
import { BiArchiveIn } from 'react-icons/bi'
import {GrDocumentUpdate} from 'react-icons/gr'


const Archive =() => {
	const  [user,setUser] = useState({titre:"",description:"", categorie:"", niveau:""})
     const [usersArchive,setUserArchive] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"cours"),
        (snapshot)=>{
            setUserArchive(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])

	const Decharchive = (cour)=>{
        cour.archive = false;
        setDoc(doc(db,"cours",cour.id),cour)
    }
	return (
        <div className='container'>
           
           <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead >
                                    <tr>
                                    <th>Titre</th>
                                    <th>Categorie</th>
                                    <th>Niveau</th>
                                    <th>Description</th>
                                    <th>update</th>
                                    <th>Archive</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersArchive.map((cour,index)=>{
										if(cour.archive === true){
											return(
                                           
												<tr key={index}>
													<td>
			
													<p className="mb-1 p1" >{cour.titre}</p>
													   
													</td>
													<td>
			
													<p className="mb-1 p2" style={{color:"#07090b"}}>{cour.categorie}</p>
													   
													</td>
													<td>
			
													<p className="mb-1 p2" style={{color:"#07090b"}}>{cour.niveau}</p>
													   
													</td>
													<td>
													<p className="mb-1 p2" style={{color:"#07090b"}}>{cour.description}</p>
														
													</td>
												   
												   
													<td>
														
													   
													   <button className='btn3  col rounded' data-bs-toggle="modal" data-bs-target="#coursModal"onClick={e=> setUser(user)} ><GrDocumentUpdate/></button>
													</td>
													<td>
														<button 
															type="button"
															className="btn1 rounded" 
															
															onClick={e=>Decharchive(cour)}
														>
															<BiArchiveIn />
														</button>
													</td> 
												   
												</tr>
										  
												)

										}
                                        
                                       
                                        
                                       
                                
                                }) }
                                
                                </tbody>
                            </table>
            
        </div>
    )
}

export default Archive