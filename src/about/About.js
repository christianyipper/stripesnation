import { Helmet } from "react-helmet";

import OurStoryLogo from '../assets/img/about-img/StripesNation-OurStory.png';
import PaperLogo from '../assets/img/about-img/logo-draft.webp';
import RefereePhoto from '../assets/img/about-img/referee-photoshoot.jpg';
import YipperPhoto from '../assets/img/about-img/profile-img.webp';

const About = () => {
    
    return (
        <div id="about" className="about">
            <Helmet>
                <title>About | Stripes Nation | Referee & Sports Photography</title>
                <meta property="og:title" content="About | Stripes Nation | Referee & Sports Photography"/>

                <meta name="description" content="Our mission is to provide a platform devoted to showcasing the passion and dedication of on-ice officials, fostering a positive and inclusive community within the hockey world."/>
                <meta name="og:description" content="Our mission is to provide a platform devoted to showcasing the passion and dedication of on-ice officials, fostering a positive and inclusive community within the hockey world."/>

                <meta name="keywords" content="referee photography, sports photography, hockey referees, hockey linespeople, on-ice officials, hockey officiating, hockey community, officiating community, referee brand, photography for amateur hockey referees and linespeople, inclusive photography platform, hockey referees media, Christian Yip, hockey officials, visual storytelling for on-ice officials, ice hockey, sports media, minor hockey referees and linespeople, minor hockey officials, amateur hockey referees and linespeople, amateur hockey officials, about Stripes Nation, about hockey referees, about on-ice officiating"/>

                <meta property="og:url" content="https://stripesnation.com/about"/>
            </Helmet>

            {/* <section className="img-wrap">
                <div className="img-overlay"/>
                <img src={ SNice } alt=""/>
            </section> */}
            <img src={ OurStoryLogo } alt="" />
            <h1>Our Story</h1>
            <section className="about-content">
                <article className="content-1">
                    <h2>The<span> </span>Beginning</h2>
                    <p>Stripes Nation is a non-profit referee & sports photography brand which began as a passion project by Christian Yip, a web developer and graphics designer. Driven by his love for hockey, he created a brand that reflected the spirit and values of the officiating community. The logo, font, and icons were carefully designed to evoke the elements of the referee uniform and the game's fast-paced nature.</p>
                </article>
                <div className="about-photo a1">
                    <img src={ PaperLogo } alt="Image of the Stripes Nation logo being drafted on paper" />
                </div>
            </section>
            <section className="about-content">
                <article className="content-2">
                    <h2>The<span> </span>Mission</h2>
                    <p>Stripes Nation aims to bridge the gap in mainstream media by amplifying the often-overlooked perspectives of amateur hockey referees. Our mission is to provide a platform devoted to showcasing the passion and dedication of on-ice officials, fostering a positive and inclusive community within the hockey world.</p>
                </article>
                <div className="about-photo b1">
                    <img src={ RefereePhoto } alt="On-ice photo shoot of two amateur officials posing" />
                </div>
            </section>
            <section className="about-content">
                <article className="content-3">
                    <h2>The<span> </span>Team</h2>
                    <p>Stripes Nation is a one man team operated by fellow hockey official Christian Yip. He’s developed the entire brand from the ground up, tackling all aspects of the business. From graphics design to web development, he now occasionally spends time capturing game-day moments for social media.</p>
                </article>
                <div className="about-photo c1">
                    <img src={ YipperPhoto } alt="Profile image of Christian Yip" />
                </div>
            </section>
        </div>
    )
}

export default About;