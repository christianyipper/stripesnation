import React, { useState } from 'react';

import LogoSN from "../assets/icons/LogoSN";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Linkedin from "../assets/icons/Linkedin";

import Burger from "../assets/icons/Burger"
import Close from "../assets/icons/Close";

import NavText from "../components/NavText"

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const burgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={ isActive ? "menu-open" : "" }>
            <div>
                <section className="nav-left">
                    <a className="icon-link" href="/">
                        <LogoSN/>
                    </a>
                </section>
                <section className="nav-mid">
                    <NavText
                        text="Gallery"
                        textclass="gallery"
                        link="/gallery"
                        active="gallery-active"
                    />
                    <NavText
                        text="About"
                        textclass="about"
                        link="/about"
                        active="about-active"
                    />
                    <NavText
                        text="Connect"
                        textclass="connect"
                        link="/connect"
                        active="contact-active"
                    />
                </section>
                <section className="nav-right">
                    <a className="icon-link instagram" href="" target="_blank">
                        <Instagram/>
                    </a>
                    <a className="icon-link facebook" href="" target="_blank">
                        <Facebook/>
                    </a>
                    <a className="icon-link linkedin" href="" target="_blank">
                        <Linkedin/>
                    </a>
                </section>
                <section className="nav-burger" onClick={ burgerClick }>
                    <Burger active={ isActive ? "hide" : "show" }/>
                    <Close active={ isActive ? "show" : "hide" }/>
                </section>
            </div>
        </nav>
    )
}

export default Nav;