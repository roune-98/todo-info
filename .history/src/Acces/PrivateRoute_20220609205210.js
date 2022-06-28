import React, { useContext } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';

const PrivateRoute = () => {

        const { unsubscribe } = useContext(UserContext);

        const Navigate = useNavigate();
        
        return unsubscribe ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateRoute