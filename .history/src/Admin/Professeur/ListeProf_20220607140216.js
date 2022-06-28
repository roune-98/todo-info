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
           
                             {/* <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Noms</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Actions</th>
                                    
                                    </tr>
                                </thead>
                                <tbody> */}
                                {
                                    usersList.map((user,index)=>{
                                        return(
                                            <div  className='row my-3 bg-dark text-white rounded' key={index}>
                            <p className='col-5'> {user.nom} </p>
                            <p className='col-5'> {user.prenom} </p>
                            <p className='col-5'> {user.phone} </p>
                              </div>
                                    )
                                
                                }) };
                                {/* </tbody>
                            </table> */}
                 
            
        </div>
    )
}

export default ListeProf;