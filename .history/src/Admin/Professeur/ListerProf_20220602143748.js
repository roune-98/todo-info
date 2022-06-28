import React from 'react'
import profil from '../../assets/profil.jpg'

const ListerProf = () => {
    return (
        <>
            <table class="table align-middle mb-0 bg-white mt-5">
                <thead class="bg-light">
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
                            <div class="d-flex align-items-center">
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                class="rounded-circle"
                                />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">John Doe</p>
                                <p class="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Software engineer</p>
                            <p class="text-muted mb-0">IT department</p>
                        </td>
                        {/* <td>
                            <span class="badge badge-success rounded-pill d-inline">Active</span>
                        </td> */}
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                            Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                class="rounded-circle"
                                />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">John Doe</p>
                                <p class="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Software engineer</p>
                            <p class="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                            Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                            <img
                                src={profil}
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                class="rounded-circle"
                                />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">John Doe</p>
                                <p class="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Software engineer</p>
                            <p class="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        {/* <td>Senior</td> */}
                        <td>
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
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