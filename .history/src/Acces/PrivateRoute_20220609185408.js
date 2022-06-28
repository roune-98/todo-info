import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

        const { currentUser } = useContext(UserContext);

        const Redirect = useNavigate();
        
        return (
            <Route
                {...rest}
                render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
                }}
            >

            </Route>
            
        )
}


export default PrivateRoute