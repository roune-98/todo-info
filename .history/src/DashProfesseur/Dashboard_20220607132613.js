import React from 'react'
import ListeProf from '../Admin/Professeur/ListeProf'
import logo from './logo.png';
import { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import {db} from '../firebase-config'


const Dashboard = () => {
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [tel,setTel] = useState()

    const ajoutContenu = (e)=>{
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        nom,
        prenom,
        tel
        }
        addDoc(collection(db,"professuers"),user)
        // .then(()=>{

        // })
        // .catch(console.log())
    }
    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                <div class="container ">
  
  
  <button type="button" class="rounded" data-bs-toggle="modal" data-bs-target="#myModal" style={{color:"#fff", backgroundColor:"#002639",fontWeight:"bolder",fontSize:"20px"}}>
    Ajouter
  </button>
</div>

{/* <!-- The Modal --> */}

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Un header*/}
                        <div className="row">
                            <div className='col-lg-12'>
                            
	{/* contenu modal */}
                            <Si

        </div>
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <ListeProf/>
                        
                                
                            </section>
                            {/* /.Left col */}
                                
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable vh-100">

                              
                            </section>
                            {/* right col */}
                        
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div>
    )
}

export default Dashboard