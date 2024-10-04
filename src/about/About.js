import SNice from '../assets/img/stripesnation-icebg.jpg';
import OurStoryLogo from '../assets/img/StripesNation-OurStory.png';
import Bumper from '../assets/img/StripesNation-long.mp4';

import PaperLogo from '../assets/img/about-paper-draft.jpg';
import RefereePhoto from '../assets/img/referee-photoshoot.jpg';
import YipperPhoto from '../assets/img/profile-img.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            {/* <section className="img-wrap">
                <div className="img-overlay"/>
                <img src={ SNice } alt=""/>
            </section> */}
            <img src={ OurStoryLogo } alt="" />
            {/* <video loop autoPlay muted>
                <source src={ Bumper } type="video/mp4"/>
            </video> */}
            <section className="about-content">
                <article className="content-1">
                    <h2>The<span> </span>Beginning</h2>
                    <p>Stripes Nation is a referee & sports photography brand which began as a passion project by Christian Yip, a web developer and graphics designer. Driven by his love for hockey, he created a brand that reflected the spirit and values of the officiating community. The logo, font, and icons were carefully designed to evoke the elements of the referee uniform and the game's fast-paced nature.</p>
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