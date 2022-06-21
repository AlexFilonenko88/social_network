import React from "react";
import N from './Navbar.module.css';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return <nav className={N.nav}>
    <div className={N.item}>
      <NavLink to='/profile' className={navData=>navData.isActive ? N.active : N.item}>Profile</NavLink>
    </div>
    <div className={N.item}>
      <NavLink to='/dialogs' className={navData=>navData.isActive ? N.active : N.item}>Messages</NavLink>
    </div>
    <div className={N.item}>
      <NavLink to='/news' className={navData=>navData.isActive ? N.active : N.item}>News</NavLink>
    </div>
    <div className={N.item}>
      <NavLink to='/music' className={navData=>navData.isActive ? N.active : N.item}>Music</NavLink>
    </div>
    <div className={N.item}>
      <NavLink to='/settings' className={navData=>navData.isActive ? N.active : N.item}>Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;