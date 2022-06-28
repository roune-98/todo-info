import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';
import useAuth from './Auth';

const PrivateOutlet = () => {


        const auth = useAuth();
        
        return auth ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateOutlet