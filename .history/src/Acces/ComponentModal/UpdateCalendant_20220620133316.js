import { useState,useEffect } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const UpdateAprend = (props) => {
    
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [tel,setTel] = useState()
    const [mail, setMail] = useState()

    useEffect(()=>{
        setNom(props.user.nom)
        setPrenom(props.user.prenom)
        setTel(props.user.tel)
        setMail(props.user.mail)
    },[props])
    const UpdateCalendat = (e)=>{
        // pour empecher que la page se raffrechie automatiquement
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        nom,
        prenom,
        tel,
        mail,
        archivage: false
        }
        
        setDoc(doc(db,"Apprenents",props.user.id),user)
    }
    return(
        <>
        </>
    )
}

export