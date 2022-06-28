import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap'
import { UserContext } from '../Outils/UserContext';


const Logout = () => {

    const [error, setError] = useState("")
    const { logout } = useContext(UserContext);
    const history = useNavigate()


    async function handleLogout() {
        setError("")
    
        try {
            await logout()
            history("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div>
            <div className="w-100 text-center mt-2">
                    <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button variant="link" onClick={handleLogout}>
                Log Out
                </Button>
            </div>
        </div>
    )
}

export default Logout