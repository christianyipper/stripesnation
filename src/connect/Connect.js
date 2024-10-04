import { Helmet } from "react-helmet";

import Wallpaper from "../assets/img/yipper-wallpaper.jpg";
import WallpaperHalf from "../assets/img/yipper-wallpaper-half.jpg";
import Button from "../components/Button";

const Contact = () => {
    return (
        <div id="connect" className="contact">
            <Helmet>
                <title>Stripes Nation | Connect | Referee & Sports Photography</title>
                <meta property="og:title" content="Stripes Nation | Connect | Referee & Sports Photography"/>

                <meta name="description" content="Stripes Nation was founded by fellow hockey official Christian Yip. Connect with him to follow his web development and graphics design projects."/>
                <meta name="og:description" content="Stripes Nation was founded by fellow hockey official Christian Yip. Connect with him to follow his web development and graphics design projects."/>

                <meta name="keywords" content="referee photography, sports photography, hockey referees, hockey linespeople, on-ice officials, hockey officiating, hockey community, officiating community, referee brand, photography for amateur hockey referees and linespeople, inclusive photography platform, hockey referees media, Christian Yip, hockey officials, visual storytelling for on-ice officials, ice hockey, sports media, minor hockey referees and linespeople, minor hockey officials, amateur hockey referees and linespeople, amateur hockey officials, connect with us"/>

                <meta property="og:url" content="https://stripesnation.com/connect"/>
            </Helmet>
            <section className="img-wrap">
                    <div className="img-overlay"/>
                    <img className="img-front" src={ Wallpaper } alt="Collage of Christian Yip looking in the distance, officiating a hockey game, and holding a dslr camera"/>
                    <img className="img-back" src={ WallpaperHalf } alt="Collage of Christian Yip looking in the distance, officiating a hockey game, and holding a dslr camera"/>
            </section>
            <section className="content">
                <article>
                    <h1>Christian Yip</h1>
                    <div>
                        <p>Photographer</p>
                        <hr/>
                        <p>Front-End Developer</p>
                        <hr/>
                        <p>Graphics Designer</p>
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
                        <p className="description">Dev Portfolio</p>
                    </article>
                    <article>
                        <Button
                            text="christian@yipper.ca"
                            variant="tertiary"
                            link="christian@yipper.ca"
                            target="_blank"
                        />
                        <p className="description">Business Email</p>
                    </article>
                    <article>
                        <Button
                            text="in/christianyipper"
                            variant="tertiary"
                            link="https://www.linkedin.com/in/christianyipper/"
                            target="_blank"
                        />
                        <p className="description">Personal LinkedIn</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Contact;