import React from "react";
import N from './Navbar.module.css';

const Navbar = () => {
    return <nav className={N.nav}>
    <div className={N.item}>
      <a href='#'>Profile</a>
    </div>
    <div className={N.item}>
      <a href='#'>Messages</a>
    </div>
    <div className={N.item}>
      <a href='#'>News</a>
    </div>
    <div className={N.item}>
      <a href='#'>Music</a>
    </div>
    <div className={N.item}>
      <a href='#'>Settings</a>
    </div>
  </nav>
}

export default Navbar;