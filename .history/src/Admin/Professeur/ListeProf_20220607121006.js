import React from 'react'
 //import profil from '../../'
 import{useEffect, useState}

const ListeProf = () => {
    const [user,setUser] = useState(null)
    const [usersList,setUserList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"users"),
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
                    <th>Prénoms</th>
                    <th>Noms</th>
                    <th></th>
                    <th>Actions</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            {/* <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                /> */}
                            <div className="ms-3">
                                <p className="mb-1" style={{color:"#07090b"}}>Awa</p>
                                
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="mb-1" style={{color:"#07090b"}}>Aw</p>
                        </td>
                        <td>
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
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            {/* <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                /> */}
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Mouhamed</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="mb-1" style={{color:"#07090b"}}>Ba</p>
                        </td>
                        <td>
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
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            {/* <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                /> */}
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Aicha</p>
                            </div>
                            </div>
                        </td>
                       
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default ListeProf;