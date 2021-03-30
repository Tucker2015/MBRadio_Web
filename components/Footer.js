import React, { useState } from "react";
import styles from './navbar.module.css'
import Link from 'next/link'

const Footer = () => {

    return (
        <div className={styles.footerSticky}>
            <footer className="page-footer #000000 black">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Military Broadcast Radio</h5>
                            <p className="grey-text text-lighten-4">"Giving Veterans a Voice"</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2021 Military Broadcast Radio
                </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer