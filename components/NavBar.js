import React, { useState } from "react";
import styles from './navbar.module.css'
import Link from 'next/link'

const NavBar = () => {

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper #000000 black sticky">
          <Link href="/">
            <a className="brand-logo left">MBR</a></Link>

          <ul id="nav-mobile" className="right">
            <li className={styles.mobilelinks}><Link href="/posts/team"><a>Team</a></Link></li>
            <li className={styles.mobilelinks}><Link href="/posts/team"><a>Live Video</a></Link></li>
            <li className={styles.mobilelinks}><Link href="/posts/team"><a>Resources</a></Link></li>
          </ul>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  )

}
export default NavBar