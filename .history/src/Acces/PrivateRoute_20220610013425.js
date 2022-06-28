import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';

const PrivateOutlet = () => {


        const { currentUser } = useContext(UserContext);
        
        return currentUser ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateOutlet