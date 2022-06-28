import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';

const PrivateRoute = ({ component: Comp, ...rest }) => {

        const { currentUser } = useContext(UserContext);

        const Redirect = useNavigate();

        return (
            <Routes>
                <Route
                    {...rest}
                    render={props => {
                    return currentUser ? <Comp {...props} /> : <Redirect to="/login" />
                    }}
                >

                </Route>
            </Routes>
            
        )
}


export default PrivateRoute