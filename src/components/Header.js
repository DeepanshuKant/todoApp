import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
const Header = () => {
    return (
        <>
            <div className="main__header">
                <div className="header_bar">
                    <h1><Link to="/" >Your Todo.</Link> </h1>
                </div>
            </div>
        </>
    )
}

export default Header