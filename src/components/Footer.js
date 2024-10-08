import WordmarkSN from "../assets/icons/WordmarkSN";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Linkedin from "../assets/icons/Linkedin";

import NavText from "../components/NavText"

const Footer = () => {
    return (
        <footer>
            <section className="footer-top">
                <div className="footer-icons">
                <a className="icon-link" href="">
                        <WordmarkSN/>
                    </a>
                    <a className="icon-link" href="">
                        <Instagram/>
                    </a>
                    <a className="icon-link" href="">
                        <Facebook/>
                    </a>
                    <a className="icon-link" href="">
                        <Linkedin/>
                    </a>
                </div>
                <div className="footer-links">
                    <a className="text-link" href="/gallery">Gallery</a>
                    <hr/>
                    <a className="text-link" href="/about">About</a>
                    <hr/>
                    <a className="text-link" href="/connect">Connect</a>
                    <span>
                        <hr/>
                        <a className="text-link" href="/branding">Branding</a>
                        <hr/>
                        <a className="text-link" href="">Legal</a>
                    </span>
                </div>
                <div className="footer-links-mobile">
                    <a className="text-link" href="/branding">Branding</a>
                    <hr/>
                    <a className="text-link" href="">Legal</a>
                </div>
            </section>
            <section className="footer-bot">
                <p>copyright © 2024 Stripes Nation</p>
            </section>
        </footer>
    )
}

export default Footer;