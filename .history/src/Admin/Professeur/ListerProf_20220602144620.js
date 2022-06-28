import React from 'react'
import profil from '../../assets/profil.jpg'

const ListerProf = () => {
    return (
        <>
            <table className="table align-middle mb-0 bg-white mt-5">
                <thead className="bg-light">
                    <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Telephone</th>
                    <th>Actions</th>
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
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            7777777
                        </td>
                        {/* <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td> */}
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" className="btn bg-success text-white btn-link btn-sm btn-rounded">
                            Modifier
                            </button>
                            <button type="button" className="btn bg-danger text-white btn-link btn-sm btn-rounded">
                            Supprimer
                            </button>
                            <button type="button" className="btn bg-warning btn-link btn-sm btn-rounded">
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
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                            Edit
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
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                            Edit
                            </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}

export default ListerProf;