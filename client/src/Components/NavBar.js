import React, { useEffect } from 'react'
import Login from './Login'
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'


function NavBar() {
    const admin = useSelector ((state) => state.admin.value)
  return (
    <div className='navBar'>
        <NavLink className="navLinks" to="/welcome">
            Welcome/Tutorial
        </NavLink>
        <NavLink className="navLinks" to="/submit">
            Submit for a tile
        </NavLink>
        <NavLink className="navLinks" to="/boards">
            Boards
        </NavLink>
        {admin.username!==""?
        <NavLink className="navLinks" to="/admin">
            Admin
        </NavLink>
        :null}

        {admin.username?<p className="loginContainer">Welcome, {admin.username}.</p>:<Login/>}
    </div>
  )
}

export default NavBar