import { Helmet } from "react-helmet";

import Wallpaper from "../assets/img/connect-img/wallpaper-bg.webp";
import WallpaperHalf from "../assets/img/connect-img/wallpaper-outline.webp";
import Button from "../components/Button";

const Contact = () => {
    return (
        <div id="connect" className="contact">
            <Helmet>
                <title>Connect | Stripes Nation | Referee & Sports Photography</title>
                <meta property="og:title" content="Connect | Stripes Nation | Referee & Sports Photography"/>

                <meta name="description" content="Stripes Nation was founded by fellow hockey official Christian Yip. Connect with him to follow his web development and graphics design projects."/>
                <meta name="og:description" content="Stripes Nation was founded by fellow hockey official Christian Yip. Connect with him to follow his web development and graphics design projects."/>

                <meta name="keywords" content="referee photography, sports photography, hockey referees, hockey linespeople, on-ice officials, hockey officiating, hockey community, officiating community, referee brand, photography for amateur hockey referees and linespeople, inclusive photography platform, hockey referees media, Christian Yip, hockey officials, visual storytelling for on-ice officials, ice hockey, sports media, minor hockey referees and linespeople, minor hockey officials, amateur hockey referees and linespeople, amateur hockey officials, connect with us"/>

                <meta property="og:url" content="https://stripesnation.com/connect"/>
            </Helmet>
            <section className="img-wrap">
                    {/* <div className="img-overlay"/> */}
                    <img className="img-front" src={ Wallpaper } alt="Collage of Christian Yip looking in the distance, officiating a hockey game, and holding a dslr camera"/>
                    <img className="img-back" src={ WallpaperHalf } alt="Collage of Christian Yip looking in the distance, officiating a hockey game, and holding a dslr camera"/>
            </section>
            <section className="content">
                <article>
                    <h1>Christian Yip</h1>
                    <div>
                        <h2>Photographer</h2>
                        <hr/>
                        <h2>Front-End Developer</h2>
                        <hr/>
                        <h2>Graphics Designer</h2>
                    </div>
                </article>
                <div>
                    <article>
                        <Button
                            text="www.yipper.ca"
                            variant="tertiary"
                            link="https://www.yipper.ca"
                            target="_blank"
                        />
                        <h3 className="description">Dev Portfolio</h3>
                    </article>
                    <article>
                        <Button
                            text="christian@yipper.ca"
                            variant="tertiary"
                            link="christian@yipper.ca"
                            target="_blank"
                        />
                        <h3 className="description">Business Email</h3>
                    </article>
                    <article>
                        <Button
                            text="in/christianyipper"
                            variant="tertiary"
                            link="https://www.linkedin.com/in/christianyipper/"
                            target="_blank"
                        />
                        <h3 className="description">Personal LinkedIn</h3>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Contact;