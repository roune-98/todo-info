import React from 'react'
import profil from '../../assets/profil.jpg'

const ListeApp = () => {
    return (
        <div className='container'>
            <table className="table align-middle mb-0 bg-white  mr-3 mx-3 ">
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
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
                                        backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#002639", 
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
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
                                        backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#002639", 
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Aicha</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className=" mb-1" style={{color:"#07090b"}}>Ba</p>
                        </td>
                        <td>
                            <button 
                                    type="button"
                                    className="btn" 
                                    style={{
                                        backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                    boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)",  
                                    borderRadius: "10px",
                                    backgroundColor:"#002639", 
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Christ</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="mb-1" style={{color:"#07090b"}}>Corona</p>
                        </td>
                        <td>
                            <button 
                                type="button"
                                className="btn" 
                                style={{
                                    backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                backgroundColor:"#002639", 
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Adam</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="mb-1" style={{color:"#07090b"}}>Diallo</p>
                        </td>
                        <td>
                            <button 
                                type="button"
                                className="btn" 
                                style={{
                                    backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                backgroundColor:"#002639", 
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Fatou</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="mb-1" style={{color:"#07090b"}}>Fall</p>
                        </td>
                        <td>
                            <button 
                                type="button"
                                className="btn" 
                                style={{
                                    backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                backgroundColor:"#002639", 
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
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className=" mb-1" style={{color:"#07090b"}}>Jean Jack</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="mb-1" style={{color:"#07090b"}}>Faye</p>
                        </td>
                        <td>
                            <button 
                                type="button"
                                className="btn" 
                                style={{
                                    backgroundColor:"#EC5251", 
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
                                    backgroundColor:"#EC5251", 
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
                                backgroundColor:"#002639", 
                                color:"#fff",
                                fontSize:"16px",
                                fontWeight:"bolder"
                            }}
                        >
                            Archiver
                        </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default ListeApp;