import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated ? (
            <>
                <img src={user.picture} alt="" />
                <h3>{user.name}</h3>
            </>
        ) : (
            <h1>not logged In</h1>
        )
    )
}

export default UserProfile