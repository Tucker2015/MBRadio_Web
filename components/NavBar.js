import React, { useState } from "react";
import styles from './navbar.module.css'
import Link from 'next/link'

const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top text-light" style={{ backgroundColor: '#000' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Military Broadcast Radio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )

}
export default NavBar