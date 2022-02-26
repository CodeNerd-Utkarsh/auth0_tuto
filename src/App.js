import React from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import UserProfile from './components/UserProfile'

const App = () => {
    return (
        <div>
            <Login />
            <Logout />
            <UserProfile />
        </div>
    )
}

export default App