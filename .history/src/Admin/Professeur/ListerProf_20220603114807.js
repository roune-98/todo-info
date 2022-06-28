import React from 'react'
import profil from '../../assets/profil.jpg'

const ListerProf = () => {
    return (
        <>
            <table className="table align-middle mb-0 bg-white mt-5 mx-2 m-lg-1">
                <thead className="bg-light">
                    <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Telephone</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''>
                        <td className=''>
                            <div className="d-flex align-items-center">
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className="fw-normal mb-1">John Doe</p>
                                
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                           
                        </td>
                        <td>
                            7777777
                        </td>
                        {/* <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td> */}
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" className="btn bg-success text-white btn-link btn-sm btn-rounded mx-2 fw-bold mb-1">
                            Modifier
                            </button>
                            <button type="button" className="btn bg-danger text-white btn-link mx-2 btn-sm btn-rounded fw-bold mb-1">
                            Supprimer
                            </button>
                            <button type="button" className="btn bg-warning text-white btn-link btn-sm rounded mx-2 fw-bold mb-1">
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
                               
                                <p className="fw-normal mb-1">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            
                        </td>
                        <td className="fw-normal mb-1">
                            7777777
                        </td>
                        {/* <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td> */}
                        {/* <td>Senior</td> */}
                        <td>
                        <button type="button" className="btn bg-success text-white btn-link btn-sm btn-rounded mx-2 fw-bold mb-1">
                            Modifier
                            </button>
                            <button type="button" className="btn bg-danger text-white btn-link mx-2 btn-sm btn-rounded fw-bold mb-1">
                            Supprimer
                            </button>
                            <button type="button" className="btn bg-warning text-white btn-link btn-sm rounded mx-2 fw-bold mb-1">
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
                                <p className="fw-normal mb-1">John Doe</p>
                                
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            
                        </td>
                        <td>
                            7777777
                        </td>
                        {/* <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td> */}
                        {/* <td>Senior</td> */}
                        <td>
                        <button type="button" className="btn bg-success text-white btn-link btn-sm btn-rounded mx-2 fw-bold mb-1">
                            Modifier
                            </button>
                            <button type="button" className="btn bg-danger text-white btn-link mx-2 btn-sm btn-rounded fw-bold mb-1">
                            Supprimer
                            </button>
                            <button type="button" className="btn bg-warning text-white btn-link btn-sm rounded mx-2 fw-bold mb-1">
                            Archiver
                            </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}

export default ListerProf;