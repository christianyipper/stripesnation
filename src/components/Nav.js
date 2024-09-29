import LogoSN from "../assets/icons/LogoSN";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Linkedin from "../assets/icons/Linkedin";

import NavText from "../components/NavText"

const Nav = () => {
    return (
        <nav>
            <div>
                <section className="nav-left">
                <a className="icon-link" href="/">
                    <LogoSN/>
                </a>
                </section>
                <section className="nav-mid">
                    <NavText
                        text="Gallery"
                        link="/"
                    />
                    <NavText
                        text="About"
                        link="/"
                    />
                    <NavText
                        text="Contact"
                        link="/"
                    />
                </section>
                <section className="nav-right">
                    <a className="icon-link" href="">
                        <Instagram/>
                    </a>
                    <a className="icon-link" href="">
                        <Facebook/>
                    </a>
                    <a className="icon-link" href="">
                        <Linkedin/>
                    </a>
                </section>
            </div>
        </nav>
    )
}

export default Nav;