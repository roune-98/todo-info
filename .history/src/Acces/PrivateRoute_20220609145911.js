import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';
const PrivateRoute = ({ component: Component, ...rest }) => {

        const { currentUser } = useContext(UserContext);
    
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