import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';

const PrivateRoute = () => {

        const { currentUser } = useContext(UserContext);

        const Navigate = useNavigate();
        
        return currentUser ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateRoute