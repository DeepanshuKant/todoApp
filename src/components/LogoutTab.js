

import React from 'react'
import './Logout.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const LogoutTab = () => {

    const userReducer = useSelector((store) => store.userReducer)

    async function logoutNow() {

        try {
            const response = await axios.get(`https://todo-appbackend.herokuapp.com/api/v1/user/logout`, { withCredentials: true, credentials: 'include' })

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
                    <div className="user__name">Hey! {userReducer.user.user.name}</div>
                    <button onClick={logoutNow} >Logout</button>
                </div>
            </div>
        </>
    )
}

export default LogoutTab