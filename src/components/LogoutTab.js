

import React from 'react'
import './Logout.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'


const LogoutTab = () => {


    async function logoutNow() {

        try {
            const response = await axios.get(`http://localhost:4000/api/v1/user/logout`, { withCredentials: true, credentials: 'include' })

            if (response.status === 200) {
                window.localStorage.clear();
                alert('Logged out successfully')
                window.location.href = "/"
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>

            <div id="logout">
                <div className="main__logout">
                    <button onClick={logoutNow} >Logout</button>
                </div>
            </div>
        </>
    )
}

export default LogoutTab