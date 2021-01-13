import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">JOTDOWN</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Jot</Link></li>
                <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
            </ul>
        </header>
    )
}