import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';
const PrivateRoute = ({ component: Component, ...rest }) => {

        const { unsubscribe } = useContext(UserContext);
        const Redirect = useNavigate();
        return (
            <Routes>
                <Route
                    {...rest}
                    render={props => {
                    return unsubscribe ? <Component {...props} /> : <Redirect to="/login" />
                    }}
                >

                </Route>
            </Routes>
            
        )
}


export default PrivateRoute